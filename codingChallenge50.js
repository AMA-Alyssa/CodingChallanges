//It's pretty straightforward. Your goal is to create a function that removes the first and last //characters of a string. You're given one parameter, the original string. You don't have to //worry with strings with less than two characters.


// given 1 string with 2 or more letters
//return a string without the first and last letters



function removeChar(str) {
    //seperate string into array
    let arr = str.split('')
     arr.pop()
     arr.shift();
    return arr.join('');
  
      
  
  };
  
  console.log((removeChar('hello')))// 'ell'
  console.log((removeChar('mountains'))) // 'ountain'