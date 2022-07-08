function isIsogram(str){
    let newArray = str.split('');
    for (let i = 0; i < newArray.length; i++)
    
    for (let j = i + 1; j < newArray.length; j++)
    
    if(newArray[i] === newArray[j]){
        return false;
    }
    return true;
}
