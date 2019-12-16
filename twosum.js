function twoSum (arr, target) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let neededNum = target - arr[i];
        if (map[neededNum] !== undefined) {
            return `${neededNum} and ${arr[i]} add to ${target}`
        }
        else map[arr[i]] = i
    }
    return `There are no two numbers that add up to ${target}`
}

console.log(twoSum([4, 7, 1 , -3, 2], -1))