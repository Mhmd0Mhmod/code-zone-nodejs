const express = require("express");
const authController = require("../controllers/auth.controller");
const multer = require("multer");
const AppError = require("../utils/errors");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb => (error, dist folader)
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const fileExt = file.mimetype.split("/").at(1);
    const fileName = `user-${Date.now()}.${fileExt}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) return cb(null, true);
    return cb(AppError.create("The File Must be an Image", 400), false);
  },
});
const router = express.Router();
router
  .route("/register")
  .post(upload.single("avatar"), authController.register);
router.route("/login").post(authController.login);

module.exports = router;
