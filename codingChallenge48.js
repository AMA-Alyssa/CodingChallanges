// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//P given an array of whole numbers pos and negative, or given an empty array
//return an array of 2 numbers. the first element is the count of the pos nums and 2nd element is sum of neg nums. Or if given an empty array/null --> return empty array.

//examples



function countPositivesSumNegatives(input) {
    // empty array
    let positiveArr = []
    let negativeArr = []
    let newArr = []
  
    if(input === null || input.length == 0){
      return newArr} 
  
    //for loop and else if statements
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveArr.push(input[i])
        } else if (input[i] < 0) {
          negativeArr.push(input[i])
        }   
      }
    
   // console.log(positiveArr)
   // console.log(negativeArr)
    //reduce each array
    let posCount = positiveArr.length;
    let negSum = negativeArr.reduce((a, c) => a + c, 0)
    //console.log(posCount)
    //console.log(negSum)
  
    newArr.push(posCount)
    newArr.push(negSum)
    return newArr;
  
  }
  
  
  
  
  
  
  
  
  
  
  
  console.log(countPositivesSumNegatives([2, -5, 4, 0, -10])) //[2,-15]
  
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10,-65]
  
  console.log(countPositivesSumNegatives([])) 