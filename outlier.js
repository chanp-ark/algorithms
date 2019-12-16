function detectOutlierValue(str) {
  // create new array 'strToArr' split string into array by spaces
  const strToArr = str.split(' ');
  // create an object; key will be numbers from 1 to 10; properties will be ordinals of key
  const ordinalNum = {
    '1': 'first',
    '2': 'second',
    '3': 'third',
    '4': 'fourth',
    '5': 'fifth',
    '6': 'sixth',
    '7': 'seventh',
    '8': 'eighth',
    '9': 'ninth',
    '10': 'tenth'
  }
  
  // create emptyObject countEvenOdd
  const countEvenOdd = {}
  // for loop through 'strToArr'
  for (let j = 0; j < strToArr.length; j++) {
    let curEl = strToArr[j];
    // record the elements by even or odd; if it exists, add one
    if (curEl %2 === 0) {
      if (countEvenOdd['even'] === undefined) {
        countEvenOdd['even'] = 1
      } else {
        countEvenOdd['even'] += 1
      }
    } else {
      if (countEvenOdd['odd'] === undefined) {
        countEvenOdd['odd'] = 1
      } else {
        countEvenOdd['odd'] += 1
      }
    }
  }
  
  // create boolean variable 'isEven'
  let isEven;
  // loop through 'countEvenOdd'
  if (countEvenOdd['even'] === 1) {
    isEven = true;
  } else {
    isEven = false
  }
  
  // for loop through 'strToArr'
  for (let i = 0; i < strToArr.length; i++) {
    let curEl = strToArr[i];
    // if element is even
    if (isEven && curEl %2 === 0) {
      // return following string, "index of element - object[key] of the number, while the rest of the numbers are odd"
      let returnStr = `${strToArr.indexOf(curEl)+1} - ${ordinalNum[strToArr.indexOf(curEl)+1]} number is even, while the rest of the numbers are odd`
      return returnStr
    } else if (!isEven && curEl %2 === 1) {
    // if element is odd
      // return following string "index of element - object[key] of the number,  is odd, while the rest of the numbers are even"
      let returnStr = `${strToArr.indexOf(curEl)+1} - ${ordinalNum[strToArr.indexOf(curEl)+1]} number is odd, while the rest of the numbers are even`
      return returnStr
      }
    }
}


console.log(detectOutlierValue("2 4 7 8 10"))
console.log(detectOutlierValue("1 10 1 1"))
console.log(detectOutlierValue("1 1 1 1 5 7 12"))