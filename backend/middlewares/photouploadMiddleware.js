const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = `./uploads/${req.pictype}`;
        
        // Create the directory if it doesn't exist
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const filename = req.rollno + '-' + Date.now() + path.extname(file.originalname);
        req.photo_url = `/uploads/${req.pictype}/${filename}`; // Save file path in request object
        cb(null, filename);
    }
});

// File upload restrictions
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            return cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
        }
    }
});

module.exports = { upload };
