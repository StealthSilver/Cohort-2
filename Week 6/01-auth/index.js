const express = require("express");

const app = express();

// this middleware will let us parse the post body
app.use(express.json());

// creating a in memory variable (database)
const users = [];

app.post("/signup", function (req, res) {});

app.post("/signin", function (req, res) {});

app.listen(3000);
