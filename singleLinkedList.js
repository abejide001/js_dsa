// single linked list -- each node have reference to the next node
function singleLinkedListNode(data) {
  this.data = data; // the value of the linkedlist node
  this.next = null; // is the pointer to another instance
}

function singleLinkedList() {
  this.head = null; // the default property of the head is 0
  this.size = 0;
}

singleLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

singleLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new singleLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new singleLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

singleLinkedList.prototype.remove = function (value) {
  var currentHead = this.head;
  if (currentHead.data === value) {
    this.head = currentHead.next;
    this.size--;
  } else {
    var prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        // remove by skipping
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};

singleLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;

  if (this.head !== null) {
    toReturn = this.head.data;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

singleLinkedList.prototype.find = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

var s1 = new singleLinkedList();
s1.insert(200);
s1.insert(100);
s1.insert(10);
s1.insert(1000);
// s1.deleteAtHead()
// s1.find(300)
console.log(s1.isEmpty());
