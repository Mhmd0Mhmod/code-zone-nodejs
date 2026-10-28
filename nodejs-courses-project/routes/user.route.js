const express = require("express");
const usersController = require("../controllers/user.controller");

const router = express.Router();
// get All users
router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.adduser);
// register
// login
module.exports = router;
