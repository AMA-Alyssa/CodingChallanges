// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)


//PREP
//Parameters: write a function that counts the # of divisors of a positive number
//Results the count of divisors   
//Examples: 5 ==>2 (1,5)
//Psuedo 
//Psuedo 

//assign variable to 0
//for loop
//if statement in for loop
// if n remainder of i = 0, then 


function getDivisorsCnt(n){
    let num = 0;
    //this is setting our count to 0
    for( let i =1; i <=n; i++){
        // let i=1; i <=5, i++
        //this is looping through each number until we hit that given number (n)
        if (n %i == 0){
            // 5 % 1 == 0
            // 5 % 2 == 1
            //5 % 3 ==2
            //5 % 4 == 1
            //5 % 5 == 0
            num +=1;
            //this is adding 1 to the count
        }

    }
    return num;
    //this is returning our total count of divisors
}
    