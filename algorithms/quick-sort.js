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

	swap(array, wall, end);
	return wall;
}

// Heavily commented version of the code


function quickSort(array, start, end){
	if (start < end){

		// select an arbitrary pivot, the middle, for example
		var pivot = Math.floor((start + end) / 2);
		var newPivot = partition(array, start, end, pivot);

		// quicksort all the elements to the left of the pivot (remainder of array)
		quickSort(array, start, newPivot)

		// quicksort all the elements to the right of the pivot (remainder of array)
		quickSort(array, newPivot + 1, end);
	}
}

function swap(array, a, b){
	var temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

function partition(array, start, end, pivot){

	//capture pivot value
	var pivotValue = array[pivot];
	
	// set wall as the starting point
	var wall = start;

	//swap pivot with end, for iteration purposes
	swap(array, pivot, end);

	//begin iterating through the array, and replacing values
	for (var i = start; i < end; i++){

		// if value is less than the pivot value, increment the wall and swap the values (so lesser values are left of wall)
		if (array[i] < pivotValue){
			swap(array, i, wall);
			wall++;
		}
	}

	// after all values less than wall are to the right, replace original pivot with the wall
	swap(array, end, wall);

	// return the "wall" as it will become the ne wpivot
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
