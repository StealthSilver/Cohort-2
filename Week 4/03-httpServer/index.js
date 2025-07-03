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

app.post("/", function (req, res) {});

app.listen(3000, () => {
  console.log(`app is running on port ${PORT}`);
});
