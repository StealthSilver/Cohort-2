import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { z } from "zod";
import bcrypt from "bcrypt";
import { UserModel , TagModel, ContentModel, LinkModel } from "./db";

const app = express();
app.use(express.json());

const PORT = 3000;
const JWT_PASSWORD = "!23234"


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
      return res.status(411).json({ message: "Error in inputs", errors: parseResult.error.issues });
    }

    const { username, password } = parseResult.data;

    
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(403).json({ message: "User already exists with this username" });
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user
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



app.post("/api/vi/signin" ,async  (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
      username, password
    })

    if(existingUser){
      const token = jwt.sign({
        id:existingUser._id
      }, JWT_PASSWORD)

      res.json({
        token
      })
    }
})

app.get("/api/vi/content" , (req,res) => {
    
})


app.post("/api/vi/content" , (req,res) => {
    
})

app.delete("/api/vi/content" , (req,res) => {
    
})

app.post("/api/vi/brain/share" , (req,res) => {
    
})

app.get("/api/vi/brain/:shareLink" , (req,res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });