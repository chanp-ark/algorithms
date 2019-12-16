/*
Input: [3, 6, 3, 4, 1]  
Output: 3
*/

function witnesses (arr) {
  let curHeight = 0;
  const witnesses = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let curEl = arr[i];
    if (curEl > curHeight) {
      witnesses.push(curEl);
      curHeight = curEl
    }
  }
  return witnesses.length
}

console.log(witnesses([8, 7, 3, 6, 3, 4, 1]))