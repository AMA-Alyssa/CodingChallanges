// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// array of nums, + , -, no !, empty
//return num based on total/# of nums in the array


function sum(arr){
    return arr.reduce((a,c) => a + c ) / arr.length
  } 
  
    
    
  
  
  console.log(sum([2,1,4,10])) //4.25
  console.log(sum([3,4,2,1])) // 5