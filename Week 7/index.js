// backend for the todo application with DB

const express = require("express");
const mongoose = require("mongoose");
// importing the models
const { UserModel, TodoModel } = require("./db");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdasd1234";
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    massage: "You are logged in",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  // signing the jwt with the userID payload
  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
});

// authentication middleware

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
}

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;

  TodoModel.create({
    title,
    userId,
  });

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
