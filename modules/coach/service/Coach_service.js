const Coach_Model = require("../model/Coach_model");

const addenwCoach = (coachData) => {
  const dataToBeSave = new Coach_Model(coachData);
  dataToBeSave.save();
};

const findCoachData = async () => {
  const getData = await Coach_Model.find({});

  return getData;
};

const updateCoachData = async (newCoachData) => {
  const updateCoachData = await Coach_Model.updateOne(newCoachData);
  return updateCoachData;
};

const deleteCoachData = async (id) => {
  const dataToBeDelete = await Coach_Model.deleteOne(id);
  return dataToBeDelete;
};

module.exports = {
  addenwCoach,
  findCoachData,
  updateCoachData,
  deleteCoachData,
};
