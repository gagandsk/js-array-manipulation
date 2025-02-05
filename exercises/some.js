const myNumbers = [1, 3, 5, 7, 10, 11];
const myNumbers2 = [1, 3, 5]
const myNumbers3 = [];

function checkArray(numbers) {
  return numbers.some(item => item % 2 === 0)
}

console.log(checkArray(myNumbers))