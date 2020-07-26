
function singleLinkedListNode(data) {
    this.data = data
    this.next = null
}

function singleLinkedList(params) {
    this.head = null // the default property of the head is 0
    this.size = 0
}

singleLinkedList.prototype.isEmpty = function () {
    return this.size === 0
}

singleLinkedList.prototype.insert = function (value) {
    if (this.head == null) {
        this.head = new singleLinkedListNode(value)
    } else {
        let temp = this.head
        this.head = new singleLinkedListNode(value)
        this.head.next = temp
    }
    this.size++
}

singleLinkedList.prototype.remove = function (value) {
    var currentHead = this.head
    if (currentHead.data === value) {
        this.head = currentHead.next
        this.size--
    } else {
        var prev = currentHead
        while (currentHead.next) {
            if (currentHead.data == value) {
                // remove by skipping
                prev.next = currentHead.next
                prev = currentHead
                currentHead = currentHead.next
                break
            }
            prev = currentHead
            currentHead = currentHead.next
        }
        if (currentHead.data == value) {
            prev.next = null
        }
        this.size--
    }
}

var s1 = new singleLinkedList()
s1.insert(20)
s1.insert(100)
s1.insert(10)
s1.remove(100)
console.log(s1)