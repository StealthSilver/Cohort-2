const fs = require("fs");

// Synchronous reading
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

// Asynchronous reading with a callback
fs.readFile("b.txt", "utf-8", (err, contents2) => {
  if (err) {
    console.error("Error reading b.txt:", err);
    return;
  }
  console.log(contents2); // This will now work because it's inside the callback
});
