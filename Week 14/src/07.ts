//object as an argument

function greetUser(user: { name: string; age: number }) {
    console.log("Hello " + user.name + user.age) ;
}


greetUser({
    name: "pogo",
    age: 87
});
