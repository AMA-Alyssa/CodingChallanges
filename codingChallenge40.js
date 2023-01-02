// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//P given an array of pos & neg nums, whole, could be empty array
//R return the sum of Only the positive nums. If empty array, return 0
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
// [20,0,5,-1] ==> 24


function sumTheArr(arr){
    //set up varaible to 0
    //loop through array
    //if statement for pos nums
    //add nums
    let total= 0
    for (i = 0; i < arr.length; i++){
     if (arr[i] > 0){
       total += arr[i];
     }
   }
    return total;
  }
  
  console.log(sumTheArr([2,4,-1])) //5

  
  //what did I learn ?
  //read the problem carefully, watch for typos ( put the wrong < ),