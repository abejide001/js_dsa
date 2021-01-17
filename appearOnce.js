function appearOnce(array) {
  let hash = {};
  let arr = [];
  for (elem of array) {
    if (hash[elem]) hash[elem]++;
    else {
      hash[elem] = 1;
    }
  }
  for (i in hash) {
    if (hash[i] === 1) arr.push(Number(i));
  }
  return arr;
}

let array = [1, 2, 2, 2, 9, 10];

console.log(appearOnce(array));
