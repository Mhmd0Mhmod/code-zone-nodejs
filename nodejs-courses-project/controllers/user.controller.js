const User = require("../model/user.model");
const http = require("../utils/http");
const bcrypt = require("../utils/bcrypt");
async function getAllUsers(req, res) {
  const { size, page } = req.params;
  const skip = (page - 1) * size;
  const users = await User.find(
    {},
    {
      password: false,
      __v: false,
    },
  )
    .limit(size)
    .skip(skip);
  return res.json({
    status: http.SUCCESS,
    data: {
      users,
    },
  });
}
async function adduser(req, res, next) {
  const hashdPassowrd = await bcrypt.hash(req.body.password);
  const user = await User.create({
    ...req.body,
    password: hashdPassowrd,
  });
  return res.status(201).json({
    status: http.SUCCESS,
    data: {
      user,
    },
  });
}
module.exports = {
  getAllUsers,
  adduser,
};
