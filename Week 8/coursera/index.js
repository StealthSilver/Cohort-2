const express = require("express");
const app = express();

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

app.get("/courses", function (req, res) {
  res.json({
    message: "list of courses",
  });
});

app.post("/course/purchase", function (req, res) {
  res.json({
    message: "purchasing the course",
  });
});

app.get("/user/puchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

app.listen(3000);
