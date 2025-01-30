// checking the no. of requests

const express = require("express");
const app = express();

let requestcount = 0;

//middleware
function requestIncreaser() {
  requestcount = requestcount + 1;
  console.log(`total no of requests = ${requestcount}`);
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(3000);
