/*
 * Depth First Traversal
 */

 function GraphDepthFirstTraversal(start){

 	var visited = {}; // Uses hashtable data structure
 	var s = []; // Uses Stack data structure
 	s.push(start);

 	while (s.length){
 		var curr = s.pop();

 		if (!visited[curr]){
 			visited[curr] = true;
 			console.log(curr.value); // Displaying the data
 		}

 		// Adding edges to the stack to be evaluated later
 		curr.edges.forEach(function(edge){
 			s.push(edge);
 		});
 	}
 }


 /*
  * Breadth First Traversal
  */

  function GraphBreadthFirstTraversal(start){

 	var visited = {}; // Uses hashtable data structure
 	var q = []; // Uses Queue data structure
 	q.push(start);

 	while (q.length){
 		var curr = q.shift();

 		if (!visited[curr]){
 			visited[curr] = true;
 			console.log(curr.value); // Displaying the data
 		}

 		// Adding edges to the stack to be evaluated later
 		curr.edges.forEach(function(edge){
 			q.push(edge);
 		});
 	}
  }
















