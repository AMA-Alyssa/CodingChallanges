// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"


//given array of strings and 'needle', 1 needle,, no nums, no !, lowercase
// 'found the needle at position  #'  # index


function findNeedle(arr){

    //loop thru array, conditional statement, push it new arr, temperal litteral
      //indexOf -- return the index value
    
       let needle = arr.indexOf('needle')
      return `found the need at position ${needle}`
      
    };
    
    
    console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
    //"found the needle at position 5"