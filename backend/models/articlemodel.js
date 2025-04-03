const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rollno: {
      type: String, // Store the roll number as a string
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date:{
      type: Date,
      required: true,
    }
  },
  
);

// Create a model for the article
const Article = mongoose.model("Article", articleSchema);

module.exports = {Article};
