// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.  

// Note: The function accepts an integer and returns an integer

// +- nums, whole, num no ! or ''
//return squared num of each digit


function squareDigits(nums){
    //loop
    let numNum = nums.toString();
     let sum = [];
    for( let i =0; i < numNum.length; i++){
       sum[i] = numNum[i] * numNum[i]
    }
  
    return Number(sum.join(''));
  }
  
  console.log(squareDigits(9119 )) //811181
  console.log(squareDigits(246 )) //41636