const myNumbers = [1, 1, 1]
const myNumbers2 = [2, 4, 8]

function calcSum(numbers) {
  return numbers.reduce((a, b) => a + b)
}
console.log(calcSum(myNumbers2))