// interfaces with functions, creating objects from classes
interface PeopleCore {
    name: string;
    age: number;
    greet: () => string; 
    isLegal5() : boolean;
}

// class that implements the interface
class Manager2 implements PeopleCore {
    name: string;
    age: number;

    // constructor to initialize the object
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Implementing the greet method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    isLegal5(): boolean {
        return this.age>18;
    }
}


const mgr = new Manager2("Alice", 35);
console.log(mgr.greet());
