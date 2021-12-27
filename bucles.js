// Bucles, los bucles son formas de hacer condicionales la diferencia es que los bucles se la pasan preguntando la condicion siempre hasta que la condicion sea "false" o le digamos cuando debe parar

// algunos bucles son:

// While
// do while
// for
// for in
// for of

// Ejemplo practico:

// el numero++ no sirve para que el bucle pregunte todas las veces que sea necesario hasta que sea falso, eso quiere decir que cuando colocamos numero++; lo que va a hacer incremetar el "0" hasta el "10" y ahi para. Porque para?, porque cuando se incremeta el "0" pasa de uno en uno hasta diez, ahi se detiene porque "10 no es menor a 10, eso lo convierte en un "false" y ahi acaba el programa"

// el break nos permite terminar ese bucle en determinada vuelta, es decir si quiero que de "1000" vueltas, quiero que se detenga en la vuelta "10"

// while:
let numero = 0;
let numero2 = 0;
let numero1 = 0;

document.write("while:" + "<br>");
while (numero < 10){
    numero++;
    document.write(numero + "<br>");
}

document.write("while con break:" + "<br>");
while (numero2 < 10){
    numero2++;
    document.write(numero2 + "<br>");
    if(numero2 == 9 ){
        break;
    }
}

// do while
// el do while es diferente de while porque en vez de pregnutar la condicicion y luego ejecutar, lo que hara es "ejecutar primero" y luego preguntar

// ejemplo rapido, lo que pasa aqui es que primero imprime el número que es "0" luego con el numero++; lo incrementa en 1 y luego pregunta, ¿1 sigue siendo menor a 10?, como es verdadero vuelve y se ejecuta, muestra 1, con el numero++; lo incrementa a "2" y luego pregunta, ¿2 sigue siendo menor a 10? y asi sucesivamente hasta llegar a 10, como resumen: hace lo mismo que el while pero en vez de preguntar primero, lo que hace es ejecutar primero y luego preguntar


document.write("do while:" + "<br>");

do {
    document.write(numero1 + "<br>");
    numero1++;
}

while (numero1 < 10);



// For:
// El for es exactamente igual que el while, con la diferencia de que es un bucle determinado o bucles, finitos o infinitos, el for se compone de tres factores, "DECLARAR, INICIALIZAR E ITERAR"

// En el for se crean variables locales, osea que se crean variables para trabajar en su propio bloque, Ej: for (let i = 0;), va dentro de su sintaxis

// Ejemplo practico

document.write("For:" + "<br>");
for(let i = 0; i <= 10; i++){
    document.write(i + "<br>");
};

// La sentencia Continue, lo que hace es que cuando el bucle de unas determinadas vueltas, se salte una de las vueltas y siga con el programa, Ejemplo: imprimime este número del 0 al 20, pero que cuando llegues al 12 te lo comas y no lo imprimas, eso es lo que podemos observar en el bluce for de abajo

document.write("For con la sentencia Continue:" + "<br>");
for(let i = 0; i <= 15; i++){
    if(i == 12){
        continue;
    }
    document.write(i + "<br>");
};


// For in:
// El for in, lo que hara es que en cada vuelta, darnos el indice del valor(o posicion de cada elemento), y entregalo en cada vuelta, este nos imprime su posicion



document.write("For in: Posicion del elemento:" + "<br>");
let animales = ["Perro", "Gato", "Mono", "Serpiente", "Gorila"];

for(animal in animales){
    document.write(animal + "<br>");
};

document.write("<br>");

// For of:
// el For of, lo que hace es darnos el valor de la posicion, lo opuesto al for in(nos da el valor de cada posicion), y los lo entrega, esto nos imprime su valor

document.write("For of: Valor de la posicion:" + "<br>");
for(animal of animales){
    document.write(animal + "<br>");
};


// Sentencia label
// El label nos permite asociar un bucle a un nombre para poder terminarlo cuando queramos, nos puede servir para terminar un bucle desde otro bucle adentro del anterior. para utilizarlo se coloca un break o un continue y en frente de este le le coloca un nombre con camelcase y luego encima del bloque se llama.

// Ejemplo para practicar
document.write("<br>");
document.write("Sentencia label:" +"<br>");
document.write("<br>");

let array1 = ["Maria", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "josefina"];

for(array in array2){
    if(array == 2){
        for(array of array1){
            document.write(array + "<br>");
            break;
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}
