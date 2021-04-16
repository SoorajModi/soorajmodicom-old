const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  body: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  uuid: {
    type: String,
    default: uuidv4(),
    required: true
  }
});

module.exports = schema;