const express = require("express");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

//starting the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
