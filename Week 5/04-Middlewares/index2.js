// request object with the middleware

const express = require("express");
const app = express();

let requestcount = 0;

//middleware
function requestIncreaser(req, res, next) {
  requestcount = requestcount + 1;
  req.name = "randomname123";
  console.log(`total no of requests = ${requestcount}`);

  next(); // if the middleware calls next() then only the realSumHandler is called
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  console.log(req.name);

  res.json({
    ans: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(3000);
