// interfaces with funcitons

interface People {
    name: string,
    age: number,
    greet: () => string,
    
}

let person : People ={
    name: "pogo",
    age: 21,
    greet: () => {
        return "hi"
    }
}

let greeting = person.greet();
console.log(greeting)