const { Router } = require("express");

const userRouter = Router();

//signup route
userRouter.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

//signin route
userRouter.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

//getting the purchases course
userRouter.get("/user/puchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

module.exports = {
  createUserRoutes: createUserRoutes,
};
