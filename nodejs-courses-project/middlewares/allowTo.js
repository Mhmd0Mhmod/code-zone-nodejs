const jwt = require("../utils/jwt");
const AppError = require("../utils/errors");
const http = require("../utils/http");

module.exports = function (...roles) {
  return (req, res, next) => {
    user = req.currentUser;
    if (roles.includes(user.role)) {
      return next();
    }
    return next(AppError.create("unAuthorized User", 401, http.FAIL));
  };
};
