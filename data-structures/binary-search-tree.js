function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null
}

BinarySearchTree.prototype.add = function(data) {
	if (!this.root){
		this.root = new Node(data);
	} else {

		var curr = this.root;
		while (curr){
			if (data === curr.data) return curr; // no duplicates allowed

			if (data < curr.data){
				if (!curr.left){
					curr.left = new Node(data);
					return curr.left;
				}
				curr = curr.left;
			} else {
				if (!curr.right){
					curr.right = new Node(data);
					return curr.right;
				}
				curr = curr.right;
			}
		}
	}
};
BinarySearchTree.prototype.remove = function(data) {

};
BinarySearchTree.prototype.contains = function(data) {
	var result = false;
	this.traverseBFS(function(item){
		if (item.data === data){
			result = true;
		}
	});
	return result;
};
BinarySearchTree.prototype._preOrder = function(node, fn) {
	if (node){
		fn(node);

		this._preOrder(node.left, fn);
		this._preOrder(node.right, fn);
	}
};
BinarySearchTree.prototype._inOrder = function(node, fn) {
	if (node){

		this._inOrder(node.left, fn);

		fn(node);

		this._inOrder(node.right, fn);
	}
};
BinarySearchTree.prototype._postOrder = function(node, fn) {
	if (node){
		this._preOrder(node.left, fn);
		this._preOrder(node.right, fn);

		fn(node);
	}
};
BinarySearchTree.prototype.traverseDFS = function(fn, method) {
	if (method){
		this['_' + method](this.root, fn);
	} else {
		this._preOrder(this.root, fn);
	}
};
BinarySearchTree.prototype.traverseBFS = function(fn) {
	var q = [];
	var curr;
	q.push(this.root);

	while (q.length){
		curr = q.shift();

		fn(curr); // callback

		if (curr.left) q.push(curr.left);
		if (curr.right) q.push(curr.right);
	}
};
BinarySearchTree.prototype.print = function() {

};
BinarySearchTree.prototype.printByLevel = function() {

};
BinarySearchTree.prototype.getMin = function(node) {
	if (!node) node = this.root;
	var curr = node;

	while (curr.left){
		curr = curr.left
	}

	return curr;
};
BinarySearchTree.prototype.getMax = function(node) {
	if (!node) node = this.root;

	var curr = node;

	while (curr.right){
		curr = curr.right
	}

	return curr;
};
BinarySearchTree.prototype.getHeight = function(node) {
	if (!node){
		return -1;
	}
	var left = this.getHeight(node.left);
	var right = this.getHeight(node.right);
	return Math.max(left, right) + 1;
};

BinarySearchTree.prototype.isBalanced = function(node) {
	if (!node) return true;

	if (Math.abs(this.getHeight(node.left) - this.getHeight(node.right)) > 1){
		return false;
	} else {
		return this.isBalanced(node.left) && this.isBalanced(node.right);
	}
};
BinarySearchTree.prototype._checkHeight = function(node) {

};


var binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
// binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8
// binarySearchTree.printByLevel(); // => 5 \n 3 7 \n 2 4 6 8
console.log('--- DFS inOrder');
binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'inOrder'); // => 2 3 4 5 6 7 8
console.log('--- DFS preOrder');
binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'preOrder'); // => 5 3 2 4 7 6 8
console.log('--- DFS postOrder');
binarySearchTree.traverseDFS(function(node) { console.log(node.data); }, 'postOrder'); // => 2 4 3 6 8 7 5
console.log('--- BFS');
binarySearchTree.traverseBFS(function(node) { console.log(node.data); }); // => 5 3 7 2 4 6 8
console.log('min is 2:', binarySearchTree.getMin()); // => 2
console.log('max is 8:', binarySearchTree.getMax()); // => 8
console.log('tree contains 3 is true:', binarySearchTree.contains(3)); // => true
console.log('tree contains 9 is false:', binarySearchTree.contains(9)); // => false
console.log('tree height is 2:', binarySearchTree.getHeight(binarySearchTree.root)); // => 2
console.log('tree is balanced is true:', binarySearchTree.isBalanced(this.root)); // => true
