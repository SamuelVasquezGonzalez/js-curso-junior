// #---- OBJETO MATH ----# //

// sqrt()
// nos devuleve la raiz cuadrada positiva de un numero
// nos da 5, porque 5 multiplicado por si mismo, da 25
let numero = Math.sqrt(25);

document.write(numero + "<br>");



// cbrt()
// nos devuelve la raiz cubica de un numero
// nos da 3, porque, 3*3 = 9, 9*3= 27
let numero2 = Math.cbrt(27);

document.write(numero2 + "<br>");


// max()
// nos devuelve el numero mas grande de un array de numeros

let numerosArray1 = Math.max(1, 2 ,4, 542, 13, 28);

document.write(numerosArray1 + "<br>");



// min()
// nos devuelve el numero mas pequeño de un array de numeros

let numerosArray2 = Math.min(9, 302, 8, 3, 3, 3, 5, 27);
document.write(numerosArray2 + "<br>");


// random()
// nos devuelve numeros aleatorios entre 0 y 1

// le decimos, muestrame un numero entre el 0 y el 1 y multiplicalo por 100
let numero3 = Math.random()*100

// lo convertimos a string, para poder llamar cada posicion de cada letra, lo hacemos con el objetivo de eliminar los decimales
numero3 = numero3.toString()

// una vez convertido, llamamos a la posicion 0 y la posicion 1
res = numero3[0] + numero3[1]

// en esta condicion, le estamos diciendo que si encuentra un punto en la posicion [1], lo que haga es solo mostrar la posicion [0]
if(numero3[1] == "."){
    res = numero3[0];
}
document.write(res+ "<br>");


// round()
// lo que hara este metodo de matematicas, es redondearnos los numeros decimales y convertilos a numeros enteros, siempre nos redondea el numero, a otro numero mas cercano, Ejm; 9.9 = 10, 9.1= 9

let numero4 = Math.random()*100
numero4 = Math.round(numero4);
document.write(numero4 + "<br>");


// floor()
// nos redondea el numero, por nunca mayor, es decir, si tengo 4.99999, va a devolver 4, si tengo 4.1, va a devolver 4y asi

let numero5 = Math.random()*99;
numero5 = Math.floor(numero5+1);
document.write(numero5 + "<br>");


// trunc()
// hace lo mismo que el round(), a diferencia de que este se redondea en si mismo, es decir, que se redondea a su mismo numero entero sin importar si esta cerca de otro numero, Ej; 9.999999 = 9, 9.1111 = 9, 9.555 = 9 y asi sucesivamente

// para entenderlo mas facil, le estamos diciendo que nos elimine los decimales, sin importar si esta mas cerca o mas lejos de otro numero
let numero6 = Math.random()*99;
numero6 = Math.trunc(numero6+1);
document.write(numero6 + "<br>");
