function dectobin(value) {
  let remStack = [];
  let number = value;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem) // push the remainder into the array
    number = Math.floor(number / 2) // while the arr is still divisible, and it is greater than 0
  }

  while (remStack.length !== 0) {
    binaryString += remStack.pop().toString() // if the len is not 0 remove and add to the binaryString
  }

  return binaryString;
}
console.log(dectobin(100));
