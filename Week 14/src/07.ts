function greetUser(user: { name: string; age: number }) {
    console.log("Hello " + user.name);
}

// Call the function with the correct name
greetUser({
    name: "pogo",
    age: 87
});
