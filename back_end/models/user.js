const mongoose = require("mongoose");
const getCurrentDate = require("../lib/getCurrentDate");

const UsersSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  friends: {
    type: [String],
    default: [],
  },
  create: {
    type: Date,
    default: getCurrentDate(),
  },
});

module.exports = mongoose.model("User", UsersSchema);
