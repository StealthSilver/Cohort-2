const express = require("express");

const app = express();

const PORT = 3000;

//normal function that checks the age of the person

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

// middleware that checks the age

function isOldEnoughMiddleware(req, res, next) {
  if (age >= 14) {
    next();
  } else {
    res.json({
      nsg: "you re too young",
    });
  }
}

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "sorry you are too young",
    });
  }
});

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully riden the ride 2",
    });
  } else {
    res.status(411).json({
      msg: "sorry you are too young",
    });
  }
});

app.listen(3000, () => {
  console.log(`app is listening on port ${PORT}`);
});
