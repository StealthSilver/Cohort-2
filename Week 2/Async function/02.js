const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous reading
console.log("Sync content: ", contents);

const contents2 = fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading b.txt:", err);
  } else {
    console.log("Async content:", data);
  }
}); // asynchronous reading

// the (err, data) is the callback function as it is called back when the file is read

console.log(contents2);
