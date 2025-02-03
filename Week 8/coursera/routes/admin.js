const { Router } = require("express");

const adminRouter = Router();
const { adminModel } = require("../db");

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

// Signup route
adminRouter.post("/signup", async function (req, res) {
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
    const existingUser = await adminModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
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
adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

// Create a course
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "create course",
  });
});

// change the course
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "create course",
  });
});

// get all the courses

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "create course",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
