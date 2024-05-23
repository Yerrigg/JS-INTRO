function createFunction(){
    var name = "Martin";
    function showName(){
        console.log(name);
    }
    return showName;
}

var myFunction = createFunction();
myFunction();








function sumarFun(x){
    //let x = 5;
    return function(y) {
        return x + y;
    }
}

let funSuma = sumarFun(22);
let suma7 = sumarFun(7);
console.log(funSuma(3), suma7(3));
