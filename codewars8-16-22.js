// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//PREP
//P if string has = x & o, then true or if no x & o's then true. not = then false.
//   it is case sensentive
//r return true or false
//example  - look above
//peusdo 

// function XO(str) {
//     //code here
// }


function abbrevName(name){

    // P given a string with two words
    // R return the first letter of each word and have a period in between
  // E  'Jon Smith'  --> 'J.S'
  
  //P  make 2 empty variable array 
  //seperate the string into 2 arrays
      //loop through each array,find the 0 index and put into the empty array
  //make a 3 variable that adds the two others with a .
  
  
  let arr1 = [ ];
  let arr2 = [ ];
  let seperateStr = name.split('');
  return seperateStr
  
  

}