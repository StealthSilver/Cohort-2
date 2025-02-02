const { Router } = require("express");

const adminRouter = Router();

// Signup route
adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
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

module.exports = {
  adminRouter: adminRouter,
};
