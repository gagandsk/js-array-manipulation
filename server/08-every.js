const numbers = [1,30,19,29,10,13];

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta = numbers.every(item => item <= 40);
const rta2 = team.every(player => player.age < 15)

console.log('rta:', rta);
console.log('rta2:', rta2)
