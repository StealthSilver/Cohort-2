const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous reading
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8"); // asynchronous reading
console.log(contents2);
