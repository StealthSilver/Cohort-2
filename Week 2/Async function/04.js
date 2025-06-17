// asynchronous execution of fs.readfile

const fs = require("fs");

// the print is the callback function
function print(err, data) {
  if (err) {
    console.log("file not found");
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", print); // asynchronous code
fs.readFile("b.txt", "utf-8", print); // asynchronous code

console.log("done");
