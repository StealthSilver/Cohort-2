const { Router } = require("express");
const { adminModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const { courseModel } = require("../db"); // Make sure you have courseModel imported

const adminRouter = Router();

// Validation schema
const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

// Signup route
adminRouter.post("/signup", async function (req, res) {
  const validation = signupSchema.safeParse(req.body);
  if (!validation.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: validation.error.errors });
  }

  const { email, password, firstName, lastName } = validation.data;

  try {
    const existingUser = await adminModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await adminModel.create({
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
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await adminModel.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "Incorrect credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ message: "Incorrect credentials" });
  }

  if (!JWT_ADMIN_PASSWORD) {
    return res
      .status(500)
      .json({ message: "Server error: Missing JWT secret" });
  }

  const token = jwt.sign(
    { id: user._id },
    JWT_ADMIN_PASSWORD // This was previously undefined
  );

  res.json({ token });
});

// Create a course
adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userID;
  const { title, description, imageUrl, price } = req.body;

  try {
    const course = await courseModel.create({
      title,
      description,
      imageUrl,
      price,
      creatorId: adminId,
    });

    res.json({
      message: "Course created",
      courseId: course._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
});

// Update a course
adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userID;
  const { title, description, imageUrl, price, courseId } = req.body;

  try {
    const course = await courseModel.findOneAndUpdate(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title,
        description,
        imageUrl,
        price,
      },
      { new: true } // Returns the updated document
    );

    if (!course) {
      return res
        .status(404)
        .json({ message: "Course not found or unauthorized" });
    }

    res.json({
      message: "Course updated",
      courseId: course._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
});

// Get all courses created by the admin
adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
  const adminId = req.userID;

  try {
    const courses = await courseModel.find({ creatorId: adminId });

    res.json({
      message: "These are the courses",
      courses, // Returns full list of courses instead of just one ID
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
});

module.exports = { adminRouter };
