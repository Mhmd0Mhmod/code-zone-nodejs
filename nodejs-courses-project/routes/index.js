const express = require("express");
const coursesRouter = require("./courses.route");
const usersRouter = require("./user.route");
const authRouter = require("./auth.route");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.use("/courses", verifyToken, coursesRouter);
router.use("/users", verifyToken, usersRouter);
router.use("/auth", authRouter);

module.exports = router;
