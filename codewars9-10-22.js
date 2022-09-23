
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] >= 0){
        sum += arr[i];
      }
    }
        return sum
};


You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

 //P given an array of positive and negative numbers
    //R return the sum of the positive numbers in the array. And if the array is empty return 0
    //E  [1,-4,7,,12] -> 1+7+12 = 20
    //
   // set a variable to 1
    //loop thru each element array
    //if statement if positive number add it
    //else return 0