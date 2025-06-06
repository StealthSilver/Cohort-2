const express = require("express");

const userRouter = require("./user");
const accountRouter = require("./account");

// all requests will start as /api/v1/user
const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
