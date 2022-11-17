// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces

//string, no nums, no !, no empty str
//string lower case, spaces

//return the # of vowels  a, e, i, o, u


function vowels(str){


    //split the string
    //an if statement and count
  
    let count = 0
    let newStr = str.split('')
    for( let i = 0; i < newStr.length; i++){
      if ((newStr[i] === 'a') || (newStr[i] === 'e') || (newStr[i] === 'i') || (newStr[i] === 'o') ||           (newStr[i] === 'u')) {
      count += 1;
      } 
    }
    return count
  }
  
  
  //newStr.filter(letter => letter === ('a' || 'e' || )).length
  
  console.log(vowels('Hello'))//2
  console.log(vowels('Hi There'))// 3