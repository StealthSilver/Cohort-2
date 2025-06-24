// fetch

async function main() {
  const response = await fetch(
    "https://api.sampleapis.com/baseball/hitsSingleSeason",
    {
      method: "POST",
      body: {
        username: "pogo",
        password: "42412",
      },
      headers: {
        Authorixation: "Bearer 313",
      },
    }
  );

  const textualData = await response.text();
  console.log(textualData);
}

// axios -> npm i axios
const axios = require("axios");

async function main() {
  const response = await axios.post(
    "https://api.sampleapis.com/baseball/hitsSingleSeason",
    {
      username: "pogo",
      password: "1234344",
    },
    {
      headers: {
        Authorization: "Bearer 2312",
      },
    }
  );
  console.log(response.data);
}

main();
