//signup route
app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

//signin route
app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

//getting the purchases course
app.get("/user/puchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});
