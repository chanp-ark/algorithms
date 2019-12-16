function spiral (arrOfArrs, idx=0, lowerLim = 0, upperLim = arrOfArrs.length-1) {
  // base case
  if ( lowerLim > upperLim) return
  
  // for ascending
  
  // if index is equal to lowerLim
  if (idx === lowerLim) {
    // for loop and log each element
    for (let i = 0; i < arrOfArrs[idx].length; i++) {
      console.log(arrOfArrs[idx][i])
    }
    // add one to lower lim
    lowerLim++
    // add one to index
    idx ++
    // while index is lower than upperLim
    while (idx < upperLim) {
      // console log the last element
      console.log(arrOfArrs[idx][arrOfArrs[idx].length-1])
      // splice the last element
      arrOfArrs[idx].splice(arrOfArrs[idx].length-1, 1)
      // add one to index
      idx++
    }
    return spiral (arrOfArrs, idx, lowerLim, upperLim)
  }
  
  
  
  // for descending
  
  // if index is equal to upper lim
  if (idx === upperLim) {
    // for loop and log each element in reverse
    for (let j = arrOfArrs[idx].length-1; j >= 0; j--) {
      console.log(arrOfArrs[idx][j])
    }
    // subtract one from upper lim
    upperLim--
    // subtract one from index
    idx--
    // while index is greater than lower lim
    while (idx > lowerLim) {
      // console log the first element
      console.log(arrOfArrs[idx][0])
      // splice the first element
      arrOfArrs[idx].splice(0, 1)
      // subtract one from index
      idx--
    }
    return spiral (arrOfArrs, idx, lowerLim, upperLim)
  }
}

const grid1 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const grid2 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25], 
  [26, 27, 28, 29, 30]
]

const grid3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  
]


console.log(spiral(grid1))
console.log(spiral(grid2))
console.log(spiral(grid3))

