const http = require("../utils/http");
const AppError = require("../utils/errors");
const jwt = require("../utils/jwt");
module.exports = (req, res, next) => {
  try {
    const authHeader =
      req.headers["Authorization"] || req.headers["authorization"];
    if (!authHeader) throw new Error("Token is required");
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token);
    req.currentUser = decodedToken;
  } catch (e) {
    return next(AppError.create(e.message || "Invaild Token", 401, http.ERROR));
  }
  next();
};
