//object as an argument

function greetUser(user: { name: string; age: number }) {
    console.log("Hello " + user.name);
}


greetUser({
    name: "pogo",
    age: 87
});
