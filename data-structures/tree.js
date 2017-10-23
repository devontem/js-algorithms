function Node(data) {
	this.data = data;
	this.children = [];
}

function Tree() {
	this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
	if (!this.root){
		this.root = new Node(data);
	} 
	else if (data && toNodeData){
		var node = this.findBFS(toNodeData);
		node.children.push(new Node(data));
	}
	else {
		return 'Error: Params are missing';
	}
};
Tree.prototype.remove = function(data) {
	var curr;
	var q = [];
	q.push(this.root);

	while (q.length){
		curr = q.shift();

		if (curr.children.length){
			for (var i = 0; i < curr.children.length; i++){
				if (curr.children[i].data === data){
					curr.children.splice(i, 1);
					return;
				}
				else {
					q.push(curr.children[i]);
				}
			}
		}
	}
};
Tree.prototype.contains = function(data) {
	this.traverseBFS(function(item){
		if (item === data){
			return true;
		}
	});
};
Tree.prototype.findBFS = function(data) {
	var result = -1;
	this.traverseBFS(function(item){
		if (item.data === data){
			result = item;
		}
	});
	return result;
};
Tree.prototype._preOrder = function(node, fn) {
	if (node){

		fn(node); // callback

		for (var i = 0; i < node.children.length; i++){
			this._preOrder(node[i], fn);
		}
	}
};
Tree.prototype._postOrder = function(node, fn) {
	if (node){
		for (var i = 0; i < node.children.length; i++){
			this._preOrder(node[i], fn);
		}

		fn(node); // callback
	}
};
Tree.prototype.traverseDFS = function(fn, method) {
	if (method){
		this['_' + method](this.root, fn);
	} 
	else {
		this._preOrder(this.root, fn);
	}
};
Tree.prototype.traverseBFS = function(fn) {
	var curr;
	var q = [];
	q.push(this.root);

	while (q.length){
		curr = q.shift();

		fn(curr); // callback

		if (curr.children.length){
			q = q.concat(curr.children);
		}
	}
};
Tree.prototype.print = function() {

};
Tree.prototype.printByLevel = function() {

};

var tree = new Tree();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');
tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
console.log('tree contains dev1 is true:', tree.contains('dev1')); // => true
console.log('tree contains dev4 is false:', tree.contains('dev4')); // => false
console.log('--- BFS');
tree.traverseBFS(function(node) { console.log(node.data); }); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
console.log('--- DFS preOrder');
tree.traverseDFS(function(node) { console.log(node.data); }, 'preOrder'); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
console.log('--- DFS postOrder');
tree.traverseDFS(function(node) { console.log(node.data); }, 'postOrder'); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
tree.remove('cmo');
tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
tree.remove('cfo');
tree.print(); // => ceo | cto | dev1 dev2 dev3