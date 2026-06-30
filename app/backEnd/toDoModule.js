let mongoose = require("mongoose");

let schema = new mongoose.Schema({
  misson: {
    type: String,
    required: true,
  },
});

let ToDo = mongoose.model("ToDo", schema);

module.exports = ToDo;