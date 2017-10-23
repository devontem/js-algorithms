function mergeSort(array){
	if (array.length < 2) return array;

	var mid = Math.floor(array.length/2);
	var left = array.slice(0, mid);
	var right = array.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){

	var result = [];

	while (left.length && right.length){
		if (left[0] < right[0]){
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());

	return result;
}

// test
console.log(mergeSort([4,10,1,22,3,6,8,-1]), [-1, 1, 3, 4, 6, 8, 10, 22]);