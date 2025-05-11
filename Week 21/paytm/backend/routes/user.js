const express = require("express");
const router = express.Router();

const zod = require("zod");
const user = require("../db");
const jwt = require("jsonwebtoken");
const { JT_SECRET } = require("../config");

// signin and signup routes

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
      message: "Email already taken / wrong inputs",
    });
  }
});

module.exports = router;
