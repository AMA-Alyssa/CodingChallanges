// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


//string -> words are reverse and letters are opposite case, spaces normal

function transformStr(str) {
    //split str " " (empty spaces)   // reverse => join
    //split str '' -> map  l === l.toUpperCase() ? l.toLowerCase(): l.toUpperCase()
  
    let reverseStr = str.split(' ').reverse().join(' ')
    let transformedStr = reverseStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : 
         l.toUpperCase()).join('')
    return transformedStr;
  
  }
  
  console.log(transformStr("Example Input")) //"iNPUT eXAMPLE"
  console.log(transformStr("Jon")) //"jON" 