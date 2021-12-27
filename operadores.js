// Operadores nivel intermedio


// para comparar algo con algo se utiliza "==", en este caso como son operadores que nos devuelven booleanos, nos dara "false" porque 13 no es igual a 14
document.write("Operadores comunes:");
document.write("<br>");
let numero = 13;
let numero2 = 14;

document.write(numero == numero2);
document.write("<br>");

// operador de inigualdad, con este signo "!=" nos sirve para demostrar si algo es diferente a algo, en este caso y como siempre nos devolvera el booleano "true" porque 13 si es diferente a 14

let numero3 = 13;
let numero4 = 14;

document.write(numero3 != numero4);
document.write("<br>");


// Operador que compara estrictamente "===", nos sirve para comparar si los datos son estrictamente iguales, nos devolvera "False" porque si vemos que son el mismo numero. diferencia estricta seria que un 23 esta como tipo numerico y el otro 23 esta tipo cadena de texto

let numero5 = "23";
let numero6 = 23;

document.write(numero5 === numero6);
document.write("<br>");


// Operador para ver si no es estrictamente igual "!==", nos sirve para vericar que los datos sean estrictamente diferentes, en este caso nos devolvera "true", porque 23 en string si es diferente a un 23 en numerico

let numero7 = "23";
let numero8 = 23;

document.write(numero7 !== numero8);
document.write("<br>");


// operadores sencillos muy comunes, ""< menor que", " > mayor que", "<= menor o igual a", ">= mayor o igual a"", se utilizar mucho en los condicionales y bucles

let comparacion = 12;
let comparacion2 = 15;

document.write("operadores basicos booleanos:" + "<br>");
document.write(comparacion < comparacion2);
document.write("<br>");
document.write(comparacion > comparacion2);
document.write("<br>");
document.write(comparacion >= comparacion2);
document.write("<br>");
document.write(comparacion <= comparacion2);


// Operadores logicos, "&&, ||, !", esto se puede entender si utilizamos la operacion con ley de signos.

let valor1 = true;
let valor2 = true;

document.write("<br>" + "operadores logicos:" + "<br>");
let resultado = valor1 && valor2;
let resultado2 = valor1 || valor2;
let resultado3 = !valor1;

let num1 = 14;
let num2 = 27;

let afirmacion1 = num1 < num2;
let afirmacion2 = num1 != num2;

// esto nos da "true" porque 14 es menor a 27 y 14 es diferente a 27, al ser los 2 "true" esto nos da un resultado de "true"
// si unos de los valores es "false" todo se convierte en false de lo contrario todo sera "true"
//  el simbolo && se le llama "and and"

document.write(afirmacion1 && afirmacion2);
document.write("<br>");

// el simbolo || hace que cuando alguno de los valores sea "true", todos los demas tambien lo seran. Ej:
// si uno de los valores es "False" y el otro es "true" nos dara siempre true, si los dos son "false" siempre nos dara "false" 
// el simbolo || se le llama "OR"
let afirmacion3 = num1 > num2;
let afirmacion4 = num1 != num2;

// Esto nos devuelve "true", porque vemos que 14 si es diferente a 27, entonces hace que las demas afirmaciones tambien sean "true"

document.write(afirmacion3 || afirmacion4);
document.write("<br>");


// el simbolo "!" nos sirve para cambiar el booleano a su contraparte booleana. Ej: si algo era "true", ahora sera "false" y viceversa.

document.write(!afirmacion3);
document.write("<br>");

// EJERCICIO:

let digito1 = 12;
let digito2 = 24;
let digito3 = 25;
let digito4 = 92;
let digito5 = 91;

let op = (digito1 < digito2 || digito2 < numero3) && (!(digito1 != digito2) && digito5 != digito3);
// Resuleto let op = false;

document.write("EJERCICIO:");
document.write("<br>");
document.write(op);
document.write("<br>");
