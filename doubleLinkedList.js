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
 