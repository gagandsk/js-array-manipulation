const myWords = ['amor', 'sol', 'piedra', 'día']

function filterByLength(array) {
  return array.filter(str => str.length >= 4)
}

console.log(filterByLength(myWords))