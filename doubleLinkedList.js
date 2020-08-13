/**
 * A doubly linked list can be thought of as a bidirectional singly linked list. Each node in
the doubly linked list has both a next pointer and a prev pointer. The following code
block implements the doubly linked list node:
 */

function DoubleLinkedListNode(data) {
   this.data = data
   this.next = null
   this.prev = null
}

function DoubleLinkedList() {
   this.head = null
   this.tail = null
   this.size = 0
}

DoubleLinkedList.prototype.isEmpty = function () {
   return this.size === 0
}

// Insertion at the head
// if the head of the linked list os empty, the head and tail are set to the new node
DoubleLinkedList.prototype.addAtFront = function (value) {
   if (this.head === null) {
      this.head = new DoubleLinkedListNode(value) // if the head is null
      this.tail = this.head // we set the tail to the head
   } else {
      var temp = new DoubleLinkedListNode(value)
      temp.next = this.head
      this.head.prev = temp
      this.head = temp
   }
   this.size++
}

// add at tail
DoubleLinkedList.prototype.addAtTail = function (value) {
   if (this.tail === null) {
      this.tail = new DoubleLinkedListNode(value)
      this.head = this.tail
   } else {
      var temp = new DoubleLinkedListNode(value)
      temp.prev = this.tail
      temp.next = temp
      this.tail = temp
   }
}

// delete at head
DoubleLinkedList.prototype.deleteAtHead = function () {
   var toReturn = null

   if (this.head !== null) {
      toReturn = this.head.data
      if (this.tail == this.head) {
         this.head = null
         this.tail = null
      }
      else {
         this.head = this.head.next
         this.head.prev = null
      }
   }
   this.size--
   return toReturn
}

// delete at tail
DoubleLinkedList.prototype.deleteAtTail = function () {
   var toReturn = null

   if (this.tail !== null) {
      toReturn = this.tail.data

      if (this.tail === this.head) {
         this.head = null
         this.tail = null
      } else {
         this.tail = this.tail.prev
         this.tail.next = null
      }
   }
   this.size--
   return toReturn
}

// search at head
DoubleLinkedList.prototype.findStartingHead = function (value) {
   var currentHead = this.head
   while (currentHead.next) {
      if (currentHead.data == value) {
         return true
      }
      currentHead = currentHead.next
   }
   return false
}
var dll1 = new DoubleLinkedList()
dll1.addAtFront(20)
dll1.addAtFront(12)
dll1.addAtFront(1)
dll1.addAtTail(100)
dll1.deleteAtHead()
console.log(dll1.findStartingHead(12))
console.log(dll1)