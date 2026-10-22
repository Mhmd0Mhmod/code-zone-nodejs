const { validationResult } = require("express-validator");
const Course = require("../model/course.model");

const getAllCourses = async (req, res) => {
  const courses = await Course.find({});
  return res.json(courses);
};
const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
  return res.json(course);
};
const addCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  const newCourse = new Course(req.body);
  await newCourse.save();
  return res.status(201).json(newCourse);
};
const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.courseId,
    {
      $set: req.body,
    },
    {
      new: true,
    },
  );
  return res.json(course);
};
const deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.courseId);
  return res.json(course);
};
module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
