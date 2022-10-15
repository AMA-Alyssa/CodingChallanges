// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//parameter is an array that include pos and neg nums. possible empty arrayy, whole nums, no !
//given empty array --> []
// return the total count of positive nums and the sum of neg nums
// [1,2,3,-10,-2]  --> [3, -12]  [] -> []


function posAndNeg(arr){
  //newArr  = [0,0]
  // emptyArr = []
  // for the empty arr  --> conditional statement if null and length is 0 return emptyArr
  //for loop and do a conditional if its index of arr is > 0 then add 1 to newArr[0]
  //else if then arr <0 then newArr[1] +=

  if (arr === null || arr.length === 0)
  return emptyArr;

  let newArr = [0,0];

  for(let i =0; i < arr.length; i++){
    if( arr[i] > 0){
        newArr[0] += 1;
    }else if(
        arr[i] < 0
    ){
        newArr[1] += arr[i]
    }
  }

  return newArr;
}

console.log(posAndNeg([-1,-2,5,10,3,-10])) //[3,-12]
console.log(posAndNeg([])) //[]