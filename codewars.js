//Given a random non-negative number, you have to return the digits of
// this number within an array in reverse order.

function digitize(n) {

    //convert array of numbers into a string
    //split string
    //reverse the string
    //use map to create a new array by calling the function Number
     
     
    return n.toString().split("").reverse().map(Number);
    
    }