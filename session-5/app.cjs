const express = require("express");
const coursesRouter = require("./routes/courses.route");

const app = express();

app.use(express.json());
app.use("/api/courses", coursesRouter); // localhost/api => coursesRouter

app.listen(5000, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Listening to Port 5000");
});
