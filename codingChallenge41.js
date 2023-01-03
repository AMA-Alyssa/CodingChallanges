// function squareSum(numbers) {
//   //an array of nums, pos or neg. Whole
//   //a whole num
//   //loop through  array and square it then total

//   let sum = 0
//   for( let i=0; i< numbers.length; i++) {
//     sum += (numbers[i]*numbers[i])
//   }
//   return sum;
// };

// console.log((squareSum([1, 2, 5])));


function squareSum(numbers){
    return numbers.reduce((a,numbers)=> a + (numbers * numbers),0 )
    }
    
    console.log((squareSum([1, 2, 5])));

    //What did I learn

    //reduce method performs a function on all the elements in the array
    //  array.reduce((a,c)0)