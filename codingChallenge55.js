

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 
//  =9.

//given an array of nums
//return the sum of each num squared

//[-2,5,3] //38



function squareSum(numbers){
    //set a sum variable to 0
    
      let sum = 0
    
      //for loop and square each element
    
      for (let i = 0; i < numbers.length; i++){
       sum += numbers[i] * numbers[i]
      }
    
      return sum;
    }
    
    console.log(squareSum([2,5,3]))