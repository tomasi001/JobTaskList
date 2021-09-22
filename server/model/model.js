const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  job: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  archived: {
    type: String,
    required: true,
  },
  submitDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const jobDB = mongoose.model("jobDB", schema);

module.exports = jobDB;
