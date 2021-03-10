const mongoose = require("mongoose");
const { CommentSchema } = require("./comment");
const getCurrentDate = require("../lib/getCurrentDate");

const WorkoutSchema = new mongoose.Schema({
  workout_type: {
    type: String,
  },
  hour: {
    type: Number,
    trim: true,
  },
  workout_calorie: {
    type: Number,
    trim: true,
  },
  workout_comments: {
    type: [CommentSchema],
    default: [],
  },
  create: {
    type: Date,
    default: getCurrentDate(),
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
