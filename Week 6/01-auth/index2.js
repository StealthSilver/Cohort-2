// creating a token and asking for user's data

const express = require("express");

const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating a in memory variable (database)
const users = [];

// generating token using a random string

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token = token + options[Math.floor(Math.random() * options.length)];
  }

  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  //   const user = users.find(function (u) {
  //     if (u.username == username) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.json({
      message: token,
    });
  }
});

// sending the token to the server in the header
app.get("/me", function (req, res) {
  const token = req.headers.token;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});

app.listen(3000);
