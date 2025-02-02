const { Router } = require("express");

const userRouter = Router();

// Signup route
userRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

// Signin route
userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

// Getting the purchased courses (fixed typo in '/purchases')
userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

module.exports = {
  userRouter: userRouter,
};
