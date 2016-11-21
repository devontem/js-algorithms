/*
 * Depth First Traversal
 */

 // Preorder

 function BSTDepthFirstPreorder(root){

 	if (root === null){
 		return;
 	}

 	console.log(root.value); // display comes before

 	BSTDepthFirstPreorder(root.left);

 	BSTDepthFirstPreorder(root.right);
 }

 // Inorder

 function BSTDepthFirstInorder(root){

 	if (root === null){
 		return;
 	}

 	BSTDepthFirstInorder(root.left);

 	console.log(root.value); // display comes between

 	BSTDepthFirstInorder(root.right);
 }

 // Postorder

 function BSTDepthFirstPostorder(root){

 	if (root === null){
 		return;
 	}

 	BSTDepthFirstPostorder(root.left);

 	BSTDepthFirstPostorder(root.right);

 	console.log(root.value); // display comes after 
 }


 /*
  * Breadth First Traversal (level order)
  */

  function BSTBreadtFirstTraversal(root){

  	var q = []; // Uses queue data structure
  	q.push(root)

  	while (q.length){
  		var curr = q.shift();

  		console.log(curr.value);

  		if (curr.left) q.push(curr.left);
  		if (curr.right) q.push(curr.right);
  	}
  }
















