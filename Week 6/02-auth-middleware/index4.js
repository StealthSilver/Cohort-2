// auth middleware with frontend
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

// Serve the frontend
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Signup route
app.post("/signup", logger, function (req, res) {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.json({ message: "You are signed up" });
});

// Signin route
app.post("/signin", logger, function (req, res) {
  const { username, password } = req.body;
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!foundUser) {
    return res.json({ message: "Credentials incorrect" });
  }

  const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
  res.json({ token });
});

// Auth middleware
function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ message: "Authorization header missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (err) {
    res.json({ message: "Invalid or expired token" });
  }
}

// Get user info
app.get("/me", logger, auth, function (req, res) {
  const foundUser = users.find((user) => user.username === req.username);
  if (foundUser) {
    res.json({ username: foundUser.username, password: foundUser.password });
  } else {
    res.json({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
