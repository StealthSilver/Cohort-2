"use strict";
//object as an argument
function greetUser(user) {
    console.log("Hello " + user.name);
}
greetUser({
    name: "pogo",
    age: 87
});
