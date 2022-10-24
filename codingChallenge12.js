// Given an array of digital numbers, return a new array of length number containing the
// last even numbers from the original array (in the same order). 
//The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]  {2,4,6,8}
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//[-22, 26, -6, -8, -8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//arr of nums +/-, no empty arr or ! and give the legnth that you want the new array to be.
//return new arr based on the num given,  and you want even nums


function evenNums(arr, x) {
    //filter the positve numbers by n %2 === 0 
    let evenArr = arr.filter((n => n % 2 === 0))
    //slice on the new array from filter starting at the end of the array
    //return evenArr
    return evenArr.slice(-x);
  
  }
  //yesss
  
  console.log((evenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))) // [-8, 26]
  
  console.log((evenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))) //[6] 
  //[-22,26,-6,-8,-8,26]
  //[-6,-8,-8]