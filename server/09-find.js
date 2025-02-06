const numbers = [1, 30, 49, 29, 10, 13];

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta = numbers.find((item) => item === 10);
const rta2 = products.find(item => item.id === '🍕');
const rta3 = products.findIndex(item => item.id === '🌭');

console.log(rta);
console.log(rta2);
console.log(rta3);
