function singleNum (arr) {
  const objNum = {};
  for (let i = 0; i < arr.length; i++) {
      if (objNum[arr[i]] === undefined) {
          objNum[arr[i]] = 1
      } else {
          objNum[arr[i]] += 1
      }
  }
  
  for (let j in objNum) {
      if (objNum[j] < 2) {
          return j
      } 
  }
  return 'All numbers come in pairs'
}

console.log(singleNum([4, 3, 2, 4, 3, 2, 1, 5, 6, 7, 8, 9, 5, 9, 1, 10, 10, 7, 8]))