
function superSet(setA, subset) {
    for (let elem of subset) {
       return !setA.has(elem) ? false : true
    }
}

const setA = new Set([1,2,3])
const setB = new Set([5,6])

console.log(superSet(setA, setB))