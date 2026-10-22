// الحل الأفضل والأسرع (إذا كان الملف في نفس المجلد باسم .env)
require("dotenv").config({
  path: "./.env.local",
});

const express = require("express");
const mongoose = require("mongoose");
const coursesRouter = require("./routes/courses.route");
const app = express();

app.use(express.json());
app.use("/api/courses", coursesRouter);

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
