const numbers = [2, 4, 6, 8, 10];
const numbers2 = [1, 3, 5, 7, 10, 11];

function checkArray(array) {
  return array.every(item => item % 2 === 0)
}

console.log(checkArray(numbers2))