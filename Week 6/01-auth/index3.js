// token-based authentication

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomstringhello";
const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating an in-memory variable (database)
const users = [];

// signing up
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

// signing in and then generating a jwt
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  // signing the username using the jwt_secret to generate the jwt
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
  try {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // checking the user by converting the token back to the username
    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        foundUser = users[i];
      }
    }

    if (foundUser) {
      res.json({
        username: foundUser.username,
        password: foundUser.password,
      });
    } else {
      res.status(401).json({
        message: "Invalid token",
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
