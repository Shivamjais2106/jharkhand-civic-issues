const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { reportIssue } = require("../controllers/issueController");
const Issue = require("../models/issue");


// 📌 Report new issue (with image/video upload)
router.post("/report", upload.single("media"), reportIssue);


// 📌 Get all issues (for admin dashboard / issues page)
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: issues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;