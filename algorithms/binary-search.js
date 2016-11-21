/*
 * Binary Search
 */

 /*
 * Returns index of array
 */


var binarySearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    
    
    while (min <= max){
        var mid = Math.floor((max - min)/2)+min;
        
        if (targetValue > array[mid]){
            min = mid+1;
        } else if (targetValue < array[mid]){
            max = mid-1;
        } else {
            return mid;
        }
    }

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);