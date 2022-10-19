// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// 

//array with strings and nums
//return the sum
//use reduce to get the total sum
//use Number to change the current string into number


function sumMix(arr) {
    let sum = arr.reduce((a, c) =>
      a + Number(c), 0);
    return sum;
  }
  
  console.log((sumMix([9, 3, '7', '3']), 22));