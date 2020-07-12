

function hash(arr) {
    let hash = {}

    for (let elem of arr) {
        if (hash[elem]) {
            hash[elem]++
        } else {
            hash[elem] = 1
        }
    }
    return hash
}

module.exports = hash