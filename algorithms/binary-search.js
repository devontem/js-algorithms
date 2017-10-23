function binarySearch(array, target){  
    var start = 0, end = array.length-1; // set initial start, end

    while (start <= end){
    	mid = Math.floor((start + end) / 2); // each iteration, calculate mid

	    if (array[mid] < target){
	    	start = mid + 1; // start is 1 bigger than mid
	    } else if (array[mid] > target){
	    	end = mid - 1; // start is one less than mid
	    } else if (array[mid] === target){
	    	return mid; // start is mid
	    }
	}

	return -1;
}

// test
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(binarySearch(primes, 79), 21);
console.log(binarySearch(primes, 90), -1);