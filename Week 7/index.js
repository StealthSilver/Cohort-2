const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
