En JS los datos asignados a una variable pueden ser de dos tipos:

1. **Primitive Type**: 
   - `undefined`
   - `null`
   - `boolean`
   - `number`
   - `string`
   - `symbol`
2. **Reference Type**: 
   - `objects`
   - `arrays`
   - `functions`

Una de las diferencia entre estas dos, está en la forma como se almacenan estos datos en memoria, para ser más claro un ejemplo.


```
let name = 'Javier';

let name2 = name;

let person = {name: 'javier'};

let person2 = person;
```

Cuando creamos ```name``` js crea un espacio en memoria y guarda su valor, ahora cuando creamos ```name2``` js continúa crea un nuevo espacio en memoria y asigna el mismo valor de la varible ```name```, de esta forma el valor de la variable ```name2``` es totalmente independiente a ```name```.

Ahora si creamos la variable ```person``` como un objeto que contiene un name, y si luego creamos otra variable ```person2``` y le asignamos el mismo objeto ```person```, aquí es donde la cosa cambia con respectos a los datos primitivos, en este caso js guardara el objeto ```person2``` como una referencia o apuntador al objeto ```person```, es decir que ambas variables apuntan al mismo objeto en memoria.

Ahora si entendamos ```Mutable o Inmutable```.

**Mutable:** es algo que se puede cambiar o agregar. Las funciones mutables consisten en cambiar el array original

**Inmutable:** es algo que no puede cambiar ni agregar.

Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son ```inmutables```. 

Entendamos con un ejemplo.
```
console.log(name); //javier
console.log(name2); //javier

name2 = 'platzi';

console.log(name); //javier
console.log(name2); //platzi''
````

Si imprimimos ```name``` y ```name2```, ambas nos dan javier, pero si reasignamos un valor de ```name2``` y volvemos a imprimir ocurre que solo cambia el valor de ```name2```, lo que demuestra que js guardas estás variables de forma separada, aun cuando el valor de ```name2``` se copio de name. Por eso los valores primitivos son ```inmutables```.

ahora hagamos lo mismo con los objetos.
```
console.log(person); //{name: 'javier'}
console.log(person2); //{name: 'javier'}

person2.name = 'platzi';

console.log(person); //{name: 'platzi'}
console.log(person2); //{name: 'platzi'}
```

Al inicio obtenemos las mismas propiedades, ahora cambiemos una de las valores de las propiedades y veremos que js cambio el valor tanto de ```person``` y ```person2```, esto debido a que ```person2``` se creo haciendo referencia al objeto ```person```, con reference type js crea una referencia al mismo objeto y el objeto permanece ```mutable```.

ya que el mismo objeto es ```mutable``` se puede cambiar o se pueden agregar nuevas propiedades al mismo objeto.

En es6 se creo un operador de propagación que permirte copias un objeto de forma segura sin hacer referencia al mismo objeto y sería así.

```
let person2 = {...person}
```

### MAP

El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es **inmutable**.

### Reduce

El método reduce es **inmutable** y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.


### Find y FindIndex
Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

### Flat

El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.


### FlatMap

El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).