function sumUp(arr, n) {
    let sum = []
   for (i = 0; arr[i]+arr[i] <= n; i++) {
       while (arr[i] + arr[i+1] === n) {
           sum.push(arr[i])
       }
   }
   return sum
}

console.log(sumUp([1,4,5,6,7], 8))