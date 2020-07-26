function repeatedString(s, n) {
    let orig = s.split("").filter(a => a === "a").length
    let first = parseInt(n/s.length)
    let mul = orig * first
    let div = n%s.length
    let sl = s.slice(0, div)
    let ain = sl.split("").filter(a => a === "a").length
    return ain + mul
}

console.log(repeatedString("aba", 10))