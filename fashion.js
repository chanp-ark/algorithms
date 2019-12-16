var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function flatList (arr) {
  let returnFlatStr = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].shoes.length; j++) {
      returnFlatStr += `${arr[i].name}, `;
      returnFlatStr += `${arr[i].shoes[j].name}, `
      returnFlatStr += `${arr[i].shoes[j].price}\n`
    }

  }
  return returnFlatStr
}

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let avg = Math.round(sum / (arr.length))
  return avg
}

function calculateAveragePricePerDesigner(arr) {
  const summaryOfStore = {}
  const arrDes = [];
  
  
  for (let i = 0; i < arr.length; i++) {
    const objArrOfDes = {};
    let shoes = arr[i].shoes;
    const arrOfPrice = [];
    for (let j = 0; j < shoes.length; j++) {
      arrOfPrice.push(shoes[j].price)
    }
    objArrOfDes['name'] = arr[i].name;
    objArrOfDes['averagePrice'] = average(arrOfPrice)
    arrDes.push(objArrOfDes)
  }
  summaryOfStore['designers'] = arrDes
  
  return summaryOfStore
}

function listAllBlack (arr) {
  let flatBlackStr = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].shoes.length; j++) {
      if (arr[i].shoes[j].name.includes('black')) {
        flatBlackStr += `${arr[i].name}, `;
        flatBlackStr += `${arr[i].shoes[j].name}, `
        flatBlackStr += `${arr[i].shoes[j].price}\n`
     }
    }
  }
  return flatBlackStr
}

function findIndex (arr, word) {
  for (let i of arr) {
    let found = arr.find(element => element.includes(word))
    return arr.indexOf(found)
  }
}

function generateLaceDetails (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const objShoeWithLace = {};
    let shoes = arr[i].shoes;
    for (let j = 0; j < shoes.length; j++) {
      let strWordsShoe = '';
      if (shoes[j].name.includes('lace')) {
        strWordsShoe += `${shoes[j].name}`;
        const arrWords = strWordsShoe.split(' ');
        objShoeWithLace['nameArray'] = arrWords;
        objShoeWithLace['targetWordIndex'] = findIndex(arrWords, 'lace');
        result.push(objShoeWithLace);
  
      }
    }
  }
  return result
}



// console.log(flatList(currentInventory))
console.log(calculateAveragePricePerDesigner(currentInventory))
// console.log(listAllBlack(currentInventory))
// console.log(generateLaceDetails(currentInventory))