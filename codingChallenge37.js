// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function averageNum(arr){
  
    if (arr.length === 0){
      return 0
    }
    return average = arr.reduce((a,c) => a + c, 0) /arr.length
   
   }
   
   console.log(averageNum([2,3,4]))
   console.log(averageNum([]))