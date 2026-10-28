const http = require("../utils/http");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/errors");
module.exports = (req, res, next) => {
  try {
    const authHeader =
      req.headers["Authorization"] || req.headers["authorization"];
    if (!authHeader) throw new Error("Token is required");
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (e) {
    return next(AppError.create(e.message || "Invaild Token", 401, http.ERROR));
  }
  next();
};
