//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,


// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//P given an array of true or false
//return a number of the 'true'
//example: {t,f,t,f,f,f,t} -->3
//loop through and if statement, add 1 to empty variable

function countSheeps(arrayOfSheep) {

    let sum = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true){
        sum = sum + 1}
      }
    
    return sum;
  }
  
  console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true, false, false, true, true]))