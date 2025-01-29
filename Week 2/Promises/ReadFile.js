// read file with async-await

const fs = require("fs/promises"); // Import fs module with promises

async function readFileAsync() {
  try {
    console.log("Reading file...");

    let data = await fs.readFile("notes.txt", "utf-8"); // Wait for file to be read
    console.log("File content:", data);
  } catch (error) {
    console.log("Error reading file:", error);
  }
}

readFileAsync();
