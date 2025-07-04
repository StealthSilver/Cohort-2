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
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      nsg: "you re too young",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have successfully riden the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have successfully riden the ride 2",
  });
});

app.listen(3000, () => {
  console.log(`app is listening on port ${PORT}`);
});
