const Issue = require("../models/issue.js");

const reportIssue = async (req, res) => {
  try {

    const newIssue = new Issue({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      category: req.body.category,
      media: req.file ? req.file.filename : null
    });

    await newIssue.save();

    res.status(201).json({
      success: true,
      message: "Issue Reported Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};

module.exports = { reportIssue };