// Una funcion es una porcion de codigo a la que se asinga un nombre, y luego puede ser llamada esa funcion para hace algo, por ejemplo si quisieramos hacer una aplicacion de calculadora, utilizariamos funciones porque al calcular siempre se llama a esta porcion de codigo.

// podemos llamar la funcion cuantas veces queramos

// Ejemplo practico.

// donde dice "Saludar" es el nombre con el que llamamos a esta funcion 
function saludar(){
    // Luego dentro de esta, copiamos el codigo que queremos que ejecute
    let pregunta = prompt("Hola!, samuel, como fue tu día?");

    if(pregunta == 'bien'){
        alert("Me alegro");
    }else{
        alert("una pena");
    }
}
// y luego la llamamos
// saludar()
// Tambien podemos guardar funciones en variables

 let saludar2 = function(){
    // Luego dentro de esta, copiamos el codigo que queremos que ejecute
    let pregunta = prompt("Hola!, samuel, como fue tu día?");

    if(pregunta == 'bien'){
        alert("Me alegro");
    }else{
        alert("una pena");
    }
}
// La llamamos
// saludar2()


// EL RETURN EN UNA VARIABLE:

// el return no sirve para que una funcion un devuelva un valor, lo podemos utizar para vaeriguar si nuestra funcion se ejecuto correcatmente, o simplemente para devolvernos algun valor el la porcion de codigo anterior

// lo que hara es devolvernos lo que se definio en el return cuando llamemos la funcion, se define return, luego se llama la funcion, la funcion se ejecuta y nos devuelve el valor de return, para aclarar, el programa se ejecuta normal, pero siempre nos va a retonar algun valor, tambien su funcion es terminar el proceso. Ej: si coloco una alerta despues del return, la alerta no se va a ejecutar

// Ejemplo return:

function hablar(){
    respondio = prompt("Como estas?");
    // retornamos el valor de la pregunta
    return respondio
}

// llamamos la funcion, se ejecuta y no retorna su valor en return
// let resultado2 = hablar()
// // lo imprimimos
// document.write(resultado2);


// Parametros:
// los parametros en una funcion nos sirven para que cuando llamemos a una funcion, podamos trabajar con el contenido que estan dentro de esos parentesis, es decir, cuando creo un funcion, dentro de sus parensetis defino 2 paramentros, Ej: (a, b), luego dentro del bloque de la funcion podemos hacer que (a y b se sumen), hasta aqui todo bien, sabemos que cuado llamamos la funcion tambien colocamos unos "()" al frente, bien, dentro de estos paretesis van los valores de los parametros que queramos, si nuestros parametros son "a, b" cuando los llamamos colocamos por ejemplo, (25, 25), y ya con algun metodo hacemos que nos muestre ese resultado, 

// Ejemplo practico:

// en los paretesis ponemos los parametros
function sumar(a, b){
    // los trabajamos
    let sumado = a + b;
    // lo retornamos
    return "se ejecuto" + sumado;
}

// definimos los parametros con cualquier valor
// let resultado = sumar(25, 25)
// // lo mostramos
// document.write(resultado);


// El scope: el scope es algo que no se lleva a la practica si no que es una definion de que las fucniones tienen un scope global lo que quiere decir que podemos ingresar a esa funcion desde cualquier parte de nuestro programa, pero las variables que estan dentro de esa funcion son locales, lo que quiere decir que solo podemos trabajar con ellas dentro de nuestra funcion, por fuera de la funcion seria como una variable nueva.



// FUNCIONES FLECHA:
 
// Las fucniones flecha cumplen la misma mision que las formas de inicializar una funcion, es decir que hace lo mismo pero que se escribe diferente, Ej:  


// Funcion Normal

function hablar(){
    respondio = prompt("Como estas?");
    return respondio
}

// let resultado2 = hablar()
// document.write(resultado2);



// Funcion flecha:

// las funciones flecha tiene beneficion, por ejemplo si solo ponemos un parametro no hace falta colocar parentesis, tambien si solo tiene una linea de codigo no hace falta colocar las llaves que lo encierran


// Ejemplo de funcion flecha 1
const saludar7 = ()=> document.write("Hola");

// Ejemplo de funcion flecha 2
const saludar8 = ()=>{ 
    document.write("Hola");
}

// Ejemplo de funcion flecha 3
const saluda9 = nombre => {
    document.write("Hola");
}

// EJEMPLO FUNCION FLECHA CON TODAS CONVINADAS

const saludar10 = nombre => document.write("Hola");