/*
You will be given an array that contains two strings. 
// Your job is to create a function that will take those two strings and transpose them, 
  //so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

// use \n for new line
// do not need to do for loop for the array because we're told that this function will take an array with two strings
// questions: 
  // are we trying to return a string or array?
    // will assume string
  // are the two strings always the same length?
    // will assume yes

// the function will return a string
function transpose (arr) {
  // create return, empty string 'trStr'
  let trStr = '';
  // create two variables: firstStr to first index of input array, and secondstr to second index of input array
  let firstStr = arr[0];
  let secondStr = arr[1];
  // for loop from 0 to length of firstStr, incrementing by 1
  for (let i = 0; i < firstStr.length; i++) {
    // add our current elements to 'trStr' including a space at the end
    trStr += `${firstStr[i]} `
    trStr += `${secondStr[i]} `
    // add str '\n' to make new line
    trStr += "\n"
  }
  // return 'trStr'
  return trStr;
}

console.log(transpose(['Hello','World']))