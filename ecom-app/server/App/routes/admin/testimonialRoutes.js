const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const testimonialController = require("../../controllers/admin/testimonialController");

const testimonialRoutes = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const destination = path.join(process.cwd(), "uploads", "testimonial");
    fs.mkdir(destination, { recursive: true }, (err) => callback(err, destination));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname).toLowerCase()}`);
  },
});
const uploads = multer({ storage });

testimonialRoutes.post("/create", uploads.single("image"), testimonialController.create);
testimonialRoutes.get("/view", testimonialController.view);
testimonialRoutes.get("/details/:id", testimonialController.getDetails);
testimonialRoutes.post("/delete", testimonialController.delete);
testimonialRoutes.put("/update/:id", uploads.single("image"), testimonialController.update);
testimonialRoutes.post("/change-status", testimonialController.changeStatus);

module.exports = testimonialRoutes;
