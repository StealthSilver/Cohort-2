// using express.json
// we can also use body parses instead of json

const express = require("express");

const app = express();

// Add this middleware to parse JSON request bodies
app.use(express.json());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
