

function tailRecursion(n, lastlast, last) {
    if (n == 0) return lastlast

    if (n == 1) return last

    return tailRecursion(n-1, last, lastlast + last)
}

console.log(tailRecursion(20,2,5))