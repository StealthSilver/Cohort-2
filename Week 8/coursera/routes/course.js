const { Router } = require("express");

const courseRouter = Router();

const { courseModel, purchaseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel } = require("../db");

// Purchase some course (fixed missing '/')
courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "you have successfully bought the course",
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
