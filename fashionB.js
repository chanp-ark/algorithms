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

function avgCostPerDesigner (arr) {
  const returnObj = {
    'designers' : []
  }
  const desKey = {
    name: null,
    averagePrice: null,
    
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name !== desKey.name) {
      desKey.name = arr[i].name
      const shoes = arr[i].shoes
      const arrShoePrices = []
      for (let j = 0; j < shoes ; j++) {
        arrShoePrices.push(shoes[j].price)
      }
      console.log(arrShoePrices)
      desKey.averagePrice = average(shoes)
    }
  }
  returnObj['designers'].push(desKey)
  
  return returnObj
}

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let avg = Math.round(sum / (arr.length))
  return avg
}

console.log(avgCostPerDesigner(currentInventory))