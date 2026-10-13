const express = require("express");
const { body } = require("express-validator");

const coursesController = require("../controllers/courses.controller");
const router = express.Router();
router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(coursesController.addCourse);
router
  .route("/:courseId")
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);
module.exports = router;
