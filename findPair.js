/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

*/


function findPairForSum (arr, target) {
  // create empty object named 'track'
  const track = {}
  // for loop through the input arr
  for (let i = 0; i < arr.length; i++) {
    // create a variable 'needNum', as the target minus the current number
    let curNum = arr[i];
    let needNum = target - curNum;
    // if 'needNum' exists in the 'track' object, return the key and 'needNum'
    if (track[needNum]) {
      return `${[curNum, needNum]}`
    } else {
      // if it does not exist, add the key (number) and value (index) into the object
      track[curNum] = i;
    }
  }
  // if the loop completes, it means that it did not find a pair
  // return 'There is no pair in the array that add to "target"
  return `There is no pair in the array that add to ${target}`
}

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9))