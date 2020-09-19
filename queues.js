class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    // add the first item to the queue
    enqueue(element) {
        this.items[this.count] = element // key
        this.count++
    }


    // remove the first item from the queue
    dequeue() {
        if (this.count === 0) {
            return ""
        }
        let first = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        this.count--
        return first
    }
}
const n = new Queue()
n.enqueue(1)
n.enqueue(10)
n.dequeue()
console.log(n)