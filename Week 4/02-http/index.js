const express = require("express");

const app = express();

// route handlers
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/asd", function (req, res) {
  res.send("hello customer");
});

app.post("/bd", function (req, res) {
  res.send("hello customer");
});

// listning on the port
app.listen(3000);
