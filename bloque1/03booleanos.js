var booleanoVerdad = true;
var boolenoMentira = false;

var  a = '10';
var  b = 10;

//operadores > < >= <= == != === !==;

console.log(a===b);

var rangoInicio = 0;
var rangoFinal = 100;

var numeroAComparar = 101;

var mayorQueInicio = numeroAComparar > rangoInicio;
var menorQueFinal = numeroAComparar < rangoFinal;
var dentroRango = mayorQueInicio && menorQueFinal;
console.log(mayorQueInicio,menorQueFinal);

console.log(dentroRango);

//operadores booleanos
// && -> and
// || -> or
// not


var haHechoTrabajo = true;
var notaFinal = 10;
var faltaTecnica = false;
var aproboElCurso = (haHechoTrabajo || notaFinal >=5) && !faltaTecnica;


console.log(aproboElCurso);

//Realizar un programa que, dadas dos lineas en una dimención (dos rangos)
//(a, b); (c,d) comprobar que las lineas se solapan o no se solapan 
var a = 5;
var b = 8;
var c = 10;
var d = 25;

var solape = !(c>b || a>d);


console.log(solape);

