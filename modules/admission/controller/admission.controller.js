const express = require("express");
const router = express.Router();
const admissionService = require("../service/admission.service");

router.get("/", async (req, res) => {
  const studentData = await admissionService.getStudentData();
  res.status(200).send(studentData);
});

router.post("/", async (req, res) => {
  const reqobj = req.body;
  const DataToBeSave = await admissionService.addStudent(reqobj);
  res.status(200).send({ message: "admission successfull" });
});

router.patch("/:id", async (req, res) => {
  try {
    const reqObj = req.body;
    console.log(reqObj);
    const updatedData = await admissionService.updateAdmissionData(reqObj);
    res.status(200).send(updatedData);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await admissionService.deleteAdmissionDataById({
      _id: req.params.id,
    });
    res.status(200).send(deleteData);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
