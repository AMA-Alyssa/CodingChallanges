// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//p given an array of whole nums + and -
//return a NEW array of inverse nums. Can't mutate original array.
//example


function invert(array) {
    //empty array 
    let newArr = [];
  
    //loop through original array
    for (let i = 0; i < array.length; i++) {
      //multiply by -1
       newArr.push(array[i] * -1);
    }
    return newArr;
  }
  
  
  
  
  
  console.log(invert([2, -3, 4, -5]))// [-2,3,-4,5]
  console.log(invert([1, -2, 3, -4, 5])) //[-1,2,-3,4,-5]
  