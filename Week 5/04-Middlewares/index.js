// checking the no. of requests

const express = require("express");
const app = express();

const PORT = 3000;

let requestcount = 0;

//middleware
function requestIncreaser(req, res, next) {
  requestcount = requestcount + 1;
  console.log(`total no of requests = ${requestcount}`);

  next(); // if the middleware calls next() then only the realSumHandler is called
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
