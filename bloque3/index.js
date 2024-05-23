const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Que edad tienes? ', (answerAge) => {
//     rl.question('Cual es tu nombre? ', (answerName) =>{
//         if( answerAge >= 18){
//             console.log('Hola ' + answerName + ', eres mayor de edad!');
//         } else {
//             console.log('Hola ' + answerName + ', eres menor de edad!');
//             console.log(`provando variable, ${answerName}`);
//         }       
//     rl.close();
//     });
// });



rl.question('Cuantas iteraciones quiere hacer ', (interations) =>{
    for (let i = 0; i <= interations; i++){
        console.log(i);
    }
    rl.close();
});

