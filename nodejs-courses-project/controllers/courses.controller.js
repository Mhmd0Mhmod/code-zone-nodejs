const { validationResult } = require("express-validator");
const Course = require("../model/course.model");
const http = require("../utils/http");
const AppError = require("../utils/errors");
const getAllCourses = async (req, res) => {
  const { page = 1, size = 10 } = req.query;

  const skip = (page - 1) * size;
  const courses = await Course.find(
    {},
    {
      __v: false,
    },
  )
    .limit(size)
    .skip(skip);
  return res.json({
    status: http.SUCCESS,
    data: { courses },
  });
};
const getCourse = async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return next(AppError.create("This Course Not Found", 404));
    // const error = new Error("This Course Not found");
    // error.statusCode = 404;
    // return next(error);
    // return res.status(404).json({
    //   status: http.FAIL,
    //   data: {
    //     course: null,
    //   },
    // });
  }
  return res.json({
    status: http.SUCCESS,
    data: {
      course,
    },
  });
};
const addCourse = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(AppError.create(errors.array(), 400));
    // const error = new Error(
    //   errors
    //     .array()
    //     .map((el) => el.msg)
    //     .join("||"),
    // );
    // error.statusCode = 400;
    // return next(error);
    // return res.status(400).json(errors.array())
  }
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
  return res.json({
    status: http.SUCCESS,
    data: null,
  });
};
module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
