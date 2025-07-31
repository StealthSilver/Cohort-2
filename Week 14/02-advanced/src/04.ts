// readonly

const a = [1,2,3];
a[0] = 4; // we can change the internal values of a, not the refrence of a 

type User4 = {
    readonly name: string,
    readonly age :number
}

const user: User4 = {
    name: "pop", 
    age: 90
}

// user.age = 32 , this cant be done

// another way to make the complete obj readonly
const user2: Readonly<User4> = {
    name: "pop", 
    age: 90
}
