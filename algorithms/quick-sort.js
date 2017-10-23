function quickSort(array, start, end){
	if (!start) start = 0;
	if (!end) end = array.length - 1;
	if (start >= end) return;

	var pivot = Math.floor((start + end) / 2);
	var newPivot = partition(array, pivot, start, end);

	quickSort(array, start, newPivot - 1); // sort left array excluding already sorted pivot
	quickSort(array, newPivot + 1, end); // sort right array excluding already sorted pivot
}

function partition(array, pivot, start, end){

	var wall = start; // set wall to be array start
	var pivotValue = array[pivot]; // capture pivot value

	swap(array, end, pivot); // swap wall and end for iteration purposes

	for (var i = start; i < end; i++){
		if (array[i] < pivotValue){
			swap(array, wall, i);
			wall++;
		}
	}

	swap(array, end, wall); // swap pivot to wall position (appropriate sorted position)

	return wall; // return wall (index of sorted pivot)
}

function swap(array, a, b){
	var temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

// test
var test = [8,2,1,4,-1];
quickSort(test);
console.log(test, [-1, 1, 2, 4, 8])