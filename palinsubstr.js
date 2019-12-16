function isPalindrome (str) {
    str = str.toLowerCase();
    let revStr = str.split('').reverse().join('')
    return str === revStr
};

function LongestPalSubStr (str) {
    let maxPalStr = ''
    let maxLength = 0;
    
    for (let i = 0; i < str.length; i++) {
        let subStr = str.slice(i, str.length);
        
        for (let j = subStr.length; j >= 0; j--) {
            let subSubStr = subStr.slice(0, j);
            if (subSubStr.length >=1) {
                if (isPalindrome(subSubStr)) {
                    if (subSubStr.length > maxLength) {
                        maxLength = subSubStr.length;
                        maxPalStr = subSubStr
                    }
                }
            }
        }
    }
    if (maxPalStr === '') return 'There is no Palindrome in this string!'
    return maxPalStr;
}

console.log(LongestPalSubStr('potato'))
console.log(LongestPalSubStr('tosato'))
console.log(LongestPalSubStr('tracecar'))
console.log(LongestPalSubStr('hellena'))
console.log(LongestPalSubStr('abcdedcbafghijk12345678987654321'))