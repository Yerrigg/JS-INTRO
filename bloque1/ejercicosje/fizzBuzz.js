let numbers;
for(numbers=1; numbers <=100; numbers++){
    let out = "";
    if(numbers % 3 == 0){
        out += "fizz";
        // out = out + "fizz";
    }
    if(numbers % 5 == 0){
        out += "Buzz";
    }
        console.log(out || numbers);
}



