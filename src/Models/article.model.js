const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    slug: {
      type: String,
      default: "",
    },
    content: {
      required: true,
      type: String,
    },
    status: {
      type: String,
      default: "draft",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Article", articleSchema);
