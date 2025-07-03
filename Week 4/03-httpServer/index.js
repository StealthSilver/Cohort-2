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

app.listen(3000, () => {
  console.log(`app is running on port ${PORT}`);
});
