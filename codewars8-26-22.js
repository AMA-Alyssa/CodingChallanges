function noSpace(x){
    //P given a string with spaces
   //R return a string without spaces
   //E ' hello bob ' -> 'hellobob'
   //P
   //use the replace()  /s means spaces, g means global flag to say we to match ALL occurrences of whitespaces in the string, not just the first one
   //return var
   let newStr = x.replace(/\s/g,'')
   return newStr;
   
 }

 //Simple, remove the spaces from the string, then return the resultant string.