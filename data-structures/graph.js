function Graph() {
	this.vertices = [];
	this.edges = {};
	this.connections = 0;
}

Graph.prototype.addVertex = function(vertex) {
	this.vertices.push(vertex);
};
Graph.prototype.removeVertex = function(vertex) {
	var self = this;
	// remove vertex
	this.vertices = this.vertices.filter(function(item){
		return item !== vertex;
	});

	// remove all connections
	this.edges[vertex].forEach(function(item){
		self.removeEdge(vertex, item);
	});
};
Graph.prototype.addEdge = function(vertex1, vertex2) {
	if (!this.edges[vertex1]){
		this.edges[vertex1] = [];
	}
	if (!this.edges[vertex2]){
		this.edges[vertex2] = [];
	}

	if (!this.edges[vertex1].includes(vertex2)) this.edges[vertex1].push(vertex2);
	if (!this.edges[vertex2].includes(vertex1)) this.edges[vertex2].push(vertex1);

	this.connections++;
};
Graph.prototype.removeEdge = function(vertex1, vertex2) {
	if (!this.edges[vertex1] || !this.edges[vertex2]) return;

	this.edges[vertex1] = this.edges[vertex1].filter(function(item){
		return item !== vertex2;
	});

	this.edges[vertex2] = this.edges[vertex2].filter(function(item){
		return item !== vertex1;
	});
	this.connections--;
};
Graph.prototype.size = function() {
	return this.vertices.length;
};
Graph.prototype.relations = function() {
	return this.connections;
};
Graph.prototype.traverseDFS = function(vertex, fn) {
	if (!this.vertices.includes(vertex)){
		console.log("Vertex not found");
		return;
	} 

	var self = this,
		visited = {};

	function recurse(vertex, fn){
		visited[vertex] = true;
		fn(vertex);

		var vertexEdges = self.edges[vertex];
		if (vertexEdges){
			for (var i = 0; i < vertexEdges.length; i++){
				if (!visited[vertexEdges[i]]){
					recurse(vertexEdges[i], fn);
				}
			}
		}
	}

	recurse(vertex, fn);
};
Graph.prototype.traverseBFS = function(vertex, fn) {
	if (!this.vertices.includes(vertex)){
		console.log("Vertex not found");
		return;
	} 

	var visited = {};
	var q = [];
	q.push(vertex);

	while (q.length){
		var curr = q.shift();
		var vertexEdges = this.edges[curr];

		fn(curr);

		if (vertexEdges){
			for (var i = 0; i < vertexEdges.length; i++){
				if (!visited[vertexEdges[i]]){
					visited[vertexEdges[i]] = true;
					q.push(vertexEdges[i]);
				}
			}
		}
	}
};
Graph.prototype.pathFromTo = function(vertexSource, vertexDestination) {
	var self = this,
		final = -1;

	function recurse(vertex, visited, array){
		visited[vertex] = true;
		array.push(vertex);

		if (vertex === vertexDestination){
			final = array.join(' -> ');
		}

		if (self.edges[vertex]){
			self.edges[vertex].forEach(function(item){
				if (!visited[item]){
					recurse(item, visited, array);
				}
			});
		}
	}

	recurse(vertexSource, {}, []);
	return final;
};
Graph.prototype.print = function() {
	var str = '';
	var self = this;

	this.vertices.forEach(function(item, i){
		str += item + ' ';
		if (self.edges[item]) str += ' -> ' + self.edges[item].join(", ") + ' | ';
	});

	console.log(str);
};

var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
console.log('graph size (number of vertices):', graph.size(), 6); // => 6
console.log('graph relations (number of edges):', graph.relations(), 7); // => 7
graph.traverseDFS(1, function(vertex) { console.log(vertex); }); // => 1 2 3 4 5 6
console.log('---');
graph.traverseBFS(1, function(vertex) { console.log(vertex); }); // => 1 2 5 3 4 6
graph.traverseDFS(0, function(vertex) { console.log(vertex); }); // => 'Vertex not found'
graph.traverseBFS(0, function(vertex) { console.log(vertex); }); // => 'Vertex not found'
console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-5-1
console.log('path from 3 to 5:', graph.pathFromTo(3, 5)); // => 3-2-5
graph.removeEdge(1, 2);
graph.removeEdge(4, 5);
graph.removeEdge(10, 11);
console.log('graph relations (number of edges):', graph.relations(), 5); // => 5
console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-3-2-5-1
graph.addEdge(1, 2);
graph.addEdge(4, 5);
console.log('graph relations (number of edges):', graph.relations(), 7); // => 7
console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-5-1
graph.removeVertex(5);
console.log('graph size (number of vertices):', graph.size(), 5); // => 5
console.log('graph relations (number of edges):', graph.relations(), 4); // => 4
