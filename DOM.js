// --- METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS --- //

// setAttribute()
// Modifica el valor de un atributo

const input = document.querySelector(".input-normal");


// getAttribute()
// Obtiene el valor de un atributo

// document.write(edad.getAttribute("type"));


// removeAttribute()
// Remueve el valor de un atributo
// document.write(edad.removeAttribute("type"));



// --------------------------- ATRIBUTOS DE INPUTS ------------------------------- //

// className
// nos devuelve el valor de un "class" de html

document.write("<br>" + input.className);    


// value
// nos devuelve el valor, que tiene un "value" de html, o mejor dicho, nos devolvera el valor de lo que este copiado en el input

document.write("<br>" + input.value);    


// type
// para ver el valor que tiene el atributo "type"
document.write("<br>" + input.type);    


// accept
// nos permite definir las extenciones de archivos que solo queremos permitir en nuestro sitio, Ej; que solo acepte imagenes png


// minLength
// nos permite establecer un limite minimo en un input para que pueda enviar un formulario

input.minLength = 3;

// placeholder
// nos permite establecer un texto informativo dentro de un input
input.placeholder = "que paso mi amor";

// required
// hace que todos los input obligatoriamente tengan algo escrito, o no nos dejara enviar el formulario
input.required = "true";


// ------------------------- CLASES, ClassList y Metodos de ClassList ------------------------ //


// classList
// Nos permite habilitar otros metodos

// add()
// nos permite agregar clases a un elemento

input.classList.add("siu");

// remove()
// nos permite remover una clase
input.classList.remove("bueno");


// item()
// nos devuelve el valor especificado de una clase, es decir, si nuestra clase tiene mas de 1 valor

// el parametro, es la posicion en la clase donde esta ubicado ese valor
let valor = input.classList.item(0);
document.write("<br>" + valor);


// contains()
// nos verifica si existe algun valor en la clase, en caso de que exista, nos devuelve, "true", en caso de que no haya ningun valir, nos devuelve, "false"
let valor2 = input.classList.contains("siu");
document.write("<br>" + valor2);



// replace()
// remplaza una clase por otra

input.classList.replace("siu","bueno")


// toggle()
// si el elemento no tiene la clase especificada, la agrefa, en caso de tener la clase, la elimina
// sin importat si tiene la clase y no queremos que la elimine, le especificamos un 2do parametro, un booleano, "true" si queremos que la clase te mantenga sin importar si ya esta, y "false" para que sin importar si no la tiene, nunca la agregue
input.classList.toggle("clase-toggle", true);



// ------------------- OBTENCION Y MODIFICACION DE ELEMENTOS ------------------------- //

// textContent
// nos duevuelve el texto que tienen un elemento
let titulo = document.querySelector(".titulo");
// solo devuelve texto, NUNCA DEVUELVE HTML, es decir, si tenemos un texto "hola <b>mundo</b>" con etiquetas html dentro de este texto, no las reconocera, solo reconocera el texto, no el html
let resultado = titulo.textContent;
document.write("<br>" + resultado);
// alert(resultado);

// innerText
// devulve el contenido html de de un elemento
// sin importar si el texto esta oculto con estilos, su funcion es mostrar si o si el texto
let resultado2 = titulo.innerText;
document.write("<br>" + resultado2);
// alert(resultado2);

// outerHTML
// nos devuelve el contenido HTML incluyendo las etiqueras con sus atributos y su contenido
let resultado3 = titulo.outerHTML;
document.write("<br>" + resultado3);
// alert(resultado3);



// --------------------- CREACIOS DE ELEMENTOS ------------------ //

const ae = document.querySelector(".vicio");

// createElements()
// crea elementos HTML
const item = document.createElement("LI");

// createTextNode()
// crea nodos de texto, para un elemento html
const nodo = document.createTextNode("qihubo mi loco");

// appendChild
// hace algo con los hijos de otro elemento
// aqui le decimos que item(padre), me insertes algo, nodo(el texto) y asi insertamos el texto dentro del elemento
item.appendChild(nodo);

// metemos todo al contenedor
ae.appendChild(item);
console.log(ae);


