// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// //given pos nums, no empty
// //

function digitize(n) {
    let numBeStr = n.toString().split('').reverse()
    let arr =  Number(numBeStr)
    return arr
  }
  
  console.log(digitize(231))