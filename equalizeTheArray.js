const hash = require("./hashHelperfunction")

function equalizeTheArray(arr) {
    let hashed = hash(arr)
    let array = []
    for (i in hashed) {
        if (hashed[i]) array.push(hashed[i])
    }
    let shift = array.sort((a,b) => b - a)
    shift.shift()
    return shift.reduce((a,b) => a +b,0)
}

const arr = [56, 70, 70, 56, 56,56,56, 70, 56, 56, 70, 70, 70, 70, 70, 70, 70, 56, 56, 70, 70, 56, 56, 56, 70, 70, 56, 70, 70, 70, 56, 56, 70, 56]

console.log(equalizeTheArray(arr))