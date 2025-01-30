const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file-based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "File to count words from")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
        return;
      }

      const words = data.trim().split(/\s+/).length;
      console.log(`There are ${words} words in ${file}`);
    });
  });

program.parse(process.argv);
