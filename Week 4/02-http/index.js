const express = require("express");

const app = express();

// request handlers
app.get("/", function (req, res) {
  res.send("hello world");
});

// listning on the port
app.listen(3000);
