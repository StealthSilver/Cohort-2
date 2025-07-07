const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo-app");

const app = express();
app.use(express.json());

// Signup route
app.post("/signup", async function (req, res) {
  // Define validation schema
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(30),
  });

  // Validate request body
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataWithSuccess.success) {
    return res.json({
      message: "Incorrect format",
      error: parsedDataWithSuccess.error,
    });
  }

  const { email, password, name } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 5);
    await UserModel.create({ email, password: hashedPassword, name });
    res.json({ message: "You are signed up" });
  } catch (e) {
    return res.json({ message: "User already exists" });
  }
});

// Signin route
app.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const response = await UserModel.findOne({ email });
  if (!response) {
    return res.status(402).json({ message: "User does not exist in the DB" });
  }

  const passwordMatch = bcrypt.compare(password, response.password);
  if (passwordMatch) {
    const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET);
    res.json({ token });
  } else {
    return res.status(403).json({ message: "Incorrect credentials" });
  }
});

// Route to create a new todo item
app.post("/todo", auth, async function (req, res) {
  const { title, done } = req.body;
  await TodoModel.create({ userId: req.userId, title, done });
  res.json({ message: "Todo created" });
});

// Route to fetch all todos for the authenticated user
app.get("/todos", auth, async function (req, res) {
  const todos = await TodoModel.find({ userId: req.userId });
  res.json({ todos });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
