const express = require("express");
const app = express();

const PORT = 3000;

// in memory database

const users = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

// using the express.json middleware
app.use(express.json());

// getting the kidney status
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;

  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

// adding a healthy or unhealthy kidney
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json("done!");
});

// making all the kidneys healthy

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
});

app.listen(3000, () => {
  console.log(`app is running on port ${PORT}`);
});
