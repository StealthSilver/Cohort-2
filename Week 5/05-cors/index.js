const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Allow CORS requests
app.use(express.json()); // Parse JSON body

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Both inputs must be numbers" });
  }

  res.json({
    answer: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
