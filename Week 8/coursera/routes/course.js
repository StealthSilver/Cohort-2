const { Router } = require("express");

const courseRouter = Router();

//get all the courses
courseRouter.get("/courses", function (req, res) {
  res.json({
    message: "list of courses",
  });
});

//purchase some course
courseRouter.post("/course/purchase", function (req, res) {
  res.json({
    message: "purchasing the course",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
