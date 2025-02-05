var miArray = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

function addNewAttr(array) {
  return array.map((item) => ({
    ...item,
    taxes: Math.round(item.price * 0.19),
  }));
}

console.log(addNewAttr(miArray));
