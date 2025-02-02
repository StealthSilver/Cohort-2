const { Router } = require("express");

const courseRouter = Router();

// Purchase some course (fixed missing '/')
courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "purchasing the course",
  });
});

// Get all the courses
courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "list of courses",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
