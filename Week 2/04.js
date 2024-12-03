// asynchronous execution

const fs = require("fs");

function print(err, data) {
    console.log(data);
}

fs.readFile("a.txt", "utf-8", print); // asynchronous code
fs.readFile("b.txt", "utf-8", print); // asynchronous code

console.log("done")