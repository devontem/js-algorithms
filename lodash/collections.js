var lodash = function(){};

lodash.prototype.each = function(collection, fn){
	if (collection.constructor === 'Array'){
		for (var i = 0; i < collection.length; i++){
			fn(collection[i], i);
		}
	} else if (typeof(collection) === 'object'){
		var keys = Object.keys(collection);
		for (var i = 0; i < keys.length; i++){
			fn(collection[keys[i]], i);
		}
	}
};

lodash.prototype.map = function(collection, fn){
	if (collection.Constructor === 'Array'){
		for (var i = 0; i < collection.length; i++){
			collection[i] = fn(collection[i], i);
		}
	}
};

lodash.prototype.reduce = function(collection, fn){};

lodash.prototype.find = function(collection, fn){
	for (var i = 0; i < collection.length; i ++){
		if (fn(collection[i])){
			return collection[i];
		}
	}
	return null;
};

lodash.prototype.filter = function(collection, fn){
	var keep = [];

	for (var i = 0; i < collection.length; i++){
		if (fn(collection[i])){
			keep.push(collection[i]);
		}
	}

	return keep;
};

// takes array of objects, returns all objects contain all key-values of target
lodash.prototype.where = function(collection, target){
	var targetKeys = Object.keys(target);
	var final = [];

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];
		var keep = true;

		for (var j = 0; j < targetKeys.length; j++){
			var key = targetKeys[j];
			var value = target[key];

			if (!item[key] || item[key] !== value){ // if key or value doesn't match, set false
				keep = false;
			}
		}

		if (keep) final.push(item); // only push to final array if all key-value's matched (were true)
	}

	return final;
};

// same as find, but return first insance of matching target
lodash.prototype.findWhere = function(collection, target){
	var targetKeys = Object.keys(target);

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];
		var keep = true;

		for (var j = 0; j < targetKeys.length; j++){
			var key = targetKeys[j];
			var value = target[key];

			if (!item[key] || item[key] !== value){ // if key or value doesn't match, set false
				keep = false;
			}
		}

		if (keep) return item; // only push to final array if all key-value's matched (were true)
	}

	return undefined;
};

// return all values that fail test
lodash.prototype.reject = function(collection, fn){
	var keep = [];

	for (var i = 0; i < collection.length; i++){
		if (!fn(collection[i])){
			keep.push(collection[i]);
		}
	}

	return keep;
};

// return boolean; based on if all values pass test
lodash.prototype.every = function(collection, fn){
	for (var i = 0; i < collection.length; i++){
		if (!fn(collection[i])){
			return false;
		}
	}

	return true;
};

// return boolean; based on if some pass test
lodash.prototype.some = function(collection, fn){
	for (var i = 0; i < collection.length; i++){
		if (fn(collection[i])){
			return true;
		}
	}

	return false;
};

lodash.prototype.contains = function(collection, target){
	for (var i = 0; i < collection.length; i++){
		if (target === collection[i]){
			return true;
		}
	}

	return false;
};

// collection, methodName, *arguments
lodash.prototype.invoke = function(collection, methodName /*, arguments */){
	if (arguments.length) 
		args = Array.prototype.slice.call(arguments);
	else
		args = [];

	var keep = [];
	// iterate
	for (var i = 0; i < collection.length; i++){
		var item = collection[i];
		
		item[methodName].apply(item, args);
		keep.push(item[methodName].apply(item, args));
	}

	return keep;
};

// collection is list of objects, return the value for each property as an array
lodash.prototype.pluck = function(collection, property){
	var keep = [];

	for (var i = 0; i < collection.length; i++){
		if (collection[i][property]){
			keep.push(collection[i][property]);
		}
	}

	return keep;
};

// return object with max value of given property
lodash.prototype.max = function(collection, property){
	var max = collection[0];

	for (var i = 0; i < collection.length; i++){
		if (collection[i][property] > max[property]){
			max = collection[i][property];
		}
	}

	return max;
};

lodash.prototype.min = function(collection, property){
	var min = collection[0];

	for (var i = 0; i < collection.length; i++){
		if (collection[i][property] < min[property]){
			min = collection[i];
		}
	}

	return min;
};

lodash.prototype.sortBy = function(collection, fn){};

// return object, group values in the collection by a shared iteratee (fn or property)
lodash.prototype.groupBy = function(collection, iteratee){
	var map = {};

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];

			var key = iteratee(item);
			if (!map[key]) map[key] = []; // if value isn't in map, add it
			map[key].push(item); // add item to property within map

	}

	return map;
};

// similar to groupBy but when keys are unique
lodash.prototype.indexBy = function(collection, iteratee){
	var map = {};

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];

			var key = iteratee(item)
			map[key] = item; // create a property in map

	}

	return map;
};

