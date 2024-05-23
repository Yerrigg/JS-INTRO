var array = ["aa", "bb", [1,2], {nombre: 'yerri'}];

var objeto = {
    nombre: 'Martin',
    apellido: 'Crisanto',
    edad: 25,
    coche: ['ferrari', 'toyota'],
    direccion: {
        calle: 'texto de la calle',
        numero: 5
    }
}


var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item5 = array[indice];

var nombreObjeto = objeto.nombre;
var textCalle = objeto.direccion.calle;

console.log(textCalle);


var longigud = array.length

var isValidPosition = 50 >= 0 && 50 < array.length
