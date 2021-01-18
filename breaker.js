const orderBreaker = (input) => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        if (input[i + 1] < input[i -1]) {
          return input[i + 1];
        }
       return input[i];
      }
    }
  };

console.log(orderBreaker([1,2,4,3]))