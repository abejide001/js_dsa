

function arraySlice(array, beginIndex, endIndex) {
    if (!beginIndex && !endIndex) return array

    let partArray = []

    for (i = beginIndex; i < endIndex; i++) {
        partArray.push(array[i])
    }
    return partArray
}
console.log(arraySlice([1,2,3,4,5], 2,3))