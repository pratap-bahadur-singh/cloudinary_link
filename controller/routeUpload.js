const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../middleware/multer');

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "uploads", // Organize uploads into a folder
            use_filename: true
        });

        res.status(200).json({
            success: true,
            message: "Uploaded successfully!",
            data: result
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ success: false, message: "Error uploading file", error: error.message });
    }
});

module.exports = router;
