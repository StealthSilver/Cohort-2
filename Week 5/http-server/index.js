const express = require("express");
const app = express();

app.get("/sum", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a + b,
  });
});

app.get("/dif", function (req, res) {});

app.get("/mul", function (req, res) {});

app.get("/div", function (req, res) {});

app.listen(3000);
