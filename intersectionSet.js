

function intersectionSet(setA, setB) {
    let intersection = new Set()

    for (let elem of setA) {
        if (setB.has(elem)) {
            intersection.add(elem)
        }
    }
    return intersection
}

let setA = new Set([2,3,4,5])
let setB = new Set([5,6,7,2])

console.log(intersectionSet(setA, setB))