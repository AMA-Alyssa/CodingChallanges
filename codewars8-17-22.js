// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//PREP
//P if string has = x & o, then true or if no x & o's then true. not = then false.
//   it is case sensentive
//r return true or false
//example  - look above
//peusdo 

//make variables for both x and o -- assign variable to an empty array
//for loop to go through the array, that does an if statement that makes all x and os lowercase.
//if statement to come

function XO(str) {
    var x = []; //making empty arrays so later we can push the elements with the x to it
    var o = [];//making empty arrays so later we can push the elements with the O to it
    for (var i = 0; i < str.length; i++) { // i must be lower than length
       
        if (str[i].toLowerCase() === 'x') { // toLowerCase is function, it must be called with toLowerCase()
            x.push(str[i]); // adds elements to the end of an array
        } else if (str[i].toLowerCase() === 'o') { //if not x, then make the O's lowercase
            o.push(str[i]); //adding elements to the end of the O array
        }
    }
    // return statement must be located at the end
    if (x.length == o.length) { // if statement that compares the # of elements in the O and Z arrays
        return true; //if the arrays are the same legnth then return true
    } else {//else statement to return false
        return false;
    }
}
