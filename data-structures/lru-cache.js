// lru-cache
// add, get, remove, removeall, sethead, foreach

/*
 * Implementation #1
 */
function lru(limit){

	this.size = 0;
	this.limit = limit || 10;
	this.map = {};
	this.head = null;
	this.tail = null;

}

function lruNode(key, value){
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

	this.size++;					// increase size
	this.map[node.key] = node;		// add to map
}

// O(n) Solution
lru.prototype.remove = function(key){

	var curr = this.head;
	var prev = null;

	while (curr){		// iterate through linkedlist

		if (curr.key === key){
			if (prev) prev.next = curr.next;  // skipping over current node
			if (!prev) this.head = curr.next; // if no previous, set current to head
			if (this.tail.key === curr.key) this.tail = prev; // set tail to prev or null
			delete this.map[key]; // delete from map
			this.size--; // decrease size

			return; // end function
		}
		prev = curr;
		curr = curr.next;
	}
}

// O(1) Solution
lru.prototype.remove = function(key){
	var node = this.map[key];

	if (node.prev) node.prev.next = node.next;
	if (!node.prev) this.head = node.next;
	if (node.next) node.next.prev = node.prev || null;
	if (this.tail.key === node.key) this.tail = node.prev || null;

	this.size--;
	delete this.map[key];
}

lru.prototype.removeAll = function(limit){
	this.limit = limit;
	this.size = 0;
	this.map = {};
	this.head = this.tail = null;
}

lru.prototype.forEach = function(cb){
	var curr = this.head;

	while (curr){
		cb(curr);  // apply callback on current node
		curr = curr.next;
	}
}

// robust version of each method
lru.prototype.each = function(cb){
	var curr = this.head;	
	var i = 0;				// setting increments

	while (curr){
		cb.apply(this, [curr, i, this]); // calling cb with node, index, lrucache

		i++;				// increment counter
		curr = curr.next;
	}
}


























