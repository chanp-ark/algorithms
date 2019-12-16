/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'
           0123456789012345678921
           length = 22



*/

function rotate (str1, str2) {
  // check if str1 and str2 are strictly equal
  if (str1 === str2) return true;
    // if true, return true
  // split str1 into an array
  const arr1 = str1.split('');
  // remove first element
  let firstEl = arr1.shift();
  // push that element into the array
  arr1.push(firstEl)
  console.log(arr1)
  // while the joined array is not strictly equal to str1
  while (arr1.join('') !== str1) {
    // if the joined array is strictly equal to str2
    if (arr1.join('') === str2) return true
      // return true
    // remove first element
    firstEl = arr1.shift()
    // push into array
    arr1.push(firstEl)
    console.log(arr1)
  }
  return false
}


console.log(rotate('hello world', 'orldhello w'))