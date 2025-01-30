// using cors

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // Ensure JSON parsing is enabled
app.use(cors()); // Enable CORS

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
