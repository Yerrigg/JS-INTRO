/*
    "La gente peinsa que la informática es el arte de los genios, pero la realidad actual es la opuesta, simplente muchas personas haciendo cosas que se construyen unas sobre otras, como un muro de mini piedras"
*/
// for(let n =0; n<size; n++){
//     tablero = " # # # # \n# # # #";
//     console.log(tablero);
// }
let tablero = "";
let size = 4;

for(let i=0; i<size; i++){
    for(let j=0; j<size; j++){
        if((i+j) % 2 == 0){
            tablero += " ";
        }else{
            tablero += "#";
        }
       
    }
     tablero += "\n";
}
console.log(tablero);


