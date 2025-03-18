const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connection");

const userRoutes = require("./routes/userroute");
const postRoutes = require("./routes/postRoute");
const itchlistRoutes = require("./routes/itchlistroute");
const articleRoutes = require("./routes/articleroute"); 
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON body in requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/itchlist", itchlistRoutes);
app.use("/api/articles", articleRoutes); // Using article routes

// Sample API route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
