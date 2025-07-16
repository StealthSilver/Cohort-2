//object as an argument

function greetUser(user: { name: string; age: number }) {
    console.log("Hello " + user.name + user.age) ;
}

// types will be automatically infered for the object
greetUser({
    name: "pogo",
    age: 87
});
