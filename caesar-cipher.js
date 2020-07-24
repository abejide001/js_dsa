
// function cipher(l, k) {
//     if (k == 26) return l
//     let letters = "abcdefghijklmnopqrstuvwxyz"
//     // return letters.charAt(25)
//     let enc = l.split("").map((a) => {
//         if (a >= 0) return a
//         if (letters.includes(a)) return (letters.indexOf(a)) + k
//         return a
//     })
//     let str = enc.map(a => {
//         if (a >= 25 && typeof a === "number") return Number(a - 25) - 1
//         return a
//     }).map(a => {
//         if (a > 0 && typeof a === "number") return letters.charAt(a)
//         return a
//     }).join("")
//     let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let char = str.split("").map((a) => {
//         if (cap.includes(a)) return (cap.indexOf(a)) + k
//         return a
//     })
//     // return char
//     return char.map(a => {
//         if (a >= 26 && typeof a === "number") return Number(a - 26)
//         return a
//     }).map(a => {
//         if (a >= 0 && typeof a === "number") return cap.charAt(a)
//         return a
//     }).join("")
// }

// console.log(cipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M", 27))

console.log("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M")
console.log("1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHt1n10fz7fVk62XW2fyMU4D83m7R80N".length)
console.log("1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N".length)