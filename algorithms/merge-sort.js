/*
 * Merge Sort
 */

 /*  General CS Algorithm
  *  p: start of array, r: end of array, q: middle index
  *  Mutates the original array
  */
 function mergeSort(array, p, r){
 	// if length is less than 2
 	if (p < r){

 	var q = Math.floor((r-p)/2) + p; // Finding middle index

 	// breaking array into subarrays and sorting them
 	mergeSort(array, p, q); // lowerhalf: including mid
 	mergeSort(array, q+1, r) // higherhalf: excluding mid
 	merge(array, p, q, r); // Merging the two subarrays
  }
 }

 function merge(array, p, q, r){
 	var lowerHalf = [];
 	var higherHalf = [];
 	var k = p; // Copy of the beginning position
	
  // Creating a lower half array
 	while (k <= q){
  	lowerHalf.push(array[k])
    k++;
  }
	
  // Creating a higher half array
 	while (k <= r){
  	higherHalf.push(array[k]);
  	k++;
  }
  
  // resetting k to 'start'
  k = p;
	
  // sorting lower and higher array into original array
 	while (higherHalf.length && lowerHalf.length){
 		if (higherHalf[0] < lowerHalf[0]){
 			array[k] = higherHalf.shift();
 		} else {
 			array[k] = lowerHalf.shift()
 		}
 		k++;
 	}

 	while (higherHalf.length){
 		array[k] = higherHalf.shift();
 		k++;
 	}

 	while (lowerHalf.length){
 		array[k] = lowerHalf.shift();
 		k++;
 	}
 }


 /*  Javascript Algorithm
  *  Returns a new array
  */

	function mergeSort(array){
		if (array.length < 2) return array;
	  
		var mid = Math.floor(array.length/2);
		var left = mergeSort(array.slice(0, mid));
		var right = mergeSort(array.slice(mid));

		return merge(left, right);
	}

	function merge(left, right){
		var final = [];

		while (left.length > 0 && right.length > 0){
			if (left[0] < right[0]){
				final.push(left.shift());
			} else {
				final.push(right.shift());
			}
		}

		while (left.length){
			final.push(left.shift());
		}

		while (right.length){
			final.push(right.shift());
		}
		
		return final;
	}

	// mergeSort([7,2,3,9,10,2,0,5,1])



function mergeSort(array){
		if (array.length < 2) return array;
	  
		var mid = Math.floor(array.length/2);
		var left = mergeSort(array.slice(0, mid));
		var right = mergeSort(array.slice(mid));

		return merge(left, right);
	}

	function merge(left, right){
		var final = [];

		while (left.length > 0 && right.length > 0){

      if (left[0] < right[0]){
				final.push(left.shift());
			} else {
				final.push(right.shift());
			}
		}

		while (left.length){
			final.push(left.shift());
		}

		while (right.length){
			final.push(right.shift());
		}
		console.log(final)
		return final;
	}


