const express = require("express");

const coursesController = require("../controllers/courses.controller");
const {
  addCourseVaildationSchema,
} = require("../middlewares/vaildationSchema");

const router = express.Router();

router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(addCourseVaildationSchema(), coursesController.addCourse);
router
  .route("/:courseId")
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);
module.exports = router;
