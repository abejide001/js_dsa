
// Search in an unsorted array
function linearSearch(array, n) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true
        }
    }
    return false
}
const arr = [1,3,4,5,6,7]
console.log(linearSearch(arr, 5))