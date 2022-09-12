


    // Write a function to convert a name into initials. This kata strictly takes 
    //two words with one space in between them.
    // The output should be two capital letters with a dot separating them.
    // It should look like this:
    // Sam Harris => S.H
    // patrick feeney => P.F

    //P given an array with two words
    //return the first letter of each word with a period in between
    //e  Jon Alex ==> J.A
    //P

    function initials(arr){

        //split the name into two elements
        //grab the first letter in each word
        //use temperal literals 

        let newArr = arr.toUpperCase().split(' ');
        //return newArr
        return `${newArr[0][0]}.${newArr[1][0]}`
        return newInitials;




    }



