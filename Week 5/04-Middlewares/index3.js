// terminating the server by middleware

const express = require("express");
const app = express();

let requestcount = 0;

//middleware
function requestIncreaser(req, res, next) {
  requestcount = requestcount + 1;

  console.log(`total no of requests = ${requestcount}`);

  // either call next() , or give some error message
  res.json({
    message: "I ended the request early",
  });

  // next is not called
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
