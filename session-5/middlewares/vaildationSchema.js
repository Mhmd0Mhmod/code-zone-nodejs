const { body } = require("express-validator");
const addCourseVaildationSchema = () => [
  body("title")
    .notEmpty()
    .isLength({
      min: 2,
    })
    .withMessage("title is required"),
  body("price").notEmpty().withMessage("Price is Required"),
];
module.exports = { addCourseVaildationSchema };
