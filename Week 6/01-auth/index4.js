// token-based authentication

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomstringhello";
const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating an in-memory variable (database)
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
  } else {
    res.status(401).json({
      message: "Invalid username or password",
    });
  }
});

// sending the token to the server in the header
app.get("/me", function (req, res) {
  const token = req.headers.token; //jwt
  const decodedData = jwt.verify(token, JWT_SECRET); // converting the JWT

  if (decodedData.username) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        foundUser = users[i];
      }
    }

    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
