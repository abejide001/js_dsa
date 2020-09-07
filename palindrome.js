function threePalindromicSubstrings(word) {
  // Write your code here
  // start from the third char, fourth char
  let splitWords = word.split("");
  let arr = [];
  let n = 2;
  let end = splitWords.length;
  while (n < end) {
    let subArr = splitWords.slice(n);
    if (subArr.join("") === subArr.reverse().join("")) {
      arr.push(subArr.join(""));
      break;
    }
    n = n + 1;
  }
  end = n;
  n = 1;
  while (n < end) {
    let subArr = splitWords.slice(n, end);
    if (subArr.join("") === subArr.reverse().join("")) {
      arr.push(subArr.join(""));
      break;
    }
    n = n + 1;
  }

  end = n;
  n = 0;
  let subArr = splitWords.slice(n, end);
  if (subArr.join("") === subArr.reverse().join("")) {
    arr.push(subArr.join(""));
  }

  if (arr.length < 3) return ["impossible"];
  return arr.reverse();
}
console.log(threePalindromicSubstrings("madam"));
