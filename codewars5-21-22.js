function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

  //get rid of the zeros at the end of number 
  // 435600 --> 4356