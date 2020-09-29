function findNumber(arr, k) {
    let i = 0
    let b = ''
    while (arr.length > i) {
        if (arr[i] === k) {
            b += "YES"
        } 
        i++
    }
    return b.length > 1 ? "YES" : "NO"
}
console.log(findNumber([1,23,4,5], 2))