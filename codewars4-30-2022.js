function bmi(weight, height) {
  
    let bodyMassIndex = weight/(height * height);
    if (bodyMassIndex <=18.5){
      return "Underweight";
    }
    if (bodyMassIndex <= 25 && bodyMassIndex >= 18.5){
      return "Normal";
    }
    if (bodyMassIndex >= 25 && bodyMassIndex <= 30){
      return "Overweight";
    }
    if( bodyMassIndex >30){
      return "Obese";
    }
   
  }