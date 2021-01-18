function theSame(arr) {
    let nextArr;
    let val = []
    for (let i = 0; i < arr.length; i++) {
        nextArr = arr[i + 1]
        if (arr[i] === nextArr) {
            nextArr = true
            arr[i] = true
            val.push(nextArr)
            val.push(arr[i])
        } else {
            val.push(arr[i])
        }
    }
    return val
}

console.log(theSame([1,1,2,3,5,5,10,6]))