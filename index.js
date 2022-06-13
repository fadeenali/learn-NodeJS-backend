var express = require("express");
const mongoose = require("mongoose");
const CourseModel = require("./modules/course/model/Course.model");
const courseController = require("./modules/course/controller/Course.controller");
const admissionController = require("./modules/admission/controller/admission.controller");
const BMController = require("./modules/Batchmanager/controller/BM_controller");
const app = express();
app.use(express.json());

app.use("/course", courseController);
app.use("/admission", admissionController);
app.use("/BatchManager", BMController);

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/demo");
    console.log("Connected to Mongo");
    app.listen(3000, function () {
      console.log("Server has started");
    });
  } catch (error) {
    console.error(error);
  }
}

main();
