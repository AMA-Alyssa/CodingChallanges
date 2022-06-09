function getSize(w, h, d){
    var area = (2*d*h) + (2*w*h) + (2*d*w);
    var volume = d*w*h;
    return [area, volume];
  }