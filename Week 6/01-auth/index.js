const express = require("express");

const app = express();

app.use(express.json());

app.post("/signup", function (req, res) {});

app.post("/signin", function (req, res) {});

app.listen(3000);
