
function Matrix(rows, columns) {
    let jaggedArray = new Array(rows)

    for (let i = 0; i < columns; i += 1) {
            jaggedArray[i] = new Array(rows)
    }
    return jaggedArray
}

console.log(Matrix(3,3))