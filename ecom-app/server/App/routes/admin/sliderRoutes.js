const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sliderController = require("../../controllers/admin/sliderController");
const sliderRoutes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const destination = path.join(process.cwd(), "uploads", "slider");
    fs.mkdir(destination, { recursive: true }, (err) => callback(err, destination));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname).toLowerCase()}`);
  },
});
const uploads = multer({ storage });

sliderRoutes.post("/create", uploads.single("image"), sliderController.create);
sliderRoutes.get("/view", sliderController.view);
sliderRoutes.get("/details/:id", sliderController.getDetails);
sliderRoutes.post("/delete", sliderController.delete);
sliderRoutes.put("/update/:id", uploads.single("image"), sliderController.update);
sliderRoutes.post("/change-status", sliderController.changeStatus);

module.exports = sliderRoutes;
