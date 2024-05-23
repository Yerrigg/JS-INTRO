//Formas de agrupar lógica
function proceso1(){
    console.log('Realiza a');
    console.log('Realizo B');
}


//Las podemos llamar
proceso1();
//repetidamente
proceso1();









//Les podemos enviar datos
function generateNickname(nombre, apellido){
    console.log(nombre + " " + apellido);
    if(nombre === 'yerri')
        console.log('Te llamas igual que el programador');
    else
        console.log('VAmooooooooss, Yaquiiiiitoooo')
}


generateNickname('yerri', 'chilcon');
generateNickname('yaco', 'sanate');




//Podemos hacer que nos devuelva datos
function calcularPromedio(x,y){
    if(x=== 0)
        return 0;
    else
        return (x+y)/2;
}

let nota1 = 0;
let nota2 = 20;

var promdioEstudiante = calcularPromedio(nota1, nota2);

console.log('El promedio de ' + nota1 + ' y ' + nota2 + ' es ' + promdioEstudiante);




//Las funciones son un tipo de dato, por lo que podemos utilizarlo como variable

var logicaSaludar = function(nombre) {console.log('Hola, mi nombre es ' + nombre)};

//en logicaSaludar tenemos la referencias a la funcion 
//Podemos hacer algo tan loco como pasar una funcion a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    //Ejecuta la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar un a buena velada con usted.');
}

//Si lo ejecutamos todo
saludarSuperEducadamente(logicaSaludar, 'Yerri');

