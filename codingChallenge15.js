// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//P pos num, whole, no !, always Number, its 1 num
//return the sum

function sumTheNum(arr){
    //loop through the array
     //push i to a new varaible,
     //use map to sum the array
   
     let results = 0
     for(let i =1; i <= arr; i++){
       results =+ i;
     } 
     return results
   }
   
   console.log(sumTheNum([8])) //1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 //36
   console.log(sumTheNum([3 ]))//1 + 2 + 3 //6