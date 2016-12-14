function binaryTree(){
	this.items = 0;
	this.root = null;

	this.add = function(val){
		var node = new Node(val);

		if (!this.root){
			this.root = node;
			this.items++;
			return
		}

		var curr = this.root;
		while (curr){

			// if value is smaller than current
			if (val < curr.val){

				if (curr.left) {
					curr = curr.left;
				} else {
					curr.left = node;
					this.items++;
					return;
				}

			}

			// if value is bigger than current
			if (val > curr.val){

				if (curr.right) {
					curr = curr.right;
				} else {
					curr.right = node;
					this.items++;
				    return;
				}
			}
		}
	}

	this.BFS = function(value){
		var node = this.root;
		var q = [];
		q.push(node);

		while (q.length){
			var curr = q.shift();

			// check if matches the value
			if (curr.val === value) return curr;

			// add more values to the queue
			if (curr.left) q.push(curr.left);
			if (curr.right) q.push(curr.right);
		}
	}

	this.DFS = function(value){
		var node = this.root;
		var s = [];
		s.push(node);

		while (q.length){
			var curr = s.pop();

			// check if matches the value
			if (curr.val === value) return curr;

			// add more values to the queue
			if (curr.left) s.push(curr.left);
			if (curr.right) s.push(curr.right);
		}
	}

	this.traverseBFS = function(cb){
		var node = this.root;
		var q = [];
		q.push(node);

		while (q.length){
			var curr = q.shift();

			// apply callback to current node
			cb(curr);

			// add more values to the queue
			if (curr.left) q.push(curr.left);
			if (curr.right) q.push(curr.right);
		}
	}

	this.traverseDFS = function(cb){
		var node = this.root;
		var s = [];
		s.push(node);

		while (q.length){
			var curr = s.pop();

			// apply callback to current node
			cb(curr);

			// add more values to the queue
			if (curr.left) s.push(curr.left);
			if (curr.right) s.push(curr.right);
		}
	}
}

function Node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}