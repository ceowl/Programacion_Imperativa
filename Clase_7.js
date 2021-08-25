let edad = 14;
let altura = 1.20;
console.log(edad > 12 && altura > 1.30);


let luz = false;
let rapido = true;
let flash = luz || rapido;
console.log(flash);


let evaluacion1 = 5;
let evaluacion2 = 7;
let examen_final = 3;
console.log(((evaluacion1 >= 7 && evaluacion2 >= 7) || examen_final >= 4));

let tarea = true;
let piano = true;
let memoria = false;
let television = ((tarea == true) && (piano == true && memoria ==true));
console.log(television);
