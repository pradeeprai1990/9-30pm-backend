let express = require("express");
const colorController = require("../../controllers/admin/colorController");
const checkToken = require("../../middleware/checkToken");
let colorRoute = express.Router();

////http://localhost:8000/admin/color/create
colorRoute.post("/create", colorController.create);
////http://localhost:8000/admin/color/view
colorRoute.get("/view", colorController.view);

////http://localhost:8000/admin/color/delete
colorRoute.delete("/delete", colorController.delete);
////http://localhost:8000/admin/color/update
colorRoute.put("/update", colorController.update);

module.exports = colorRoute;
