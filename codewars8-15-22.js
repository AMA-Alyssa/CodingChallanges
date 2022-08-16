// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P -given a number, square each number, and join it together
//R - a number
//E - 9119 == 811181
//P
//make the num into string
        //set empty variable
        //for loop through each number
        //square it
        //join the numbers together

        function squareDigits(num){
            let string = num.toString();
            let results = [];
     
             for (let i = 0; i < string.length; i++){
                results[i] = string[i] * string[i]
             }
     
         return Number(results.join(''));
       };