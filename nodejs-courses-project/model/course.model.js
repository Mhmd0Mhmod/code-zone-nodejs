const mogoose = require("mongoose");
const courseSchema = new mogoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    require: true,
  },
});
module.exports = mogoose.model("Course", courseSchema);
