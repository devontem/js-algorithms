function LinkedList(){

	this.head = null;
	this.tail = null;
	this.size = 0;

	this.add = function(value){

		var node = new Node(value);

		// if tail exists
		if (this.tail){
			this.tail.next = node;
			this.tail = node;

		// if tail doesn't exist
		} else {
			if (!this.head){
				this.head = node;
				this.tail = node;
				this.size++;
				return;
			}

			// iterating through to find the last node
			var curr = this.head;
			while(curr.next){
				curr = curr.next;
			}
			curr.next = node;
			this.tail = node;
			this.size++;
		}
	}

	this.forEach = function(cb){
		if (!this.head) return null;

		var curr = this.head;
		var arr = [];
		var i = 0;
		while(curr){
			cb(curr, i);
			curr = curr.next;
			i++;
		}
	}

	this.print = function(){
		if (!this.head) return null;

		var arr = [];

		this.forEach(function(node){
			arr.push(node.val);
		});

		console.log(arr.toString());
	}

	this.search = function(value){
		if (!this.head) return null;

		var found = -1;

		this.forEach(function(node, i){
			if (value === node.val){
				found = node;
			}
		});

		return found;
	}

	this.remove = function(value){
		if (!this.head) return null;

		var curr = this.head;
		var prev = this.head;

		while(curr){
			if (curr.val === value){
				prev.next = curr.next
				return;
			}
			prev = curr;
			curr = curr.next;
		}
	}
}

function Node(value){
	this.val = value;
	this.next = null;
}

// For testing purposes (uncomment)
// var t = new LinkedList();
// [1,2,3,4,5,6].forEach(function(value){
// 	t.add(value);
// });
// t.print();



