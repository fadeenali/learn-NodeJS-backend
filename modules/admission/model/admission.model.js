const mongoose = require("mongoose");
const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const admissionModule = mongoose.model("admission", admissionSchema);
module.exports = admissionModule;
