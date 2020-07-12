

function primeFactors(n) {
    while (n%2 === 0) {
        console.log(n)
        n = n/2
    }
}
primeFactors(4)