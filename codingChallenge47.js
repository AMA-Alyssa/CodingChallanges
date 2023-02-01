// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//PREP

//Parameters: array of nums +, -
//Return: the value of all the nums * each other in order of the array
//


// function grow(x){
// return x.reduce((a,b) => a*b,1)
  
// }

function grow(x){
    let sum = 1
    for( let i = 0; i < x.length; i++){
      sum *= x[i]
    }
    return sum
  }
  
  console.log(grow([1,2,3,4]))
  