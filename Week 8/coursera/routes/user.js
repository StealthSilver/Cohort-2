const { Router } = require("express");

const userRouter = Router();
const { userModel } = require("../db");
const bcrypt = require("bcrypt");

// Signup route
userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  // use zod for input validation
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({ message: "Signup successful" });
  } catch (e) {
    return res.status(400).json({ message: "User already exists" });
  }
});

// Signin route
userRouter.post("/signin", function (req, res) {
  res.json({ message: "signin endpoint" });
});

// Getting the purchased courses (fixed typo in '/purchases')
userRouter.get("/purchases", function (req, res) {
  res.json({ message: "purchased courses" });
});

module.exports = {
  userRouter: userRouter,
};
