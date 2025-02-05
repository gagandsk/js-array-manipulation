/*
Contar numeros por rangos. Ejemplo:
    1-5: 3
    6-10: 1
    11-15: 10
*/
const numers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const rangos = [
    { min: 1, max: 5, label: '1-5' },
    { min: 6, max: 10, label: '6-10' },
    { min: 11, max: 15, label: '11-15' }
];

const resultado = numers.reduce((acc, num) => {
    const rango = rangos.find(r => num >= r.min && num <= r.max);
    
    if (rango) {
        acc[rango.label] = (acc[rango.label] || 0) + 1;
    }

    return acc;
}, {});

console.log(resultado);