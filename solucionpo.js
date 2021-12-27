
class celulares {
    constructor(color, peso, resolucionP, camara, ram){
        this.color = color;
        this.pero = peso;
        this.resolucionP = resolucionP;
        this.camara = camara;
        this.ram = ram
        this.info = `este dipositivo tiene un color: ${color}, tiene un peso de ${peso}, tiene una resolucion de ${resolucionP}, tiene una camara de ${camara} y tiene una memoria ram de ${ram}` + "<br>"
        this.estado = false;
    }
    prender = ()=>{
        if(this.estado == false){
            alert("el celular esta encendido");
            this.estado = true;
        }else{
            alert("el celular ya esta encendido");
        }
    }

    apagar = ()=>{
        if(this.estado == true){
            alert("el celular esta apagado");
            this.estado = false;
        }else{
            alert("el celular ya estaba apagado");
        }
    }

    reiniciar = ()=>{
        if(this.estado == false){
            alert("tu dipositivo se esta reiniciando");
            this.estado = true;
        }else{
            alert("espera a que termine de reiniciarce");
        }
    }

    tomarFotos = ()=>{
        alert("Tu dispositivo ha tomado una fotografia");
    }

    grabar = ()=>{
        alert("Tu dispositivo ha grabado un video");
    }
}
const cel1 = new celulares("negro mate", "253g", "720x1080", "43MP", 4 );
const cel2 = new celulares("negro mate", "313g", "648x932", "14MP", 2.5 );
const cel3 = new celulares("blanco", "297g", "724x1024", "32MP", 2 );


class telefonos extends celulares{
    constructor(color, peso, resolucionP, camara, ram, camaraLenta, rCara, camaraExtra){
        super(color, peso, resolucionP, camara, ram);
        this.camaraLenta = camaraLenta;
        this.rCara = rCara;
        this.camaraExtra = camaraExtra
        this.info2 = this.info + `y como extra de estos gama alta tienen: ${camaraLenta} tambien, ${rCara} y ademas tiene ${camaraExtra} extra` + "<br>";
    }
}

const tel1 = new telefonos("azul mate", "250lb", "720x1080", "72MP", 6 , "Viene con camara lenta", "Trae reconocimiento facial", 2);
document.write(tel1.info2 + "<br>");
tel1.prender();
tel1.prender();
const tel2 = new telefonos("verde mate", "230lb", "720x1080", "80MP", 6 , "Viene con camara lenta", "Trae reconocimiento facial", 1);
document.write(tel2.info2 + "<br>");


