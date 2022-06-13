const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    typr: Number,

  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("BM_model", schema);
