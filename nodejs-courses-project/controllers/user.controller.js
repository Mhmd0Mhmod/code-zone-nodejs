const User = require("../model/user.model");
const http = require("../utils/http");
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
module.exports = {
  getAllUsers,
};
