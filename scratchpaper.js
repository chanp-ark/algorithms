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
  return  returnFlatStr
}

console.log(flatList(currentInventory))