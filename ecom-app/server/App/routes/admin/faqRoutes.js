const express = require("express");
const faqController = require("../../controllers/admin/faqController");

const faqRoutes = express.Router();

faqRoutes.post("/create", faqController.create);
faqRoutes.get("/view", faqController.view);
faqRoutes.get("/details/:id", faqController.getDetails);
faqRoutes.post("/delete", faqController.delete);
faqRoutes.put("/update/:id", faqController.update);
faqRoutes.post("/change-status", faqController.changeStatus);

module.exports = faqRoutes;
