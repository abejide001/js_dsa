function solve(n) {
    for(let i = 1; i < n; i++) {
      const num = i * i;
    //   console.log(num)
      if(Math.sqrt(n + num) % 1 === 0) console.log(num)
    }
    // return -1;
}
solve(7)