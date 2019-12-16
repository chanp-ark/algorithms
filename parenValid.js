function parenValid (str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') arr.push(str[i])
    if (str[i] === '{') arr.push(str[i])
    if (str[i] === '(') arr.push(str[i]) 
    if (str[i] === ')') {
      if (arr[arr.length-1] === '(') arr.pop()
      else return 'False'
    }
    if (str[i] === ']') {
      if (arr[arr.length-1] === '[') arr.pop()
      else return 'False'
    }
    if (str[i] === '}') {
      if (arr[arr.length-1] === '{') arr.pop()
      else return 'False'
    }
  }
  if (arr.length === 0) return 'True'
  else return 'False'
}

console.log(parenValid('([{}])()')) // true
// console.log(parenValid('')) // true
console.log(parenValid('({[)]')) // false
// console.log(parenValid("()(){(())")) // false