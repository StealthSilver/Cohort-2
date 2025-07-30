// interfaces with functions

interface People {
    name: string,
    age: number,
    greet: () => string,
    
}

// object out of hte interface
let person : People ={
    name: "pogo",
    age: 21,
    greet: () => {
        return "hi"
    }
}

// class that implements the interface

class Manager implements People {

    name: string;
    age: number;
    constructor(){

    }
}

let greeting = person.greet();
console.log(greeting)