// similar to groupBy
// cb return ternary operate of strings, 'even' or 'odd', return object with both keys and counters
lodash.prototype.countBy = function(collection, iteratee){
	var map = {};

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];

		var key = iteratee(item);
		if (!map[key]) map[key] = 0; // add value to map, if not present
		map[key]++; // incremeant by one
	}

	return map;
};

lodash.prototype.shuffle = function(collection){};

lodash.prototype.sample = function(collection, amount){
	if (amount){
		var keep = [];

		for (var i = 0; i < amount; i++){
			var num = Math.floor(Math.random() * collection.length);
			keep.push(collection[num]);
		}

		return keep;
	}

	var num = Math.floor(Math.random() * collection.length);
	return collection[num];
};

// transforms array like objects to arrays (ex. arguments)
lodash.prototype.toArray = function(collection){
	return Array.prototype.slice.call(collection);
};

// return number of values in list
lodash.prototype.size = function(collection){
	if (typeof(collection) === "object"){
		return Object.keys(collection).length;
	}

	return collection.length;
};

// return an array of two arrays; one that satisfies predicate; one that fails predicate
lodash.prototype.partition = function(collection, fn){
	var keep = [];
	var reject = [];

	for (var i = 0; i < collection.length; i++){
		var item = collection[i];

		if (fn(item)){
			keep.push(item);
		} else {
			reject.push(item);
		}
	}

	return [keep, reject];
};


// tests
var _ = new lodash();
var obj = [{num: 1},{num: 2},{num: 3}];
var array = [1,2,3];
_.each(obj, function(item){ console.log(item); }); // {num: 1}, {num: 2}, {num: 3}
_.each(array, function(item){ console.log(item); }); // 1,2,3
_.map(array, function(item){ return item + 10; });
console.log('Map method: ', array); // 10, 20, 30
_.find(array, function(item){ return item === 20; }); // 20
console.log('Filter numbers biger than 1', _.filter(array, function(item){ return item > 1; })); // 2,3
var testArray = [{name: 'paul', age: 40, gender: 'n/a'} , {name: 'jessica', age: 20, gender: 'f'}, {name: 'paul', age: 40, gender: 'm'}];
console.log('where method: ', _.where(testArray, {name: 'paul', age: 40})); // [{name: 'paul', age: 40, gender: 'n/a'}, {name: 'paul', age: 40, gender: 'm'}]
console.log('findWhere method:', _.findWhere(testArray, {name: 'paul', age: 40})); // {name: 'paul', age: 40, gender: 'n/a'}
console.log('reject method, numbers bigger than 2', _.reject(array, function(item){ return item <= 2; })); // 3
console.log('every method, is less than 10', _.every(array, function(item){ return item < 10; })); // true
console.log('contains number 4', _.contains(array, function(item){ return item === 4; })); // false
var words = ['one', 'two', 'three'];
console.log('invoke method: toUpperCase()', _.invoke(words, 'toUpperCase')); // ONE, TWO, THREE
console.log('pluck method: pluck name property', _.pluck(testArray, 'name')); // paul, jessica, paul
console.log('max method: ', _.max(testArray, 'age')); // {name: 'paul', age: 40, gender: 'm'}
console.log('min method: ', _.min(testArray, 'age')); // {name: 'jessica', age:20, gender: 'f'}
var decimals = [1.3, 2.5, 1.9];
console.log('groupBy rounding: ', _.groupBy(decimals, function(item){ return Math.floor(item); })); // { 1: [1.3, 1.9], 2: [2.5] }
console.log('groupBy length: ', _.groupBy(words, function(item){ return item.length; })); // { 2: [one, two], 5: [three]}
var decimalsUnique = [1.3, 3.5, 2.9];
console.log('indexBy length: ', _.indexBy(decimalsUnique, function(item){ return Math.floor(item); })); // { 1: 1.3, 2: 2.9, 3: 3,5 };
console.log('countBy length: ', _.countBy(words, function(item){ return item.length; })); // { 2: 2, 5: 1}
console.log('sample method: ', _.sample(array)); // array of 1
console.log('sample method: ', _.sample(array, 2)); // array of 2
var args; // setting up arguments object
function test(){ args = arguments; };
test('test', 1, 3);
console.log('toArray method: ', _.toArray(args)); // ['test', 1, 3]
console.log('size method obj: ', _.size(obj)); // 3
console.log('size method obj: ', _.size(array)); // 3
console.log('partition method: ', _.partition(decimals, function(item){ return item > 2; })); // [[2,5], [1.3, 1.9]]

