const { Router } = require("express");

const userRouter = Router();

//signup route
userRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

//signin route
userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

//getting the purchases course
userRouter.get("/puchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

module.exports = {
  userRouter: userRouter,
};
