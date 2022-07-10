function filter_list(l) {
    let newArray = l.filter( el => typeof el === 'number' )
   return newArray;
  }