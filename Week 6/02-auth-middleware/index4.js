const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "random123123";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

// localhost:3000
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });

  // we should check if a user with this username already exists

  res.json({
    message: "You are signed in",
  });
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (!foundUser) {
    res.json({
      message: "Credentials incorrect",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );
    res.header("jwt", token);

    res.json({
      token: token,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.jwt; // Fixed to read the correct header
  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    } else {
      res.json({
        message: "You are not logged in",
      });
    }
  } catch (err) {
    res.json({
      message: "Invalid or expired token",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  const currentUser = req.username;
  let foundUser = null; // Declared foundUser

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === currentUser) {
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
      message: "User not found",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
