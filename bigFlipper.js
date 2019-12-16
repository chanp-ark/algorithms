function flipEveryNChars (str, n) {
  // create new empty array 'arrN'
  const arrN = [];
  // for loop through input str
  for (let i = 0; i < str.length; i += n) {
  // using subString, push every substring from 1 to n into 'arrN'
    let subStr = str.substring(i, i+n)
    arrN.push(subStr)
  };
  // create new empty str, 'flippedStr'
  let flippedStr = '';
  // for loop through 'arrN'
  for (let j = 0; j < arrN.length; j++) {
    // split the element at index, 'splitEl'
    const splitReverse = arrN[j].split('').reverse().join('')
    // add 'splitReverse' to 'flippedStr
    flippedStr += splitReverse
  }
  // return 'flippedArr'
  return flippedStr
}

console.log(flipEveryNChars('a short example', 5))