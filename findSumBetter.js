
// function findSumBetter(arr, weight) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] + arr[i] === weight) {
//                 return [i, j]
//             }
//         }
//     }
//     return -1
// }


function findSumBetter(arr, weight) {
    let hashtable = {}
    for (i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        difference = weight - currentElement

        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[weight - currentElement]]
        } else {
            hashtable[difference] = i
        }
    }

    return -1
}
console.log(findSumBetter([2,4,5,6,7], 11))