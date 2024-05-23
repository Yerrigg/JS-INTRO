//El scope es elc ontexto dodne una variable es visible
// existen 2 scopes principales: global y local.

var global = 1;
function hacerGlobal(){
    console.log(global);
}

hacerGlobal();
console.log(global);

//scope local solo funciona dentro de la funcion

function local(){
    var varloca = 1;
    console.log(varloca);
}

local();
//console.log(variableLocal); // acá la variable no funciona porque esta declarada en la funcion de manera local



if (true){
    //scope de bloque 1
} else {
    //scope de bloque 2
}


/*
    En javascript moderno (>2015) existe let
    let define scope de blque
    un bloque es todo lo que se encuentra entre { }
*/


if (condicion){
    let variable = 0;
}

// ya no se puede utilizar para nada la variable fuera - let -> te da mucho control de donde te quieres usar tus variables.

//Se recomienda siempre utilizar let en remplaz de var para tener control de scope.




