function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = null;
	this.counter = 0;
}

SinglyLinkedList.prototype.add = function(data) {
	if (!this.head){
		this.head = new Node(data);
	}
	else {
		var curr = this.head;

		while (curr.next){
			curr = curr.next;
		}

		curr.next = new Node(data);
	}
	this.counter++;
};
SinglyLinkedList.prototype.remove = function(data) {
	if (this.head.data === data){
		this.head = this.head.next;
		this.counter--;
		return this.head;
	}

	var curr = this.head;
	while (curr){
		if (curr.data === data){
			if (curr.next){
				curr.data = curr.next.data;
				curr.next = curr.next.next;
			} else {
				curr = null;
			}
			this.counter--;
			return curr;
		}
		curr = curr.next;
	}
};
SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
	var curr = this.head;
	while (curr){
		if (curr.data === toNodeData){

			if (curr.next){
				var temp = curr.next;
				curr.next = new Node(data);
				curr.next.next = temp;
			} else {
				curr.next = new Node(data);
			}
			this.counter++;
			return curr.next;
		}

		curr = curr.next;
	}
};
SinglyLinkedList.prototype.traverse = function(fn) {
	var curr = this.head;
	while (curr){
		fn(curr); // callback
		curr = curr.next;
	}
};
SinglyLinkedList.prototype.length = function() {
	return this.counter;
};
SinglyLinkedList.prototype.print = function() {
	var str = '';
	var count = 0;
	var self = this;

	this.traverse(function(item){
		count++;

		str += item.data + ' ';

		if (count <= self.counter) str += '-> ';
	});

	console.log(str.trim());
};

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
singlyLinkedList.remove(3); // remove value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(9); // remove non existing value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(1); // remove head
singlyLinkedList.print(); // => 2 4
singlyLinkedList.remove(4); // remove tail
singlyLinkedList.print(); // => 2
console.log('length is 1:', singlyLinkedList.length()); // => 1
singlyLinkedList.add(6);
singlyLinkedList.print(); // => 2 6
singlyLinkedList.insertAfter(3, 2);
singlyLinkedList.print(); // => 2 3 6
singlyLinkedList.insertAfter(4, 3);
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 4);
singlyLinkedList.insertAfter(7, 6); // insertAfter the tail
singlyLinkedList.print(); // => 2 3 4 5 6 7
singlyLinkedList.add(8); // add node with normal method
singlyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', singlyLinkedList.length()); // => 7
singlyLinkedList.traverse(function(node) { node.data = node.data + 10; });
singlyLinkedList.print(); // => 12 13 14 15 16 17 18
singlyLinkedList.traverse(function(node) { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', singlyLinkedList.length()); // => 7
