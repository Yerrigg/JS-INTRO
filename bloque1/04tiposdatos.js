//Que son los tipos de datos

//Los tipos de datos en JavaScript
var numero = 2.4;
var string = 'Soy un texto';
var booleno = true;
var array = ["aa", "bb", 3, [1,2]];
var objeto ={
    nombre: 'Yerri',
    apellido: 'Chilcon'
}

/*var función = function(){
    //Hablares de las funciones más adelante
    //null and undefined

    //los tipos son dinamicos

    //typeof
}*/

// const cuadradro = function(x){
//     return x*x;
// }

// console.log(cuadradro(12));

// const sonido = function(){
//     console.log("pummmm!");
// };
// sonido();

// const roundTo = function(n, step){
//     let resto = n % step;
//     return n - resto + (resto < step / 2 ? 0 : step);
// };

// console.log(roundTo(23,10));

const halve = function(n) {
    return n / 2;
}

let n = 10;
console.log(halve(100));

console.log(n);
