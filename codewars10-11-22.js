//Create a function that takes in a word and returns a palindrome.
//I would like to ask you a series of questions to make sure I understand the problem.
//word -> will it be a string? Will the string be empty?  Will there be nums? 
//word -> string, no empty, no !, no nums, no caps, one word

//Do you want it to be a boolean? Or palindrome ?
//return true || false

//racecar --> true
//bob --> true
//tacos --> false


function isPalindrome(word){
     //reverse the word using methods..I think it would be split reverse join
     
        // reverse word === the original word  "is this a good approach?"

    let revWord = word.split(' ').reverse().join('')

    if( revWord === word){
        return true
    }else{
        return false
    }
}
 

    

  


//If these work, then the problem is consider solved, right ? Yes.
Console.log(isPalindrome('racecar'),'true') 
Console.log(isPalindrome('bob'), 'true')
Console.log(isPalindrome('tacos'), 'false')

//**In terms of what you wanted to accomplish, do you consider this accomplished.

//const isPalindrome = word => word === word.split('').reverse(). Join('')


//Ask Questions - What does it look like how you write your code?