let express = require("express");
const colorController = require("../../controllers/admin/colorController");
const checkToken = require("../../middleware/checkToken");
let colorRoute = express.Router();

////http://localhost:8000/admin/color/create
colorRoute.post("/create", colorController.create);
////http://localhost:8000/admin/color/view
colorRoute.get("/view", colorController.view);
colorRoute.get("/details/:id", colorController.getDetails);
////http://localhost:8000/admin/color/delete
colorRoute.post("/delete", colorController.delete);
////http://localhost:8000/admin/color/update
colorRoute.put("/update/:id", colorController.update);

colorRoute.post("/change-status", colorController.changeStatus);


module.exports = colorRoute;
