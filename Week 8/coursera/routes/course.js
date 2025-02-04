const { Router } = require("express");

const courseRouter = Router();

const { courseModel, purchaseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  // in future should check if hte user has paid
  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "you have successfully bought the course",
  });
});

// Get all the courses
courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});

  res.json({
    message: "list of courses",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
