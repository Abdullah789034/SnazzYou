const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    suggestion: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  {
    timestamps: true,
  }
);

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;
