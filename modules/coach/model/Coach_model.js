const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    typr: Number,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  number: {
    type: Number,
  },
  experience: {
    type: String,
  },
  companyname: {
    type: String,
  },
});

const BM_Model = mongoose.model("Coach_Model", schema);

module.exports = BM_Model;
