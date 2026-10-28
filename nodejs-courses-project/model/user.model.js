const mongoose = require("mongoose");
const validator = require("validator");
const ROLE = require("../utils/roles");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Field must be vaild email address"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [ROLE.USER, ROLE.ADMIN, ROLE.MANAGER],
      default: ROLE.USER,
    },
    avatar: {
      type: String,
      default: "uploads/images.jpg",
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("User", userSchema);
