function isPalindrome(str) {
    var rev = str.split("").reverse().join("");
    return str === rev;
    }
    
  function longestPalindrome(str){
    let maxLength = 0;
    let maxPalSubStr = '';
  
    for(var i=0; i < str.length; i++) {
      var subs = str.substring(i, str.length);
      
      for(var j=subs.length; j>=0; j--) {
        var subSubsStr = subs.substring(0, j);
        
        if (subSubsStr.length <= 1) continue;
        
        if (isPalindrome(subSubsStr)) {
          if (subSubsStr.length > maxLength) {
            maxLength = subSubsStr.length;
            maxPalSubStr = subSubsStr;
            }
          }
        }
      }
    return maxPalSubStr;
  }
  
  console.log(longestPalindrome("tracecars")); 
  console.log(longestPalindrome("tomato"));
  console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
  