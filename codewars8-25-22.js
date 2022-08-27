function solution(str){
    let newStr = str.split('').reverse().join('')
    return newStr;
  }

  function removeChar(str){
 
    let newArray = str.split('');
    let nAR = newArray.shift();
    let oMG = newArray.pop();
    return newArray.join('')
  };

  function numberToString(num) {
    return num.toString();
  }