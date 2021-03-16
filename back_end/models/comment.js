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
  content: {
    type: Schema.Types.ObjectId,
    refPath: "onModel",
    required: true,
  },
  onModel: {
    type: String,
    required: true,
    enum: ["Meals", "Workout"],
  },
});
const Comment = model("Comment", CommentSchema);
module.exports = { CommentSchema, Comment };
