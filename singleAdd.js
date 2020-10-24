function add(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length > str2.length) {
    let a = Math.abs(str1.length - str2.length);
    let rep = "0".repeat(a);
    str2 = `${rep}${str2}`;
  } else if (str2.length > str1.length) {
    let a = Math.abs(str2.length - str1.length);
    let rep = "0".repeat(a);
    str1 = `${rep}${str1}`;
  }
  let arr1 = str1.split("").map(Number);
  let arr2 = str2.split("").map(Number);
  let arr = [];
  let i = 0;
  while (arr1.length > i && arr2.length > i) {
    arr.push(arr1[i] + arr2[i]);
    i++;
  }
  return Number(arr.join(""));
}
console.log(add(16, 8));
