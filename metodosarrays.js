// pop()
// Nos saca el ultimo elemento de un array y lo muestra, pero eso no quiere decir que elimino los demas elementos, simplemente este array se modifico
let nombres = ["pedro", "Mario", "Jose"];

// nombres sin modificar
document.write(nombres + "<br>");

// Nombres modificados
resultado = nombres.pop();
document.write(resultado + "<br>");

// array modificado
document.write(nombres + "<br>");


// shift()
// Nos saca el primer elemento de un array y lo muestra, pero eso no quiere decir que elimino los demas elementos, simplemente este array se modifico
let nombres1 = ["pedro", "Mario", "Jose"];

// nombres sin modificar
document.write(nombres1 + "<br>");

// Nombres modificados
resultado1 = nombres1.shift();
document.write(resultado1 + "<br>");

// array modificado
document.write(nombres1 + "<br>");

// push()
// lo que hace es agregarnos un nuevo elemento al final de un array

// original
let nombres2 = ["pedro", "Mario", "Jose"];

// elemento agregado
resultado2 = nombres2.push("salome", "Milena", "Mono");

// este nos devuelve la posicion del nuevo elemento, o la cantidad actual de elementos en el array
document.write(resultado2 + "<br>")

// este nos devuelve el array modificado con el nuevo elemento
document.write(nombres2 + "<br>")

// reverse()
// nos colocara el orden de un array al reves, es decir si "samuel" estuviese al principio de un array, ahora estatra al final

let numeros = [1,2,3,4,5];

document.write(numeros + "<br>");
numeros.reverse();
document.write(numeros + "<br>");

// unshift()
// hace lo opuesto al push, agrega elementos a un array pero esta vez se agregan al inicio
let numeros2 = [3,4,5];

document.write(numeros2 + "<br>");
numeros2.unshift(1,2);
document.write(numeros2 + "<br>");

// sort()
// hace lo opuesto al push, agrega elementos a un array pero esta vez se agregan al inicio
let numeros3 = [1, 7, 3, 9, 8];
let palabras = ["santiago", "gato", "pera", "Jueves"];

document.write(numeros3 + "<br>");
document.write(palabras + "<br>");
numeros3.sort();
palabras.sort();
document.write(numeros3 + "<br>");
document.write(palabras + "<br>");

// splice()
// cambia el contenido de un array eliminando elementos existentes o agregando elementos

let palabras1 = ["santiago", "gato", "pera", "Jueves", "perro", "domingo", "casa"];

// Original
document.write(palabras1 + "<br>");

// el 1 es la posicion desde donde se empezaran a eliminar los elementos, y el 3 es la cantidad de elementos que van eliminados, si agregamos un 3er parametro, ya no le estamos diciendo que los elimine si no que los remplace
palabras1.splice(1, 3, "Samuel", "Gonzalo");

// Modificado
document.write(palabras1 + "<br>");


// join()
// coenvierte arrays a caedenas de texto, aparte como parametro podemos agregar contenido como separador de cada uno de los elementos
let array1 = ["santiago", "gato", "pera", "Jueves", "perro", "domingo", "casa"];

// Transforma el array a su nuevo contenido y luego se convierte en cadena de texto
let resultado3 = array1.join("/ <br>");

// Resultado
document.write(resultado3 + "<br>");


// slice()
// lo que hace es devolvernos una cantidad de elementos de un array segun se lo definamos

let array2 = ["santiago", "gato", "pera", "Jueves", "perro", "domingo", "casa"];

// le decimos que empiece en la posicion,(en este caso 0), y con el (este caso 5) me muestre todos los elementos que estan antes de la posicion 5, es decir que me muestra 4 elementos porque el ultimo elemento no esta incluido, y si queremos que nos muestre todo el array menos el ultimo elemento, colocamos -1 como 2do paramentro
let resultado4 = array2.slice(0, 5);

document.write(resultado4 + "<br>");


// filter()
// itera cada vuelta con, definienose con cada elemento de un array, es decir, en cada vuelta su valor va a ser igual al uno de los valores de un array, en otra vuelta va a ser igual a otro elemento y asi con cada uno

let array3 = ["santiago", "gato", "pera", "Jueves", "perro", "domingo", "casa"];

array3.filter(array3 => document.write(array3 + "<br>"));

// forEach()
// hace lo mismo que un filter, pero el filter es mas completo
