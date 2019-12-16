function flipPairs (str) {
  // create new variable 'flipped' equal to an empty string
  let flipped = '';
  // for loop through each character, increment by 2
  for (let i = 0; i < str.length; i+= 2) {
    // if the consecutive index is not undefined
    if (str[i+1] !== undefined) {
      // add the consecutive index to 'flipped'
      flipped += str[i+1];
      // add the current index to 'flipped'
      flipped += str[i]
    // if the consecutive index is defined (else)
    } else {
      // add the current index to 'flipped'
      flipped += str[i]
    }   
  }
  //return 'flipped'
  return flipped
}

function assertEqual (actual, expected, testName) {
  let length = false;
  let value = false;
  if (actual.length === expected.length) length = true;
  if (actual === expected) value = true;
  if (length && value) {
    console.log('passed')
  } else {
    console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
  }
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(flipPairs(input))

assertEqual(flipPairs(input), "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!", 'flipPair' )


