const BM_model = require("../models/BM_Model");

const addnewBM = (BMdata) => {
  const newData = new BM_model(BMdata);
  newData.save();
};

const getBmData = () => {
  const BMData = BM_model.find({});
  return BMData;
};

const updateBmData = (newBmData) => {
  const dataTOBeUpdated = BM_model.updateOne(newBmData);
  return dataTOBeUpdated;
};

const deleteBmData = async (id)=>{
  const deleteData = await BM_model.deleteOne(id)
  return deleteData
}

module.exports = {
  addnewBM,
  getBmData,
  updateBmData,
  deleteBmData,
};
