// Programacion orientada a objetos, nos sirve para cambiar nuetra logica de programacion hacia como lo hariamos en la vida real, Es como crear una fabrica de objetos, o menor dicho una platilla de algo para crear algo, Ej: Creamos una plantilla para hacer un escaparate paso por paso, pero con la Progamacion orientada a objetos, lo que hacemos es crear la plantilla y apartir de la plantilla que el programa se automatice y haga escaparates solo, O tambien lo podemos definir como UNA FABRICA DE OBJETOS Para tenerlo bien claro.

// Las CLASES lo que hacen es crear OBJETOS, 

// y los OBJETOS son los resultados es estas CLASES, 

// los ATRIBUTOS las propiedades que tiene ese objetos(COLOR DE PIEL, COLOR DE PELO, COLOR DE OJOS, EDAD, ALTURA, PESO, ETC).

// el METODO son las cosas que puede hacer nuestro OBJETO(SALTAT, CORRER, CAMINAR, MIRAR, TOCAR, PENSAR, COMER, DORMIR, ETC). 

// el CONSTRUCTOR es una particularidad que tienen las clases que es una funcion obligatoria, que deben tener las clases, los CONSTRUCTORES, son los que contruyen las propiedades del OBJETO (ES MUY IMPORTANTE ESTO)

// POR ULTIMO YA CUANDO TERMINAMOS PODEMOS DECIR QUE LA CLASE ESTA INSTANCIADA, QUE ESTAMOS INSTANCIANDO UN OBJETO

// VEAMOS UN EJEMPLO



// iniciamos la clase con class y el nombre de la clase
class animal{
    // creamos el constructor que donde van a ir las propiedades del objeto, LLAMEMOSLO PARAMETROS
    constructor(especie, edad, color){
        // estas variables NO son las mismas de los PARAMETROS. LO QUE SE DEFINE DESPUES DEL = SI SON LO MISMO QUE LO QUE ESTA EN LOS PARAMETROS

        // LE ESTAMOS DICIENDO QUE this.especie = especie. Le estamos diciendo que el objeto va a tener una (caracteristica, propiedad o atributo), esa propiedad o atributo van a ser la especie, dicho de otra forma es. this.edad va a ser igual a lo que pongamos en edad
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    // verInformacion = ()=>{
    //     document.write(this.informacion + "<br>");
    // }
}


// CUANDO TRABAJEMOS CON OBJETOS UTILICEMOS "CONST"

// COMO INSTANCIAR UN OBEJETO

// aqui le estamos diciendo que "perro va a ser un objeto de la clase animal"
// LO QUE VA DENTRO DE LOS PARETESIS SON LAS PROPIEDADES QUE LE VAMOS A DEFINIR
// const perro = new animal("chihuahua", 8, "cafe");
// const gato = new animal("gato", 3, "blanco");
// const pajaro = new animal("pajaro", 1, "verde");

// para acceder a la propiedad colocamos un punto en frente de la clase y le ponemos el nombre de la propiedad

// document.write(perro.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");


// perro.verInformacion()
// gato.verInformacion()
// pajaro.verInformacion()

// console.log(perro);
// console.log(gato);
// console.log(pajaro);



// CARACTERISTICAS DE LA PROGRAMACION ORIENTADA A OBJETOS:

// ABSTRACCION:
// Con la abtraccion los que hacemos es reducir a lo mas minimo, hacer que sea lo menos complejo posible, por ejemplo, podemos decir que tenemos un auto con tal y tal y tal cosa, pero con la abstraccion podemos decir que solo tenemos un auto, porque ya nos hacemos la idea de como es un auto sin saber sus caracterisitcas, o tambien decir que todo es mas general

// Modularidad: es la capacidad de resolver algo grande, separandolo por partes, por ejemplo: supongamos que tenemos una tarea y que nos demoramos 100 horas resolviendolo, si separamos esa tarea por partes va a ser mucho mas facil resolverlo por pedazos que todo junto y completo, ejemplo: si tenemos una tarea de 100 horas, la dividimos en 100 pedazos pequeños y vamos resolviendo uno por uno hasta tener la solucion general del problema


// Encapsulamiento: su funcion es hacer que toda la DATA(TODOS LOS DATOS) esten privados, que el usuario no pueda acceder tan facil a la informacion


// Polimorfismo: consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo, por ejemplo: si tengo un Animal y le digo que camine, un perro va a caminar de una forma, un gato va a caminar de otra forma, una vaca a caminar de otra forma. Mejor dicho, es la capacidad de un objeto para comportarse distinto por sus propiedades



// HERENCIA: es una clase que va a tomar todo lo que puede hacer otra clase y sus propiedades y agregarle cosas nuevas. Ejemlo:


// aqui le estamos diciendo que perro va a ser una nueva clase que va a tener todo lo de la clase animal y agregar contenido
class animales extends animal{
    // aqui agregamos las propiedades mas ↓ la propiedad nueva
    constructor(especie, edad, color, raza){
        // las heredadas no hace falta definirlas, solo las nuevas
        super(especie, edad, color)
        // aqui definimos la propiedad nueva
        this.raza = raza;
        this.informacion = this.informacion + ` y soy de la raza: ${this.raza}`;
    }
    verInformacion = ()=>{
        document.write(this.informacion + "<br>");
    }
}

// No puedo tener un objeto que se llama igual que una clase
const perroo = new animales("perro", 6 , "azul", "doberman");
const gato = new animales("gato", 3, "blanco", "rus");
const pajaro = new animales("pajaro", 1, "verde", "canario");

perroo.verInformacion();
gato.verInformacion();
pajaro.verInformacion();


// Metodos Estaticos:

// Un metodo estatico que no necesita que la clase se defina para poder ser creado, lo podemos usar cuando los metodos no uticen las propiedades de la clase

// Ejemplo metodo estatico

class auto {
    constructor(marca, puertas, velocidad){
        this.marca = marca;
        this.puertas = puertas;
        this.velocidad = velocidad;
        this.inf = `tu auto es de la marca ${marca}`
    }
    // aqui pondremos static y el nombre del metodo, porque como vemos a continuacion este metodo no utiliza ninguna propiedad
    static autoCompleto = ()=>{
        alert(this.inf);
    }
}


const carro = new auto("jeep", 4, 120);
// auto.autoCompleto();


// METODO GETTERS: el metodo getters nos sirven para obtener un valor

// METODO SETTERS: el metodo getters nos sirve para modificar o definir ese valor

class auto2 extends auto {
    constructor(marca, puertas, velocidad, colorC){
        super(marca, puertas, velocidad);
        this.colorC = null;
    }
    // metodo setter, modificamos su valor
    set setColor(colorD){
        this.colorC = colorD;
    }

    // metodo Getters, Obtenemos su valor
    get getColor(){
        return this.colorC;
    }
}

const coche = new auto2("renault", 4, 120);

coche.setColor = "Verde";
document.write(coche.colorC);