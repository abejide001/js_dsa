

function minmax(arr) {
    let max =  Math.max(...arr)
    let min = Math.min(...arr)

    if (min === max) {
        arr.pop()
        console.log((arr.reduce((a,b) => a + b, 0)), (arr.reduce((a,b) => a + b, 0)))
        return
    }
    let minSum =  arr.filter(a => a !== max).reduce((a,b) => a+b,0)
    let maxSum = arr.filter(a => a !== min).reduce((a,b) => a+b,0)
    let loop = [minSum, maxSum]
    console.log(Number(loop[0]), Number(loop[1]))
}
minmax([5, 5, 5, 5, 5])
