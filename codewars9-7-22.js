//const grow=x=> x.reduce((a,b) => a*b);



const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };