/*
 * Depth First Search
 * NOTE: Implementation differs from graph-traversals.js in order to experiment with different inputs
 */

 function GraphDepthFirstTraversal(graph, start, target){

 	// adding & setting visited prop to false
 	graph.getNodes(function(node){
 		node.visited = false;
 	});

 	var s = []; // Uses Stack data structure
 	s.push(start);

 	while (s.length){
 		var curr = s.pop();

 		if (!curr.visited){
 			curr.visited = true;

 			if (curr === target) return true;
 		}

 		// Adding edges to the stack to be evaluated later
 		curr.edges.forEach(function(edge){
 			s.push(edge);
 		});
 	}
 	return false;
 }


 /*
  * Breadth First Search
  */

  function GraphBreadthFirstTraversal(graph, start, target){

  	// adding & setting visited prop to false
 	graph.getNodes(function(node){
 		node.visited = false;
 	});

 	var q = []; // Uses Queue data structure
 	q.push(start);

 	while (q.length){
 		var curr = q.shift();

 		if (!curr.visited){
 			curr.visited = true;
 			
 			if (curr === target) return true;
 		}

 		// Adding edges to the stack to be evaluated later
 		curr.edges.forEach(function(edge){
 			q.push(edge);
 		});
 	}
 	return false;
  }












