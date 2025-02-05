const letters = ['a', 'b', 'c', 'd'];

//const newArray = [];

const newArray2 = letters.map(item => item + '++');
/*
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++')
    
}
*/
console.log('original', letters);
//console.log('new', newArray);
console.log('map', newArray2)