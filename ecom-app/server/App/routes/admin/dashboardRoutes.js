let express = require("express");
const dashboardController = require("../../controllers/admin/dashboardController");
let dashboardRoutes = express.Router();

////http://localhost:8000/admin/dashboard/stats
dashboardRoutes.get("/stats", dashboardController.stats);

module.exports = dashboardRoutes;
