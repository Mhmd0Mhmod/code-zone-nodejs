const express = require("express");
const fs = require("node:fs");
const morgan = require("morgan");
const app = express();
const homePage = fs.readFileSync("./views/index.html", "utf-8");
const aboutPage = fs.readFileSync("./views/about.html", "utf-8");
app.use(morgan("dev"));
// app.use(express.static("./views"));
app.use("/about", function (req, res, next) {
  logger(req);
  next();
});
function logger(req) {
  console.log(req.method, req.url);
}
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/home", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("Welcome for About Page");
});
app.get("/products", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Test",
    },
  ]);
});
app.listen(5000, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Listening to Port 5000");
  }
});
