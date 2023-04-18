//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// given a whole nums

//positive nums only

//return 'even' for even nums or 'odd' for odd nums

// 3 - "Odd"

function evenOrOdd(number) {

    if(number % 2 === 0){
      return "Even"
    }else{
      return "Odd"
    }
  }
  
  console.log(evenOrOdd(9))
  console.log(evenOrOdd(10))
  