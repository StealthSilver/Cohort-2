const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const zod = require("zod");

mongoose.connect("mongodb://localhost:27017/todo-app");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  // input validation

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  //implementing the password hashing
  //Implementing error handling

  let errorThrown = false;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "You are signed up",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.send(402).json({
      message: "user does not exist in the db",
    });
  }

  // comparing the hashed password
  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
