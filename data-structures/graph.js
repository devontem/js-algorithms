//graph, add vertez, remove vertex, add edge, remove edge,size, relations, traverseDFS (all) w/ callback,  traverse BFS, pathfromto, print

function Graph = function(){
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

function Vertex = function(val){
	this.val = val;
	this.edges = [];
}

Graph.prototype.addVertex = function(vertex){
	var vertex = new Vertex(val);

	this.vertices.push(vertex);
	this.numberOfEdges++;
}

Graph.prototype.removeVertex = function(vertex){
	var idx = -1;
	
	this.vertices.forEach(function(v, i){
		if (v === vertex) idx = 1;
	});

	if (idx > -1){
		this.vertices.splice(i, 1);
	}
}

Graph.prototype.addEdge = function(n1, n2){
	if (!n1.includes(n2)) n1.push(n2);
	if (!n2.includes(n1)) n2.push(n1);
}

Graph.prototype.removeEdge = function(n1, n2){
	var idx1 = n1.indexOf(n2);
	var idx2 = n2.indexOf(n1);

	if (idx1 > -1) n1.splice(idx1, 1);
	if (idx2 > -1) n2.splice(idx2, 1);

	this.numberOfEdges--;
}












