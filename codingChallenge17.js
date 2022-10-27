// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function encodeDupes(str){

    //toLowerCase
    //map() is an array method so we have to split the string to make it an array
    //indexOf === lastIndexOf  ? '(' : ')'
      //join
    
      return str.toLowerCase()
                .split('')
                .map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')' )
                .join('')
    // the problem with the solution above is there is a lot of looping. It would small for small texts but not a lot.
    
    //optimization would be hash mapping
    
    
      
    }
    
    console.log(encodeDupes('din' )) //  "((("
    
    console.log(encodeDupes(' Success' ))  // ")())())"