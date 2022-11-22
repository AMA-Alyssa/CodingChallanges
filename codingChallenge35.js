// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//lower case, no nums, no !#
//return str of only first entries

function duplicateWords(str){
    //split filter join
     return str.split(" ").filter((w,i,a)=> w != a[i-1]).join(" ")
    
  }
  
  console.log(duplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))  //"alpha beta gamma delta alpha beta gamma delta"
  
  //filter((e, i,a)) elemeent, index, array