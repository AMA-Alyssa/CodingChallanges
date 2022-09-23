function sumTwoSmallestNumbers(numbers) {  
    //P given an array with at least 4 positive numbers only
    //return the sum of 2 lowest numbers
    //[3,6,7,10] -> 9
    //set 2 empty variables for the lowest nums
    //loop thru and find the min, then push it to min1
  
    
      let ascending = numbers.slice().sort((a,b) => a -b).slice(0,2);
    
        sum = ascending[0] + ascending[1];
        return sum
    }
    
   