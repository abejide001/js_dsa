// find the odd numbers between two numbers 
function oddNumbers(l, r) {
    let arr = []
    let i = l

    while (r > i) {
        arr.push(i)
        i++
    }
    return arr
}
console.log(oddNumbers(2,13))