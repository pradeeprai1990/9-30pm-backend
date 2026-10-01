let express = require("express");
const materialController = require("../../controllers/admin/materialControllers");
let materialRoute = express.Router();

////http://localhost:8000/admin/material/create
materialRoute.post("/create", materialController.create);
////http://localhost:8000/admin/material/view
materialRoute.get("/view",  materialController.view);
materialRoute.get("/details/:id", materialController.getDetails);

////http://localhost:8000/admin/material/delete
materialRoute.post("/delete",  materialController.delete);
////http://localhost:8000/admin/material/update
materialRoute.put("/update/:id",  materialController.update);
materialRoute.post("/change-status", materialController.changeStatus);

module.exports = materialRoute;
