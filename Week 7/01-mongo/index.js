const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo");

const app = express();
app.use(express.json());

// Signup Route
app.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await UserModel.create({ email, password, name });
    res.json({ message: "You are signed up" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Server error." });
  }
});

// Signin Route
app.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ message: "Incorrect credentials" });
  }
});

// Create Todo Route
app.post("/todo", auth, async function (req, res) {
  const { title, done } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required." });
  }

  await TodoModel.create({
    userId: req.userId,
    title,
    done: done || false,
  });

  res.json({ message: "Todo created" });
});

// Get Todos Route
app.get("/todos", auth, async function (req, res) {
  const todos = await TodoModel.find({ userId: req.userId });
  res.json({ todos });
});

app.listen(3000, () => console.log("Server running on port 3000"));
