const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
  //awaiting for the server to connect to the DB
  await mongoose.connect("mongodb://localhost:27017/coursera");

  // Starting the server
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
