function Node(data) {
	this.data = data;
	this.next = null;
	this.previous = null;
}

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
	this.size = 0;
}

DoublyLinkedList.prototype.add = function (data) {
	this.size++;

	if (!this.head && !this.tail){
		this.head = this.tail = new Node(data);
		return;
	}

	this.tail.next = new Node(data);
	this.tail.next.previous = this.tail;
	this.tail = this.tail.next;
};
DoublyLinkedList.prototype.remove = function(data) {
	if (data === this.head.data && data === this.tail.data){
		this.head = this.tail = null;
		this.size--;
		return;
	}

	if (data === this.head.data){
		this.head = this.head.next;
		this.head.previous = null;
		this.size--;
		return;
	}

	if (data === this.tail.data){
		this.tail = this.tail.previous;
		this.tail.next = null;
			this.size--;
		return;
	}

	var curr = this.head;
	while (curr){
		if (data === curr.data){
			curr.next.previous = curr.previous;
			curr.previous.next = curr.next;
			this.size--;

		}
		curr = curr.next;
	}
};
DoublyLinkedList.prototype.insertAfter = function(data, toNodeData) {
	var curr = this.head;
	while (curr){
		if (toNodeData === curr.data){
			var temp = curr.next;

			// next node
			curr.next = new Node(data);
			curr.next.next = temp;
			curr.next.previous = curr;

			// two nodes down
			if (curr.next.next) curr.next.next.previous = curr.next;

			// handle tail
			if (curr.data === this.tail.data){
				this.tail = curr.next;
			}

			this.size++;
		}
		curr = curr.next;
	}
};
DoublyLinkedList.prototype.traverse = function(fn) {
 	var curr = this.head;
	while (curr){
		fn(curr);
		curr = curr.next;
	}
};
DoublyLinkedList.prototype.traverseReverse = function(fn) {
	var curr = this.tail;
	while (curr){
		fn(curr);
		curr = curr.previous;
	}
};
DoublyLinkedList.prototype.length = function() {
	return this.size;
};
DoublyLinkedList.prototype.print = function() {
	var str = '';

	this.traverse(function(item){
		str += item.data + ' ';
	});

	console.log(str);
};

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', doublyLinkedList.length()); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.print(); // => 2 4
doublyLinkedList.remove(4); // remove tail
doublyLinkedList.print(); // => 2
console.log('length is 1:', doublyLinkedList.length()); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
doublyLinkedList.print(); // => ''
console.log('length is 0:', doublyLinkedList.length()); // => 0
doublyLinkedList.add(2);
doublyLinkedList.add(6);
doublyLinkedList.print(); // => 2 6
doublyLinkedList.insertAfter(3, 2);
doublyLinkedList.print(); // => 2 3 6
doublyLinkedList.traverseReverse(function(node) { console.log(node.data); });
doublyLinkedList.insertAfter(4, 3);
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
doublyLinkedList.print(); // => 2 3 4 5 6 7
doublyLinkedList.add(8); // add node with normal method
doublyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', doublyLinkedList.length()); // => 7
doublyLinkedList.traverse(function(node) { node.data = node.data + 10; });
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(function(node) { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.length()); // => 7
doublyLinkedList.traverseReverse(function(node) { console.log(node.data); }); // => 18 17 16 15 14 13 12
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.length()); // => 7