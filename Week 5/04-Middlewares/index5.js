// using a middlware to log the method , timestamp and the url and host

const express = require("express");

const app = express();

// middleware
function loggerMiddleware(req, res, next) {
  console.log("Method is " + req.method);
  console.log("URL is " + req.url);
  console.log("Host is " + req.hostname);
  console.log(new Date());

  next();
}

app.use(loggerMiddleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/dif", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a - b,
  });
});

app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a * b,
  });
});

app.get("/div", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a / b,
  });
});

app.listen(3000);
