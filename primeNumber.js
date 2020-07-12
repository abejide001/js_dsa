
// // isPrime == check for prime numbers
// // Prime numbers are numbers that are divisible by itself and another number
function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (i = 2; i < n; i++) {
        if (n%i === 0) {
            return false
        }
    }
    return true
    
}

// // optimised version
// function isPrime(n) {
//     if (n <= 1) return false
//     if (n <= 3) return true

//     if (n%2 == 0 || n%3 == 0) return false

//     for (i = 5; i*i<=n; i=i+6) {
//         if (n%i == 0 || n%(i+2) == 0) return false
//     }
//     return true
// }
// console.log(isPrime(25))

// for (i = 5; i*i<=100; i=i+5) { // 10 * 10 == 100, so i stops at 10
//     console.log(i)
// }


// return prime numbers between 1-100

// function primeBetween(a,b) {
   let arr = []

   for (let i = 1; i < 100; i++) {
    //    if (i === 2) arr.push(i)
        if (isPrime(i)) arr.push(i)
    //    if (i % 2 !== 0 ) arr.push(i)
   }
   console.log(arr)
// }

// console.log(primeBetween(0,100))

