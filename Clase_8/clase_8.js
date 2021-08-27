// Crear una función puedeSubir() que reciba dos parámetros: 
//altura de la persona y si viene acompañada. Debe retornar 
//un valor bool// Crear una función puedeSubir() que reciba dos parámetros: 
//altura de la persona y si viene acompañada. Debe retornar 
//un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no,
// basado en las siguientes condiciones:
//Debe medir más o igual de 1,40m y menos de 2 metros.
//Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
//Si mide menos de 1,20m, no podrá subir ni acompañado. 

/*function puedeSubir(altura, acompaniado) {
    if (altura >= 140 && altura<200){ // siempre volver a llamar a la variable o parametro
        return true;
    } else if ((altura >= 120 && altura < 140) && acompaniado === true) {
        return true;
    } else {
        return false;
    }
}*/


//Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
//Importante: no se deberá mostrar ningún otro mensaje.
//Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
//Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

let edad = -1;

if(edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}else if(edad===21){
    console.log("Bienvenido. Muchas felicitaciones por llegar a la mayoría de edad");
}else if(edad%2==1){
    console.log("¿Sabías que tu edad es impar?");
}

/*Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y  litrosConsumidos. 
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
If: Si el vehículo es “coche”, el precio por litro es de $86.
    iF: Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
    ELSE: Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

Si es “moto”, ha de ser $70.
Si es “autobús”, ha de ser $55.
Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/

function totalAPagar(vehiculo, litrosConsumidos){
    let costoLitro;
    let adicional;
    if(vehiculo == "coche"){
        costoLitro = 86;
    }else if(vehiculo == "moto"){
        costoLitro = 70;
    }else if(vehiculo == "autobus"){
        costoLitro = 55;
    }

    if(litrosConsumidos>0 && litrosConsumidos<=25){
        adicional = 50;
    }else if(litrosConsumidos>25){
        adicional = 25;
    }

    return (costoLitro*litrosConsumidos)+adicional;
}

console.log(totalAPagar("autobus", 30));




function sandwich(valorBase, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precioBase;
    let precioPan;
    let precioAdicional;
    switch(valorBase){
        case "pollo":
            precioBase = 150;
            break;
        case "carne":
            precioBase = 200;
            break;
        case "veggie":
            precioBase = 100;
            break;
    }

    switch(pan){
        case "blanco":
            precioPan = 50;
            break;
        case "negro":
            precioPan = 60;
            break;
        case "s/gluten":
            precioPan = 75;
            break;
    }

    if(queso){
        precioAdicional = 20;
    }else if(tomato)
}


