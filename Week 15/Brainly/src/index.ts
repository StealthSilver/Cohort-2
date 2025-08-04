import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { UserModel, TagModel, ContentModel, LinkModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());

const PORT = 3000;

// Zod schema for input validation
const signupSchema = z.object({
  username: z.string().min(3).max(20),
  password: z
    .string()
    .min(6)
    .max(20)
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[^A-Za-z0-9]/, "Must include a special character"),
});


app.post("/api/v1/signup", async (req, res) => {
  try {
    const parseResult = signupSchema.safeParse(req.body);

    if (!parseResult.success) {
      return res
        .status(411)
        .json({ message: "Error in inputs", errors: parseResult.error.issues });
    }

    const { username, password } = parseResult.data;

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res
        .status(403)
        .json({ message: "User already exists with this username" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      username,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User signed up" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  try {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(411)
        .json({ message: "Error in inputs", errors: parsed.error.issues });
    }

    const { username, password } = parsed.data;

    const existingUser = await UserModel.findOne({ username });
    if (!existingUser) {
      return res.status(403).json({ message: "Incorrect credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(403).json({ message: "Incorrect credentials" });
    }

    const token = jwt.sign({ id: existingUser._id }, JWT_PASSWORD, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/api/v1/content", userMiddleware, async (req, res) => {
  try {
    const { link, type, title } = req.body;
    if (!link || !type || !title) {
      return res.status(400).json({ message: "link, type, and title are required" });
    }

    // add zod validations for the content
    await ContentModel.create({
      link,
      type,
      title,
      // @ts-ignore
      userId: req.userId,
      tags: [],
    });

    return res.json({
      message: "Content added",
    });
  } catch (err) {
    console.error("Content creation error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/v1/content", async (req, res) => {
  
});


app.post("/api/v1/brain/share", async (req, res) => {
  
});


app.get("/api/v1/brain/:shareLink", async (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
