//            1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7 +9+11 = 27


//only odd nums, whole, pos, first row is index of 1
//return the nth row of the triangle 

function prob(n){
    //
  
    return Math.pow(n,3)
  }
  
  console.log(prob(2))// 21+23+25+27+29 = 125
  
  