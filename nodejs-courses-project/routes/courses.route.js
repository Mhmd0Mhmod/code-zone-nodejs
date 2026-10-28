const express = require("express");

const coursesController = require("../controllers/courses.controller");
const {
  addCourseVaildationSchema,
} = require("../middlewares/vaildationSchema");
const ROLE = require("../utils/roles");
const allowTo = require("../middlewares/allowTo");

const router = express.Router();

router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(addCourseVaildationSchema(), coursesController.addCourse);

router
  .route("/:courseId")
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(allowTo(ROLE.ADMIN, ROLE.MANAGER), coursesController.deleteCourse);
module.exports = router;
