function validatePIN (pin) {
    let ifNum = pin.match(/^\d+$/);
    if (ifNum != null){
       if(  pin.length === 4 || pin.length === 6){
           return true
         }else{
           return false
         }

   }else{
       return false
   }
}