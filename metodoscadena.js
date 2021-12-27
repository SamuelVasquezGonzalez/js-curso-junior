// METODOS DE CADENA


// concat()
// une 2 o mas cadenas de texto
let cadena1 = "cadena de prueba prueba prueba prueba prueba";
let cadena2 = "cadena de prueba";

resultado = cadena1.concat(cadena2);
document.write(resultado + "<br>");

// starsWith()
// si una cadena comienza con los caracteres de otra cadenas nos devuelve true, si no, nos devuelve falses

resultado1 = cadena1.startsWith(cadena2);
document.write(resultado1 + "<br>");

// endsWith()
// Lo mismo que el starWith pero este nos devuelve booleanos si los caracteres finales son iguales
resultado2 = cadena1.endsWith(cadena2);
document.write(resultado2 + "<br>");

// includes()
// busca cadenas, si un valor es igual a otro valor en otra cadena nos devuelve true, si nos son iguales nos devuelve false
resultado3 = cadena1.includes(cadena2);
document.write(resultado3 + "<br>");

// indexOf()
// nos muestra la posicion en la que se encuentra el valor que le decirmos, si encuentra el valor nos muestra su posicion, si no, nos devuelve -1

resultado4 = cadena1.indexOf("prueba");
document.write(resultado4 + "<br>");

// lastIndexOf()
// si tenemos varios valores iguales, lo que hara es recorrer la cadena de atras hacia adelante
resultado5 = cadena1.lastIndexOf("prueba");
document.write(resultado5 + "<br>");

// padStart()
//  me Rellena al principio de una cadena con los caracteres deseados
// Lo mismo que el padStart() pero en vez de colocar los caracteres al prinicipio los colocal al final
// el numero dento de los parentesis quiere decir que si no hay la cantidad de caracteres de definimos aqui adentro, lo que hara es rellenar esa cadena de texto con el texto que acabamos de definir hasta que la cadena de texto tenga esa cantidad de caracteres, en este caso se colocaran al principio de la cadena de texto que pusimos por defecto
resultado6 = cadena1.padStart(60, "hola ");
document.write(resultado6 + "<br>");

// padEnd()
// Lo mismo que el padStart() pero en vez de colocar los caracteres al prinicipio los colocal al final
// el numero dento de los parentesis quiere decir que si no hay la cantidad de caracteres de definimos aqui adentro, lo que hara es rellenar esa cadena de texto con el texto que acabamos de definir hasta que la cadena de texto tenga esa cantidad de caracteres, en este caso se colocaran al final de la cadena de texto que pusimos por defecto
resultado7 = cadena1.padEnd(60, "hola ");
document.write(resultado7 + "<br>");


let cadena3 = "123 "
// Repeat()
// lo que hara es repetirnos el valor de esa cadena de texto la cantidad de veces que le digamos, el numero que vemos dentro de los parentesis quiere decir la cantidad de veces que se va a repetir
resultado8 = cadena3.repeat(3)
document.write(resultado8 + "<br>");




// #--- METODOS DE CADENAS MAS PRACTICOS ---#

// split()
// lo que hace este metodo es divirnos una cadena de texto partiendo de como le decimos que debe divir, Ejemplo; si queremos que nuestra cadena se divida cada de haya una coma, solo de debemos decir que se divida asi, una vez divida, esta cadena de texto se convertira en un array
let cadena4 = "Hola como estas?";
resultado9 = cadena4.split("como");
document.write(resultado9 + "<br>");


// substring()
// lo que hace es que nos permita recorrer una cadena de texto desde un punto y hacer que termine en otro punto, Ejemplo; si tenemos la palabra SAMUEL pero yo quiero que solo se vea AMUE, lo que hago es definirle una posicion de inicio y otra final
let cadena5 = "SAMUEL";
// 1 es la posicion de inicio y el 5 es la posicion que queremos que finalice, incluyendose, es decir nos muestra la posicion en la que arranca pero no en la que termina
resultado10 = cadena5.substring(1, 5);
document.write(resultado10 + "<br>");

// ToLowerCase()
// Convierte toda una string en minuscula
resultado11 = cadena5.toLocaleLowerCase();
document.write(resultado11 + "<br>");

// ToUpperCase()
// Nos convierte toda una string en mayuscula
let cadena6 = "samuel";
resultado12 = cadena5.toUpperCase();
document.write(resultado12 + "<br>");


// ToString()
// Nos convierte todos los valores numericos a string
let cadena7 = 1234;
resultado13 = cadena7.toString();
document.write(resultado13 + "<br>");

// trim()
// nos elimina los espacios en blanco al inicio y al final de un string
let cadena8 = "     Hola mi amor      ";
resultado14 = cadena8.trim();
document.write(resultado14.length + " " + resultado14 + "<br>");

// trimStart()
// nos elimina los espacios en blanco al inicio de un string
let cadena9 = "     Hola mi amor      ";
resultado15 = cadena9.trimStart();
document.write(resultado15.length + " " + resultado15 + "<br>");

// trimEnd()
// nos elimina los espacios en blanco al inicio de un string
let cadena10 = "     Hola mi amor      ";
resultado16 = cadena10.trimEnd();
document.write(resultado16.length + " " + resultado16 + "<br>");