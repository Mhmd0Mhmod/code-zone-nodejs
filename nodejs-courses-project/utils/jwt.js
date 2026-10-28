const jwt = require("jsonwebtoken");
function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
}
function verify(payload) {
  return jwt.verify(payload, process.env.JWT_SECRET_KEY);
}
module.exports = {
  sign,
  verify,
};
