//remove, calculate, search,length, print

function HashTable(){
	this.storage = {};
	this.items = 0;
}

HashTable.prototype.add = function (key, value){
	var hash = this.calculateHash(key);

	if (!(hash in storage)) storage[hash] = {};

	if (!(key in storage[hash])) this.items++;
	
	storage[hash][key] = value;
}

HashTable.prototype.remove = function(key){
	var hash = this.calculateHash(key);

	if (storage[hash] && storage[hash][key]){
		this.items--;
		delete storage[hash][key];
	}
}

HashTable.prototype.calculateHash = function (key){
	return key.length() % this.size;
}

HashTable.prototype.length = function(){
	return this.items;
}

HashTable.prototype.search = function(key){
	var hash = calculateHash(key);

	if (storage[hash] && storage[hash][key]) return storage[hash][key];

	return null;
}

HashTable.prototype.print = function(){

	Object.keys(this.storage).forEach(function(hash){
		var str = '';
		str += hash + ' -> ';
		Object.keys(this.storage[hash]).forEach(function(key){
			str += '['+key+', '+this.storage[hash][key]+']' ;
		});
		str += '\n';
	});
}







