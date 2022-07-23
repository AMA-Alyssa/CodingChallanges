//PREP
//Parameters
//Return
//Example
//Pseudo 

//Will be given a number. Will I ever be given a string? Will I ever be given NaN of sorts?
//And then it wants me square me square each  individual num in the given num. 

//R: we want whatever given number is, but with each number sqared and all pushed back together

//E:
// console.log(squareDigit(9119),811181)
// console.log(squareDigit(1234),14916)
// console.log(squareDigit(555),252525)

//Pseudo
//Make a function that takes in a num
function squaredDigit(num){
    // we want to split each num into its own element in an array
     let numStr = num.toString().split('')
    
    //assuming the num is a string, now we square each number.
      console.log(Number(numStr.map(e=>e**2).join('')))
    
    //mayber we the concat thing and return 
    
    }