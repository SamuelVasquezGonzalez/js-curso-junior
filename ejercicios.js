// Tres chichos de 23 años perfectamente normales entran a una heladeria a comprar un helado, pero hay un problema, los precios no estan al lado de cada estante con su respectivo helado, ellos quieren comprar el helado mas caro que puedan comprar con el a dinero que tienen haci que veamos como podemos ayudarlos. Cada uno tiene distintas cantidades de dinero y hay una tabla en la que podemos basarnos para saber el costro de cada helado

// crear soluciones:

// PROBLEMA (A);
// -Ingresar el monto y mostrar el mas caro 
// -Si hay 2 o mas mostrar ambos
// -Indicar el vuelto


// Niños con su dinero
// Roberto: 1.5$
// Pedro: 1.7$
// Cofla: 3$

// Helados:

// Helado de agua: 0.6$ 
// Helado de crema: 1$
// Bombon de helado marca heladix: 1.6$
// Bombon de helado marca heladovich: 1.7$
// Bombon de helado marca helardo: 1.8$
// Vaso de helado con confites: 2.9$
// Vaso de 1/4 KG: 2.9$

// Cofla no compra nada y decide darle el dinero a un habitante de la calle que a su vez se comprar un boleto de loteria

// PROBLEMA(B);

// -Si le alcanza 1 lo compra
// -Si le alcanza para 2, compra los 2
// -Si le alcanza para 3, los compra y regala la devuelta
// -Debe mostrar que compro y el dinero devuelto


// PROBLEMA(C);

// Con un detector de mentiras sin fallas. esta asociado con JavaScript, si la persona miente duelve el valor(1), si dice la verdad duelve el valor(2) y si la maquina esta indeciza devuelve el valor(3).

// (1) Si miente
// (2) si dice la verdad
// (3) si esta indeciza

// PROBLEMA (D);

// En el barrio hubo un asesinato y hay 3 sospechosos, cofla era uno de los 3 sospechosos(estaba acusado de destruir un local un dia antes), la policia utilizo el detector de mentiras

// Si miente, le da una descarga electrica
// Si dice la verdad, no hacer nada
// Si la detectora de mentiras esta indeciza, aclarar que la pregunta debe ser mas clara


let dineroCofla = parseInt(prompt("Cofla, cuanto dinero tienes?"));
let dineroRoberto = parseInt(prompt("Roberto, cuanto dinero tienes?"));
let dineroPedro = parseInt(prompt("Pedro, cuanto dinero tienes?"));






if(dineroCofla >= 0.6 && dineroCofla <= 0.9){
    document.write("Cofla, te alcanza para el helado de agua" + "<br>");
    document.write("Te sobra" + (dineroCofla - 0.6) + "<br>");
    
}else if(dineroCofla >=1 && dineroCofla <= 1.5){
    document.write("Cofla, te alcanza para el helado de crema" + "<br>");
    document.write("Te sobra" + (dineroCofla - 1) + "<br>");
    
}else if(dineroCofla >=1.6 && dineroCofla < 1.7){
    document.write("Cofla, te alcanza para el Bombon de helado marca heladix" + "<br>");
    document.write("Te sobra" + (dineroCofla - 1.6) + "<br>");

}else if(dineroCofla >=1.7 && dineroCofla < 1.8){
    document.write("Cofla, te alcanza para el Bombon de helado marca heladovich" + "<br>");
    document.write("Te sobra" + (dineroCofla - 1.7) + "<br>");
    
    
}else if(dineroCofla >=1.8 && dineroCofla <=2.8){
    document.write("Cofla, te alcanza para el Bombon de helado marca helardo" + "<br>");
    document.write("Te sobra" + (dineroCofla - 1.8) + "<br>");
    
}else if(dineroCofla >=2.9){
    document.write("Cofla, Te alcanza para el Vaso de helado con confites o el Vaso de 1/4 KG" + "<br>");
    document.write("Te sobra" + (dineroCofla - 2.9) + "<br>");

}else{
    document.write("Cofla, No te alcanza" + "<br>");
}




if(dineroRoberto >= 0.6 && dineroRoberto <= 0.9){
    document.write("Roberto, te alcanza para el helado de agua, tu vuelto seria" +  + "<br>");
    document.write("Te sobra" + (dineroRoberto - 0.6) + "<br>");

}else if(dineroRoberto >=1 && dineroRoberto <= 1.5){
    document.write("Roberto, te alcanza para el helado de crema" + "<br>");
    document.write("Te sobra" + (dineroRoberto - 1) + "<br>");

}else if(dineroRoberto >=1.6 && dineroRoberto < 1.7){
    document.write("Roberto, te alcanza para el Bombon de helado marca heladix" + "<br>");
    document.write("Te sobra" + (dineroRoberto - 1.6) + "<br>");

}else if(dineroRoberto >=1.7 && dineroRoberto < 1.8){
    document.write("Roberto, te alcanza para el Bombon de helado marca heladovich" + "<br>");
    document.write("Te sobra" + (dineroRoberto - 1.7) + "<br>");

}else if(dineroRoberto >=1.8 && dineroRoberto <=2.8){
    document.write("Roberto, te alcanza para el Bombon de helado marca helardo" + "<br>");
    document.write("Te sobra" + (dineroRoberto - 1.8) + "<br>");

}else if(dineroRoberto >=2.9){
    document.write("Roberto, Te alcanza para el Vaso de helado con confites o el Vaso de 1/4 KG" + "<br>");
    document.write("Te sobra" + (dineroRoberto - 2.9) + "<br>");

}else{
    document.write("Roberto, No te alcanza" + "<br>");
}



if(dineroPedro >= 0.6 && dineroPedro <= 0.9){
    document.write("Pedro, te alcanza para el helado de agua, tu vuelto seria" +  + "<br>");
    document.write("Te sobra" + (dineroPedro - 0.6) + "<br>");

}else if(dineroPedro >=1 && dineroPedro <= 1.5){
    document.write("Pedro, te alcanza para el helado de crema" + "<br>");
    document.write("Te sobra" + (dineroPedro - 1) + "<br>");

}else if(dineroPedro >=1.6 && dineroPedro < 1.7){
    document.write("Pedro, te alcanza para el Bombon de helado marca heladix" + "<br>");
    document.write("Te sobra" + (dineroPedro - 1.6) + "<br>");

}else if(dineroPedro >=1.7 && dineroPedro < 1.8){
    document.write("Pedro, te alcanza para el Bombon de helado marca heladovich" + "<br>");
    document.write("Te sobra" + (dineroPedro - 1.7) + "<br>");

}else if(dineroPedro >=1.8 && dineroPedro <=2.8){
    document.write("Pedro, te alcanza para el Bombon de helado marca helardo" + "<br>");
    document.write("Te sobra" + (dineroPedro - 1.8) + "<br>");

}else if(dineroPedro >=2.9){
    document.write("Pedro, Te alcanza para el Vaso de helado con confites o el Vaso de 1/4 KG" + "<br>");
    document.write("Te sobra" + (dineroPedro - 2.9) + "<br>");

}else{
    document.write("Pedro, No te alcanza" + "<br>");
}