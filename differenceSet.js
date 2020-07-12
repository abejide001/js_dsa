

function differenceSet(setA, setB) {
    let difference = new Set(setB)

    for (let elem of setA) {
        difference.delete(elem)
    }
    return difference
}

const setA = new Set([1,2,3,4,5])
const setB = new Set([1,2,8,9,10])
console.log(differenceSet(setA, setB))