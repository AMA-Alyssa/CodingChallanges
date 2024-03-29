// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//get rid of lowest num, if multiples then get rid of lowest num with lowest index.
//return array

//indexOf --> returns the 1st index at which a given elements can found in the array or -1 if not there

function removeSmallest(numbers) {
    let array = [];
    const index = numbers.indexOf(Math.min(...numbers))
    for (let i = 0; i < numbers.length; i++) {
      if (i !== index) {
        array.push(numbers[i])
      }
    }
    return array;
  }
  
  
  console.log(removeSmallest([1, 2, 3, 4, 5])) //[2,3,4,5]