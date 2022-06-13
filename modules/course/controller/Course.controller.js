const express = require("express");
const router = express.Router();
const CourseService = require("../service/Course.service");
// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
// router.get("/", (req, res) => {
//   res.send("Courses to be loaded");
// });

// router.get("/", function (req, res) {
//   res.status(403).send({ name: "Name" });
// });

router.post("/", async function (req, res) {
  const reqobj = req.body;
  console.log(reqobj);
  const addCourse = await CourseService.addCourse(reqobj);
  res.status(200).send({ message: "Course added successfully" });

});

router.patch("/course");



router.get("/", async function  (req, res) {
  const courseArr = await CourseService.getCourses()
  res.status(200).send(courseArr);
});

router.get("/:id", async function  (req, res) {
  const courseArr = await   CourseService.getCourseById({ _id: req.params.id })
  res.status(200).send(courseArr);
});



router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await CourseService.deleteCoursesById({ _id: req.params.id });
    res.status(200).send(deleteData);
  } catch (error) {
    message: error;
  }
});


module.exports = router;
