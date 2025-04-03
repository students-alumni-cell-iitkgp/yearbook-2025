const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    votes: [
      {
        candirollno: {
          type: String,
          required: true,
        },
        votecount: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  }
);

// Create a model for the article
const Polls = mongoose.model("Polls", pollSchema);

module.exports = { Polls };
