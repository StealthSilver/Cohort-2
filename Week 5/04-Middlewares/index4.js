// using middleware at multiple places

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

// will not use the middlware
app.get("/admin", realSumHandler);

// all the route handlers after app.use() will get the middleware

app.use(requestIncreaser);

app.get("/sum", realSumHandler);

app.get("/mul", realSumHandler);

app.get("/div", realSumHandler);

app.listen(3000);
