const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connection")
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const itchlistRoutes = require("./routes/itchlistRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON body in requests

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/itchlist", itchlistRoutes);

// Sample API route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
