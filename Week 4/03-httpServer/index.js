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

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;

  const numberOfKidneys = kidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
});

app.listen(3000, () => {
  console.log(`app is running on port ${PORT}`);
});
