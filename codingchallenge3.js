//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:http://www.zombie-bites.com will return "zombie-bites". "https://www.cnet.com will return "cnet"



//given url, nums, yes to symbols, domain is always .com, no empty string,
//return urn name ie facebook.com/alyssa  -> "facebook" return as a string

function DomainName(url) {

    //replace tthe stuff upfront
  
    return url.replace('https://', '').replace('http://', '').replace('wwww.', '').split('.')[0]
  
    //split grabbing the first value
  }
  
  console.log(DomainName("http://github.com/car"), 'github')
  
  
  // 
  // console.log(parseDomainName("http://www.zombie-bites.com"), "zombie-bites")//
  // console.log(parseDomainName("https://www.cnet.com"), "cnet")// 
  
