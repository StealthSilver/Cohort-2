const express = require("express");
const mainRouter = require("./routes/index");
const PORT = 8000;

const app = express();
app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`the server is running on : ${PORT}`);
});
