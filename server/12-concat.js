const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]

const rta = numbers1.concat(numbers2);
const rta2 = [...numbers1, ...numbers2];
const rta3 = [...numbers1, ...'random'];
const rta4 = [...numbers1, 'random']

console.log(rta)
console.log(rta2)
console.log(rta3)
numbers1.push(...numbers2)
console.log(rta4)