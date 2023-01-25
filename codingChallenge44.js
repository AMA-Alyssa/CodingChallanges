// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// given a num that is positive or negative, only 1 number, not always whole num
//return the number given negative unless its 0, then return 0
//

function makeNegative(num) {
    // I could times it by -1 if greater than 0
  
    if (num > 0) {
      return num * (-1)
    } else {
      return num * (1)
    }
  }
  
  
  
  console.log(makeNegative(0)) //0
  console.log(makeNegative(2)) //-2
  console.log((makeNegative(.5))) // -.5
  