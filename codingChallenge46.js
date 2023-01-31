// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// FUNDAMENTALSARRAYS

//prep
//given array of nums, + - maybe not whole nums
//return a new array with nums doubled
//ex {-1,10,2.5} --> [-2,20,5]
//loop through array and double each i, return sum

function maps(x) {
    let newArr = []
    for (let i = 0; i < x.length; i++) {
      newArr.push(x[i] * 2)
    }
    return newArr;
  }
  
  console.log(maps([1, 2, 3]))