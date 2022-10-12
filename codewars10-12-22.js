//square the num and return the total of the squared nums
//array, pos, whole,no empty
// [2,3,2] -->17

function squareSum(num) {
    //sum = 0
    //loop  and square each num
    // let sum = 0
  
    // for (i = 0; i < num.length; i++) {
    //   sum += num[i] * num[i]
    // }
    // return sum;
  
    return num.reduce((sum, num) => sum + (num * num), 0)
  
  
  }
  
  
  
  console.log(squareSum([2, 3, 2])) //17
  console.log(squareSum([1, 3, 2])) //12
  console.log(squareSum([2, 2]))//8