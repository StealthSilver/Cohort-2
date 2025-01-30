// changing the format of the query parameters
const express = require("express");
const app = express();

app.get("/sum/:firstArg/:secondArg", function (req, res) {
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Both arguments must be numbers." });
  }

  res.json({ answer: a + b });
});

app.get("/dif/:firstArg/:secondArg", function (req, res) {
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Both arguments must be numbers." });
  }

  res.json({ answer: a - b });
});

app.get("/mul/:firstArg/:secondArg", function (req, res) {
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Both arguments must be numbers." });
  }

  res.json({ answer: a * b });
});

app.get("/div/:firstArg/:secondArg", function (req, res) {
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Both arguments must be numbers." });
  }

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed." });
  }

  res.json({ answer: a / b });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
