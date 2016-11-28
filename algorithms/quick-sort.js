function quicksort(array, start, end){
	if (start < end){
		var pivot = Math.floor((start + end) /2);
		var newPivot = partition(array, start, end, pivot); // return index of our new pivot, and sorts the array
		quicksort(array, start, newpivot-1);
		quicksort(array, newpivot+1, end);
	}
}

function swap(array, v1, v2){
	var temp = array[v1];
	array[v1] = array[v2];
	array[v2] = temp;
}

function partition(array, start, end, pivot){
	
	var pivotvalue = array[pivot], wall = start;
	swap (array, pivot, end);

	for (var i = wall; i < end; i++){
		if (array[i] < pivotValue){
			swap(array, wall, i);
			wall++;
		}
	}

	// puts the pivot in the right order
	swap(array, wall, end);
	return wall;
}

// [4,2,6,8,1,3]
// [4,2,3,8,1,6]
// [4,2,3,8,1,6] w = s, 0
// [4,2,3,8,1,6]w=1
// [4,2,3,8,1,6]w=2
// [4,2,3,8,1,6]w=4
// [4,2,3,1,8,6]w=5
// [4,2,3,1,6,8]w=5
// [4,2,3,1][6][8]
// [4,1,3,2]w =0
// [1,4,3,2]w =1
// [1,2,3,4]w =1
// [1][2][3,4]
//          [3,4]w=0
//          [4,3]w=0
//          [3,4]w=0
//          [3][4]
// [1,2,3,4,6,8]
