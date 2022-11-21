const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    value: {
      required: true,
      type: String,
    },
    article: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Comment", commentSchema);
