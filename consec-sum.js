function sumConsecutives(s) {
    // Create an array to hold results
    var results = [];
    // Create a variable to hold the next integer in the array
    var nextInt;
    // Create a variable to hold the number of consecutive integers we've looped through, starting at 1
    var consecs = 1;
    // Iterate over the 's' array
    for (var i = 0; i < s.length; i++) {
      // Immediately set nextInt to the next integer in the array
      nextInt = s[i+1];
      // If this integer equals the nextInt, increment the consecs counter
      if (s[i] === nextInt) {
        consecs++;
      }
      // Else, if the consecs counter is greater than 1, multiply the value by the number of consecutive iterations and push to the array
      else if (consecs > 1) {
        results.push(consecs * s[i]);
        // Reset consecs for next loop
        consecs = 1;
      }
      // Otherwise, push the regular integer to the array
      else {
        results.push(s[i]);
      }
    }
    // Return the results
    return results;
  }

  console.log(sumConsecutives([1,1,1,3,1,4,2]))