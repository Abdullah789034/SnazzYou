const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const feedbackSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    userId: { type: ObjectId, ref: "user", required: true },
    suggestion: { type: ObjectId, ref: "suggestion" },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
