const { Router } = require("express");

const courseRouter = Router();

//purchase some course
courseRouter.post("purchase", function (req, res) {
  res.json({
    message: "purchasing the course",
  });
});

//get all the courses
courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "list of courses",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
