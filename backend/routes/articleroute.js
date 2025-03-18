const express = require("express");
const Article = require("../models/articlemodel");
// Assuming you have an Article model
const router = express.Router();

// POST route to create a new article
router.post("/", async (req, res) => {
  try {
    const { title, content, author, rollno } = req.body;

    // Validation: Check if the content is empty
    if (!content || content.trim() === "") {
      return res.status(400).json({ message: "Content is required" });
    }

    // Create a new article
    const newArticle = new Article({
      title,
      content,
      author,
      rollno,
    });

    // Save article to the database
    await newArticle.save();

    // Return success response
    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating article" });
  }
});

module.exports = router;
