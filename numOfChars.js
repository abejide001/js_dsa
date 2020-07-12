
let name = "James was a good boyo"
let pos = name.indexOf("a")
let count = 0

while (pos !== -1) {
    count++
    pos = name.indexOf("a", pos + 1)
}
console.log(count)