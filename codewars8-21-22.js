//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// //PREP
// //P ->given a string of words. reverse the word, keep the letters, return the string
// //R ->reverse string
// //E -> "double spaces"  -> "elbuod  secaps"
// //P --> Seperate string, reverse, join


// function reverseWords(str) {
//     //let newWord = []
//     let sepString = str.split(' ');
//     for (let i = 0; i < sepString.length; i++){
//         sepString[i] = sepString[i].split('').reverse().join('')
        
//     }
  
//    return sepString.join( '  ');

//   }

// 22.	Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
// "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

//PREP
//P  make a loop that goes up to 100. #s with multiples of 3 say fizz and multiple of 5 say buzz, and multiple of 3 & 5 say fizbuzz.
//R fizz, buzz, fizzbuzz
//E 6 = fizz, 10 = buzz, 15 = fizzbuzz
//P

function fizzbuzz(x){
    //loop through 100
    //if else statements
    for (let i = 0; i <= 100; i++){
      if (i % 3 === 0) {
        return 'Fizz'
      }else if ( i % 5 === 0){
        return 'Buzz'
      }else if (i % 3 === 0 && i % 5 === 0){
         return 'FizzBuzz'
      }
    }
}