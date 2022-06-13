const admissionModule = require("../model/admission.model");

const addStudent = (studentData) => {
  const DataToBeSave = new admissionModule(studentData);
  DataToBeSave.save();
};

const getStudentData = async () => {
  const findStudentList = await admissionModule.find({});
  return findStudentList;
};

const updateAdmissionData = async (NewAdmissionData) => {
  console.log(NewAdmissionData);
  const updatedData = await admissionModule.updateOne(NewAdmissionData);
  return updatedData;
};

const deleteAdmissionDataById = async (id) => {
  const deleteDataById = await admissionModule.deleteOne(id);
  return deleteDataById;
};

module.exports = {
  getStudentData,
  addStudent,
  updateAdmissionData,
  deleteAdmissionDataById,
};
