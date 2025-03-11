const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = `./uploads/${req.uploadType || "default"}`;
    fs.mkdirSync(uploadDir, { recursive: true }); // Ensure directory exists
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${req.userName || "unknown"}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    req.photoUrl = `/uploads/${req.uploadType || "default"}/${filename}`; // Set photo_url
    cb(null, filename);
  },
});

// File upload restrictions
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Only images (jpeg, jpg, png) are allowed!"));
    }
  },
});

// Middleware to extract text fields **before** multer processes files
const extractFormData = (req, res, next) => {
  console.log(req.body);
  req.uploadType = req.body.type || "default";
  req.userName = req.body.user_name || "unknown";
  next();
};

// Middleware to set `photo_url` in `req.body`
const setPhotoUrl = (req, res, next) => {
  if (req.file) {
    req.body.photo_url = req.photoUrl; // Add photo_url to req.body
  }
  next();
};

// Upload Middleware (Extract fields first, then upload file, then set photo_url)
const uploadMiddleware = [extractFormData, upload.single("image"), setPhotoUrl];

module.exports = { uploadMiddleware };
