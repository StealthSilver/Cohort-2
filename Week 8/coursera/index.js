const express = require("express");
const app = express();

//signup route
app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

//signin route
app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

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

//getting the purchases course
app.get("/user/puchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

//starting the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
