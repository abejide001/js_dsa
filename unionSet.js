

function unionSet(setA, setB) {
    let union = new Set(setA)

    for (let elem of setB) {
        union.add(elem)
    }
    return union
}

let setA = new Set([2,4,5,7])
let setB = new Set([2,3,5,6])

console.log(unionSet(setA, setB))