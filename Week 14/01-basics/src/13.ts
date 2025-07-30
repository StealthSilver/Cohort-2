// interfaces with functions
interface PeopleCore {
    name: string;
    age: number;
    greet: () => string;  // required method
}

// class that implements the interface
class Manager implements PeopleCore {
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
}

// Example usage
const mgr = new Manager("Alice", 35);
console.log(mgr.greet());
