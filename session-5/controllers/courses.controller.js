let { courses } = require("../data/courses");
const { validationResult } = require("express-validator");

function getCourseById(courseId) {
  if (!courseId) return null;
  return courses.find((course) => course.id === parseInt(courseId));
}
const getAllCourses = (req, res) => {
  res.json(courses);
};
const getCourse = (req, res) => {
  const course = getCourseById(req.params.courseId);
  if (!course)
    return res.status(404).json({
      message: "The course with the given ID was not found",
    });

  res.json(course);
};
const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const newCourse = {
    id: courses.length + 1,
    ...req.body,
  };

  courses.push(newCourse);
  res.status(201).json({
    message: "New Course add successfully",
    data: newCourse,
  });
};
const updateCourse = (req, res) => {
  let course = getCourseById(req.params.courseId);
  if (!course)
    return res.status(404).json({
      message: "The course with the given ID was not found",
    });
  course = { ...course, ...req.body };

  res.status(200).json({
    message: "Course updated successfully",
    data: course,
  });
};
const deleteCourse = (req, res) => {
  const { courseId } = req.params.courseId;
  const courseIdx = courses.findIndex((c) => c.id === parseInt(courseId));
  if (!courseIdx)
    return res.status(404).json({
      message: "The course with the given ID was not found",
    });
  courses.splice(courseIdx, 1);
  res.json();
};
module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
