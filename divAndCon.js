/*
Binary search is a technique for very rapidly searching a sorted collection 
                          by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the valu

Notes:
* If you don't find the value, you can return null.
* floor any fractional numbers

*/

function divNCon (arr, tar, beg = Math.floor((arr.length-1)/2), end = arr.length - 1) {
  if (arr[beg] === tar) return beg;
  if (Math.floor((arr.length-1)/2) === 0 && tar !== arr[beg]) return 'null';
  
  if (tar > arr[beg]) {
    beg = Math.floor(((end - beg) / 2) + beg)
    if (arr[end] === tar) return end
    return divNCon(arr, tar, beg, end)
  }
  
  if (tar < arr[beg]) {
    beg = 0
    end = Math.floor((end - beg) / 2)
    return divNCon(arr, tar, beg, end)
  }
}

console.log(divNCon([1, 3, 16, 22, 31, 33, 34], 34))

//console.log(divNCon([1, 3, 16, 22, 31, 33, 34], 2))

// ATTEMPT 1 - TOO COMPLICATED BUT WORKS
/*
function divAndCon (arr, target, ind1) {
  const ogArr = arr;
  
  function sliceNdice () {
    ind1 = Math.floor((arr.length-1)/2);
    if (Math.floor((arr.length-1)/2) === 0 && target !== arr[ind1]) return 'null'
    
    if (arr[ind1] === target) return ogArr.indexOf(target)
    
    if (target > arr[ind1]) {
      arr = arr.slice(ind1);
      if (arr[arr.length-1] === target) return ogArr.indexOf(target)
      return sliceNdice(arr, target, ind1)
    }
    if (target < arr[ind1]) {
      arr = arr.slice(0, ind1+1);
      console.log(arr)
      return sliceNdice(arr, target, ind1)
    }
  }

  return sliceNdice
}

const example = divAndCon([1, 3, 16, 22, 31, 33, 34], 32)
console.log(example())

*/