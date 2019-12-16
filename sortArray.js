function sortNum (arr) {
// Jim's Method 
    const arrOne = [];
    const arrTwo = [];
    const arrThree = [];
    for (let i of arr) {
        if (i === 1) arrOne.push(i);
        if (i === 2) arrTwo.push(i);
        if (i === 3) arrThree.push(i);
    }
    const combineOneTwo = arrOne.concat(arrTwo);
    const combineThree = combineOneTwo.concat(arrThree);
    
    return combineThree
    
// My Method
    // const newArr = [];
    // const objNums = {
    //     1: 0,
    //     2: 0,
    //     3: 0,
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     objNums[arr[i]] += 1
    // }
    // let j = 1;
    // while (objNums[j] > 0) {
    //     newArr.push(Number(j))
    //     objNums[j] -= 1
    //     if (objNums[j] === 0) j++
    // }
    
    // return newArr
}

console.log(sortNum([2,2,3,2,1,1,2,2,3,3,3,3,3,1,1]))