const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const issueRoutes = require("./routes/issueRoutes");

const app = express();

// database connect
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// static folder for uploaded files
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/issues", issueRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// server start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});