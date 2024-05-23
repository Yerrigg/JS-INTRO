//Bluce while
// while (condicion) {

// };

// do{

// }while(condicion);



//Buqle for
for(var i=0; i<40; i++){
    // console.log(i);
}

var array = [10,15,20];
var estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 8
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]

for (var i = 0; i<estudiantes.length; i++){
    console.log(estudiantes[i].nombre, estudiantes[i].nota);
}
//Iteraciones sobre vectores y objetos

//for - of -> para vectores
for(let estudiante of estudiantes){
    console.log(estudiante.nombre, estudiante.nota);
}


var persona = {
    nombre: 'yerri',
    codigo: 23
}
//for - in para objetos
for (var key in persona){
    console.log(key, persona[key]);
}

var nivel = 5;
char = " "
for(var i = 0; i<=nivel; i++){
    char += "*";
    console.log(char);
    
}

for(char = "#"; char.length<8; char+="#"){
    console.log(char);
}


let height = 5;  // Altura del árbol

for (let i = 1; i <= height; i++) {
    let spaces = '';  // Variable para los espacios en blanco
    let stars = '';   // Variable para los asteriscos

    // Generar los espacios en blanco
    for (let j = 0; j < height - i; j++) {
        spaces += ' ';
    }

    // Generar los asteriscos
    for (let k = 0; k < 2 * i - 1; k++) {
        stars += '*';
    }

    // Imprimir la fila del árbol
    console.log(spaces + stars);
}


let pisos = 3;

for (let i = 1; i <= pisos; i++){
    let espacio = '';
    let estrella = '';
    for(let j = 0; j < pisos - i; j++){
        espacio += ' ';
    }
    for(let a = 0; a < 2 * i - 1; a++){
        estrella += '*';
    }
    console.log(espacio + estrella);
}




