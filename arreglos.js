// Arreglos, es un contenedor que tiene la funcion de guardar varios elementos, por ejemplo, como si en una variable en vez de guardar un solo elemento, guardara muchos. Ej: Frutas = [Pera, Manzana, Mango, Fresa]; <== eso es un array o arreglo.

// Alguna/s caracteristicas de los arrays/arreglos es que sus elementos estan ubicados por posiciones, en el mundo de la programacion el primer elemento seria la posicion 0 y el segundo elemento seria la posicion 1.

// Cada dato debe ir separado por comillas o backticks cuando el dato es tipo string, cuando es numerico se coloca normal y separandolo por una coma

// Ej1: let frutas = ["Manzana", "Pera", "Mango", 19, 17, 21];


let frutas = ["Manzana", "Pera", "Banano", 9, 12, 14, "Fresa"];
// Para llamar alguna posicion del array se llama primero al array y dentro de corchetes la posicion, en este caso me estaria imprimiendo la fruta "Pera", porque la pera esta en la "Posicion" "0" y no en la "0" que es donde esta la "Manzana"

// Llamando a una posicion en especifico
document.write(frutas[1] + "<br>");
// llamando a todos sus elementos en general
document.write(frutas + "<br>");
// Ahora llamo a los números
document.write(frutas[3] + "<br>");



// Arrays asociativos, mas comunmente se les conoce como objetos, y se escriben dentro de {} como si fuese un bloque de codigo
// la forma de entender los arrays asociativos es cambiar su contexto, es decir. Si antes escribiamos frutas = ["Manzana, pera"] ahora se escribe como en forma de "Variable", Ej: frutas = {fruta1: Manzana, fruta2: Pera} y para llamar luego su posicion ya no se llamaria por su posicion si no por su variable, Ej:

// sus datos tambien se escriben dentro de comillas o backticks y tambien se separan por comas

// let frutas = {
//     fruta1: "Bananano",
//     fruta2: "Pera",    
// }

//  document.write(frutas[fruta1]);

// Ejemplo practico:

let pc ={
    nombre: "SamuelPC",
    procesador: "Core i3",
    ram: "4gb",
    color: "negro",
    espacio: "500gb",
    tipo: "Mesa"
};

// Para llamar el dato, su variable debe ser llamada entre comillas como vemos aqui abajo

document.write(pc["procesador"] + "<br>");