// createDocumentFragment()
// esto nos sirve para que cuando necesitemos crear muchos elementos, el consumo de recursos, sea mas optimo
const buñuelo = document.querySelector(".buñuelo");
const fragmeto = document.createDocumentFragment();
for(i = 0; i < 8; i++ ){
    const item2 = document.createElement("LI");
    item2.innerHTML = "qihubo mi loco 2";
    fragmeto.appendChild(item2);
}

buñuelo.appendChild(fragmeto);
document.write(buñuelo);


// ------------- OBTENCIO Y MODIFICACION DE CHILDS ------------------- //

const popo = document.querySelector(".popo");

// firstChild
// nos tomar el primer hijo de un contenedor
// recordemos que en el html, si se deja espacio, javascript lo reconocera como texto, es decir, si hacemos un llamado a los hijos, con estos metodos, podriamos tener problemas y la una manera se solucionarlo, seria que modifiquemos el html, si lo modificamos, podriamos dañar la estructura y tener mas problemas

// toma el primer hijo de un contenedor
const primerHijoPrueba = popo.firstChild;
// toma el ultimo hijo de un contenedor
const ultimoHijoPrueba = popo.lastChild;




// firstElementChild
// nos permite llamar explicitamente al primer ELEMENTO HIJO HTML de un contenedor, este es el recomendable para evitar el problema anterior

// nos llama explicitamente al primer ELEMENTO HTML (HIJO)
const primerHijo = popo.firstElementChild;
// nos llama explicitamente al ULTIMO ELEMENTO HTML (HIJO)
const ultimoHijo = popo.lastElementChild;
console.log(primerHijo)
console.log(ultimoHijo)


// childNodes
// nos llama a todos los elementos hijos, y nos devuleve un NodeList
const hijosPrueba = popo.childNodes;
console.log(hijosPrueba);

// children
// nos devulve EXPLICITAMENTE LOS ELEMENTOS HTML HIJOS, 
const hijos = popo.children;
console.log(hijos);

// podemos recorrer esta coleccion con un for of
for (hijo of hijos){
    console.log(hijo);
}



// replaceChild()
// nos permite remplazar unos hijos, por otros hijos

// creamos el elemento y le colamos contenido
const elementOne = document.createElement("H1");
elementOne.innerHTML = "Ahora es un h1";

// creamos el elemento y le colamos contenido
const elementTwo = document.createElement("H4");
elementTwo.innerHTML = "AHORA ES UN H2";

// llamamos a los elementos que queremos remplazar
const hAntiguo = document.querySelector(".h2")
const h4Antiguo = document.querySelector(".h4")

// le decimos que, el primer parametro sera el elemento que remplaza, y el segundo paramentro, sera el elemento remplazado
popo.replaceChild(elementOne, hAntiguo);
popo.replaceChild(elementTwo, h4Antiguo);


// removeChild()
// elimina los hijos que le decimos
const p = document.querySelector(".p");
popo.removeChild(p);


// hasChildNodes()
// verifica si un contenedor tiene hijos

const prueba = document.querySelector(".prueba");
let respuesta = prueba.hasChildNodes();

if (respuesta) {
    alert("el elemento TIENE hijos");

}else{
    alert("el elemento NOO tiene hijos");
}


// parentElement
// Busca y selecciona SIEMPRE UNA ETIQUETA PADRE HTML
console.log(prueba.parentElement);


// ------------------ SIBLINGS(HERMANOS) -------------------- //

// nextSibling
// busca y selecciona el nodo o elemento que le sigue, aqui nos encontramos con el misma problema de los espacios en HTML
console.log(prueba.nextSibling);

// previousSibling
// busca y selecciona el nodo o elemento que esta antes, aqui de nuevo volvemos a encontrar el problema de los espacios
console.log(prueba.previousSibling);


// nextElementSibling
// busca y selecciona ESPECIFICAMENTE el elemento HTML que le sigue
console.log(elementOne.nextElementSibling);

// previousElementSibling
// busca y selecciona ESPECIFICAMENTE el elemento HTML que esta antes de el
console.log(prueba.previousElementSibling);
