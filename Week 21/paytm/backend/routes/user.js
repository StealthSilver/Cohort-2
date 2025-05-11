const express = require("express");
const router = express.Router();

const zod = require("zod");
const user = require("../db");
const jwt = require("jsonwebtoken");
const { JT_SECRET } = require("../config");
const JWT_SECRET = require("../config");

// signin

const signupBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return req.status(411).json({
      message: "wrong inputs",
    });
  }

  const existingUser = await user.User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already exists",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.bosy.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });

  // signup
});

module.exports = router;
