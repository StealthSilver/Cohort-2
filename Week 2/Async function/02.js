const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous reading
console.log(contents);

const contents2 = fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading b.txt:", err);
  } else {
    console.log("Async content:", data);
  }
}); // asynchronous reading

console.log(contents2);
