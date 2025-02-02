const { Router } = require("express");

const adminRouter = Router();

//signup route
adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

//signin route
adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

//create a course
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "create course",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
