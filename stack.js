

function Stack(array) {
    this.array = []

    if (this.array) {
        this.array = array
    }
}

Stack.prototype.getBuffer = function() {
    return this.array.slice()
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0
}

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1]
}

Stack.prototype.push = function(value) {
    this.array.push(value)
}
let stack1 = new Stack([1,2,3,4,5])
stack1.push(20)
console.log(stack1.getBuffer())