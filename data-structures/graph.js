//graph, add vertez, remove vertex, add edge, remove edge,size, relations, traverseDFS (all) w/ callback,  traverse BFS, pathfromto, print

var Graph = function(){
	this.nodes = [];
	this.items = 0;

	this.add = function(value){
		var node = new Node(value);

		// adding a new node
		this.nodes.push(node);
		this.items++;
		return node;
	}

	this.remove = function(value){

		this.nodes = this.nodes.filter(function(v){
			return v === value;
		});
	}

	this.addEdge = function(node1, node2){
		if (!node1.edges[node2]) node1.edges[node2] = node2;
		if (!node2.edges[node1]) node2.edges[node1] = node1;
	}

	this.removeEdge = function(node1, node2){
		if (!node1.edges[node2]) delete node1.edges[node2];
		if (!node2.edges[node1]) delete node2.edges[node1];
	}

	this.BFS = function(beginNode, value){

		beginNode = beginNode || this.nodes[0];
		var q = [];
		q.push(beginNode);

		while (q.length){
			var curr = q.shift();

			// if there is a match, return the node
			if (curr.val === value) return curr;

			// mark the current node as visited
			curr.visited = true;

			// only add nodes that aren't visit to the queue
			curr.edges.forEach(function(v){
				if (!v.visited) q.push(v);
			});
		}
		return -1;
	}

	this.DFS = function(beginNode, value){

		beginNode = beginNode || this.nodes[0];
		var s = [];
		s.push(beginNode);

		while (s.length){

			var curr = s.pop();

			// if there is a match, return the node
			if (curr.val === value) return curr;

			// mark the current node as visited
			curr.visited = true;

			// only add nodes that aren't visit to the stack
			curr.edges.forEach(function(v){
				if (!v.visited) s.push(v);
			})
		}
		return -1;
	}

	this.traverseBFS = function(beginNode, cb){
		beginNode = beginNode || this.nodes[0];
		var q = [];
		q.push(beginNode);

		while (q.length){
			var curr = q.shift();

			// callback
			cb(curr);

			// mark the current node as visited
			curr.visited = true;

			// only add nodes that aren't visit to the queue
			curr.edges.forEach(function(v){
				if (!v.visited) q.push(v);
			});
		}
		return -1;
	}

	this.traverseDFS = function(beginNode, cb){
		beginNode = beginNode || this.nodes[0];
		var s = [];
		s.push(beginNode);

		while (s.length){

			var curr = s.pop();

			// callback
			cb(curr);

			// mark the current node as visited
			curr.visited = true;

			// only add nodes that aren't visit to the stack
			curr.edges.forEach(function(v){
				if (!v.visited) s.push(v);
			})
		}
		return -1;
	}
}

var Node = function(value){
	this.val = value;
	this.edges = {};
}











