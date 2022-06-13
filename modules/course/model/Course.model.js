const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
});

const CourseModel = mongoose.model("Course", schema);
module.exports = CourseModel;
