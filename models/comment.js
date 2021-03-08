const { model, Schema } = require("mongoose");

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requried: true,
  },
  ons: {
    type: Schema.Types.ObjectId,
    refPath: "onModel",
    required: true,
  },
  onModels: {
    type: String,
    required: true,
    enum: ["Meals", "Workout"],
  },
});
const Comment = model("Comment", CommentSchema);
module.exports = { CommentSchema, Comment };
