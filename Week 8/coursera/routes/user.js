const { Router } = require("express");
const { userModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");
const userRouter = Router();

// Define schema for signup validation
const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

// Signup route
userRouter.post("/signup", async function (req, res) {
  // Validate request body using Zod
  const validation = signupSchema.safeParse(req.body);
  if (!validation.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: validation.error.errors });
  }

  const { email, password, firstName, lastName } = validation.data;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({ message: "Signup successful" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

// Signin route
userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  // Find user by email
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "Incorrect credentials" });
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ message: "Incorrect credentials" });
  }

  // Generate JWT token
  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_USER_PASSWORD
  );

  // cookie logic will come here in future
  res.json({ token });
});

// Getting the purchased courses
userRouter.get("/purchases", userMiddleware, async function (req, res) {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId,
  });
  const coursesData = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });
  res.json({ purchases, coursesData });
});

module.exports = {
  userRouter,
};
