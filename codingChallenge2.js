function countSheeps(arrayOfSheep) {
  //Consider an array/list of sheep where some sheep may be missing from their place. 
  //We need a function that counts the number of sheep present in the array (true means present).
  //given true and false in array, there might be null or undefine values
  //return the total number of sheep (true)
  //psuedo code
  //set variable to 0
  //for loop the array and do a conditional if index is true add it to the variable
  //return total sheep
  

  let total = 0

    for( let i = 0; i < arrayOfSheep.length; i++){
        if( arrayOfSheep[i] === true){
          total += 1
        }
    }
   return total 
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));

