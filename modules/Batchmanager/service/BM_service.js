const BM_model = require("../models/BM_Model");

const addnewBM = (BMdata) => {
  const newData = new BM_model(BMdata);
  newData.save;
};



module.exports = {
  addnewBM,
};
