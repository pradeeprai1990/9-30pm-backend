const express = require("express");
const countryController = require("../../controllers/admin/countryController");

const countryRoutes = express.Router();

countryRoutes.post("/create", countryController.create);
countryRoutes.get("/view", countryController.view);
countryRoutes.get("/details/:id", countryController.getDetails);
countryRoutes.post("/delete", countryController.delete);
countryRoutes.put("/update/:id", countryController.update);
countryRoutes.post("/change-status", countryController.changeStatus);

module.exports = countryRoutes;
