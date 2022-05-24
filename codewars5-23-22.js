function areYouPlayingBanjo(name) {
    let nameSplit = name.split('');
    if( nameSplit[0]==='r' || nameSplit[0] === 'R'){
      return ( ` ${name} plays banjo`)
    }else{
     return (`${name} does not play banjo`)
    }
     
   }