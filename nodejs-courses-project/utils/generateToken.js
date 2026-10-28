const jwt = require("jsonwebtoken");
module.exports = function (payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};
