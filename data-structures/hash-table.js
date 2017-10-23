//remove, calculate, search,length, print

function HashTable(size){
	this.map = {};
	this.size = size;
	this.amt = 0;
}

HashTable.prototype.add = function (key, value){
	var hash = this.calculateHash(key);

	if (!this.map[hash]){
		this.map[hash] = [];
	}

	this.map[hash][key] = value;
	this.amt++;
}

HashTable.prototype.remove = function(key){
	var hash = this.calculateHash(key);

	if (this.map[hash] && this.map[hash][key]) delete this.map[hash][key];

	this.amt--;
}

HashTable.prototype.calculateHash = function (key){
	return key.toString().length % this.size; 
}

HashTable.prototype.length = function(){
	return this.amt;
}

HashTable.prototype.search = function(key){
	var hash = this.calculateHash(key);
	return this.map[hash][key];
}

HashTable.prototype.print = function(){
	var str = '';
	var self = this;
	Object.keys(this.map).forEach(function(hash){
		Object.keys(self.map[hash]).forEach(function(key){
			str += self.map[hash][key] + " ";
		});
	});
	console.log(str)
}

var hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log('length gives 5:', hashTable.length()); // => 5
console.log('search second gives 2:', hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); // => 2 3 5
console.log('length gives 3:', hashTable.length()); // => 3