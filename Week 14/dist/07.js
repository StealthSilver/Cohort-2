"use strict";
function greetUser(user) {
    console.log("Hello " + user.name);
}
// Call the function with the correct name
greetUser({
    name: "pogo",
    age: 87
});
