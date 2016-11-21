/*
 * Depth First Search 
 */

 function BSTDepthSearch(start, target){

 	var s = []; // uses Stack data structure
 	s.push(start);

 	while (s.length){
 		var curr = s.pop();

 		if (curr === target){
 			return true;
 		}

 		if (curr.left) s.push(curr.left);
 		if (curr.right) s.push(curr.right);
 	}
 	return false;
 }

 /*
  * Breadth First Search
  */

  function BTSBreadthSearch(root, target){

  	var q = []; // uses Queue data structure
  	q.push(root);

  	while (q.length){
  		var curr = q.shift();

  		if (curr === target){
  			return true;
  		}

  		if (curr.left) q.push(curr.left);
  		if (curr.right) q.push(curr.right)
  	}
  return false;
  }







