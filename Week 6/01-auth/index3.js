// creating a JWT

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomstringhello";
const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating a in memory variable (database)
const users = [];

// generating token using a random string

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

  // signing the token
  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  }
});

// sending the token to the server in the header
app.get("/me", function (req, res) {
  const token = req.headers.token; //jwt
  const decodedInformation = jwt.verify(token, JWT_SECRET); // converting the JWT
  const username = decodedInformation.username;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == token) {
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
