// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//+-nums, whole, no spaces, no funny bizzz
//new array, with doubled nums


// function doubleNums(arr) {
//     //loop thru array, [i] *2
//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//       sum.push(arr[i] * 2);
//     }
//     return sum
//   }
  
  
  function doubleNums(arr) {
    return arr.map(n => n * 2)
  }
  
  
  
  console.log(doubleNums([5, 4, 6])) //[4,8,12]