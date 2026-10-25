require("dotenv").config({
  path: "./.env.local",
});
const morgan = require("morgan");
const http = require("./utils/http");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", routes);
// global middleware for handler
app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    status: http.ERROR,
    message: error.message,
  });
});
// global middleware for not found handler
app.all("*any", (req, res, next) => {
  return res.status(404).json({
    status: http.ERROR,
    message: "This resource is not available",
  });
});
app.listen(8080, "localhost", () => {
  console.log("Hello World, From port 8080");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to mongoose successfully");
  })
  .catch((err) => {
    console.error("Mongoose connection error:", err.message);
  });
