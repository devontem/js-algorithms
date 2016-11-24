// lru-cache
// add, get, remove, removeall, sethead, foreach

/*
 * Implementation #1
 */
function lru = function(limit){

	this.size = 0;
	this.limit = limit || 10;
	this.map = {};
	this.head = null;
	this.tail = null;

}

function lruNode = function(key, value){
	this.key = key;
	this.value = value;
	this.next = null;
	this.prev = null
}

lru.prototype.set = function(key, value){
	var node = new lruNode(key, value);

	if (this.map[key]){					// checking if already exists
		this.map[key].value = value; 	// changing the value in the map
		this.remove(key);			 	// updating the order in the linkedlist
	} else {
		if (this.size >= this.limit){ 	// if size of lru is bigger than the limit, delete the oldest
			var k = this.tail.key;
			this.tail = this.tail.prev;	// removing node from linkedlist
			this.tail.next = null;		// since it's a tail, remove reference to old tail

			delete this.map[k]; 		// deleting from the map
		}
	}

	this.setHead(node); // set to the beginning of the list
}

lru.prototype.setHead = function(node){
	node.next = this.head;			// setting the current head as node's next
	node.prev = null;				// since it is head, prev is null

	if (this.head){					// if head exists
		this.head.prev = node;		// setting old head's previous to 'new' head
	} 

	this.head = node;				// setting new head to node

	if (!this.tail){				// if tail doesn't exist, set as tail
		this.tail = node;
	}

	this.size++;	
	this.map[node.key] = node;		// add to map
}

lru.prototype.remove = function(key){

}

lru.prototype.forEach = function(cb){

	var curr = this.head;

	while (curr){
		cb(curr);  // apply callback on current node
		curr = curr.next;
	}
}


























