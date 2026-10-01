const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const whyChooseUsController = require("../../controllers/admin/whyChooseUsController");

const whyChooseUsRoutes = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const destination = path.join(process.cwd(), "uploads", "why-choose-us");
    fs.mkdir(destination, { recursive: true }, (err) => callback(err, destination));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname).toLowerCase()}`);
  },
});
const uploads = multer({ storage });

whyChooseUsRoutes.post("/create", uploads.single("image"), whyChooseUsController.create);
whyChooseUsRoutes.get("/view", whyChooseUsController.view);
whyChooseUsRoutes.get("/details/:id", whyChooseUsController.getDetails);
whyChooseUsRoutes.post("/delete", whyChooseUsController.delete);
whyChooseUsRoutes.put("/update/:id", uploads.single("image"), whyChooseUsController.update);
whyChooseUsRoutes.post("/change-status", whyChooseUsController.changeStatus);

module.exports = whyChooseUsRoutes;
