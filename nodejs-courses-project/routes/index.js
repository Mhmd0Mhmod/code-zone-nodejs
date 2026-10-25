const coursesRouter = require("./courses.route");
const express = require("express");

const router = express.Router();
router.use("/courses", coursesRouter);

module.exports = router;
