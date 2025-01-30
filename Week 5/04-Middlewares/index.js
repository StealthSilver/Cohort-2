// checking the no. of requests

const express = require("express");
const app = express();

let requestcount = 0;

//middleware
function requestIncreaser() {
  requestcount = requestcount + 1;
  console.log(`total no of requests = ${requestcount}`);
}

// better routing and database, middlewares

app.get("/sum", function (req, res) {
  requestIncreaser();
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
