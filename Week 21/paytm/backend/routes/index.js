const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./account");

// all requests will start as /api/v1/user

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
