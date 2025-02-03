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
      email: z.string().email(),
      hashedPassword: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
      firstName: z.string().min(2, "First name must be at least 2 characters"),
      lastName: z.string().min(2, "Last name must be at least 2 characters"),
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
