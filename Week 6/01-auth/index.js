const express = require("express");

const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating a in memory variable (database)
const users = [];

// generating token using a random string

function generateToken() {
  return Math.random();
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed in",
  });
});

app.post("/signin", function (req, res) {});

app.listen(3000);
