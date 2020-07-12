

function medianOfArray(arr) {
   const length = arr.length

   if (length%2 === 1) {
       return arr[Math.floor(length/2)]
   } else {
       return (arr[length/2] + arr[length/2 - 1])/2
   }
}

console.log(medianOfArray([1,2,3,4,5,7]))