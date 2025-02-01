// token-based authentication using a middleware

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomstringhello";
const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating an in-memory variable (database)
const users = [];

// logger moddleware

function logger(req, res, next) {
  console.log(req.method + " request came ");
}

// generating token using a random string
app.post("/signup", logger, function (req, res) {
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

app.post("/signin", logger, function (req, res) {
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

// auth as a middleware

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Assuming "Bearer <token>"

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = decoded; // Attach user data to the request
    next();
  });
}

// auth middleware has to pass data

app.get("/me", logger, auth, function (req, res) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === req.username) {
      foundUser = users[i];
    }
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
