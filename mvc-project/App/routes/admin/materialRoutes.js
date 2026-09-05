let express = require("express");
const materialController = require("../../controllers/admin/materialControllers");
let materialRoute = express.Router();

////http://localhost:8000/admin/material/create
materialRoute.post("/create", materialController.create);
////http://localhost:8000/admin/material/view
materialRoute.get("/view",  materialController.view);

////http://localhost:8000/admin/material/delete
materialRoute.delete("/delete",  materialController.delete);
////http://localhost:8000/admin/material/update
materialRoute.put("/update",  materialController.update);

module.exports = materialRoute;
