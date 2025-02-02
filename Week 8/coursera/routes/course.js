//get all the courses
app.get("/courses", function (req, res) {
  res.json({
    message: "list of courses",
  });
});

//purchase some course
app.post("/course/purchase", function (req, res) {
  res.json({
    message: "purchasing the course",
  });
});
