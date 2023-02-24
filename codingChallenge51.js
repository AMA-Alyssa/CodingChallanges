// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



// given an array of nums. + or -
//return a single number that is answer of multipling all the nums in array

function grow(x){
    let answer =x.reduce((a,c) => a *c)
     return answer
   }
   
   console.log(grow([2,4,5])) //40
   console.log(grow([-10,2,-5,-3])) // -300