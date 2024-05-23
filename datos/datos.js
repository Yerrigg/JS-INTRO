//Tipo de dato objeto
var objeto = {
    nombre : "Yerri",
    apellido : "Chilcon",
    telefono : "9393993"
}

console.log(typeof objeto);

//Tipo de dato boolean
var bandera = true;
console.log(bandera);
var valorFalso = false;
console.log(valorFalso);


//Tipo de dato array
var array = ["aa", "yy", 3, [1,2]];
console.log(array);


//Tipo de datos null undefined
var valorNulo = null;
var valorUndefined;

console.log(valorNulo === valorUndefined);


//Tpo de dato fncion 
function miFuncion() {
}

console.log(typeof miFuncion);


//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//Tipo clase en una funcion
class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);
