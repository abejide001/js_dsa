function sortArray(arr) {
  const evens = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  const odds = arr.filter((num) => num % 2 === 1).sort((a, b) => a - b);

  return arr.map((num) => {
    return num % 2 === 0 ? evens.pop() : odds.shift();
  });
}

console.log(sortArray([1,2,4,3,5,8,6]))
