//playing around with reduce... what if I divided nums instead of add or multiple




function sumMix(arr) {
    let sum = arr.reduce((a, c) =>
      a / Number(c),);
    return sum;
  }
  
  console.log((sumMix([ '10', '2'])));
  