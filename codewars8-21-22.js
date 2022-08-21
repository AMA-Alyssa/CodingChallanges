//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// //PREP
// //P ->given a string of words. reverse the word, keep the letters, return the string
// //R ->reverse string
// //E -> "double spaces"  -> "elbuod  secaps"
// //P --> Seperate string, reverse, join


function reverseWords(str) {
    //let newWord = []
    let sepString = str.split(' ');
    for (let i = 0; i < sepString.length; i++){
        sepString[i] = sepString[i].split('').reverse().join('')
        
    }
  
   return sepString.join( '  ');

  }