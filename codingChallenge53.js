// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//PREP

//given array of nums (neg, pos, whole)
//Return the sum of the posive nums only
//example [-2,9,4,-1,5,-2] = 18
//[9,-3,-2,10] = 19

function sumOfPositive(n){
    let sum = 0
   
      for(let i=0; i <n.length; i++) {
  
        if(n[i] > 0){
        sum += n[i] 
      
        }
      
      }
    
    return sum
  }
  
  
  console.log(sumOfPositive([-2,9,4,-1,5,-2])) //18
  console.log(sumOfPositive([9,-3,-2,10])) //19