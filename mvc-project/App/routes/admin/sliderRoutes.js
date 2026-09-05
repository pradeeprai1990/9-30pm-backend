let express=require("express");
const { sliderCreate, sliderView, sliderDelete, sliderUpdate } = require("../../controllers/admin/sliderController");
let sliderRoutes=express.Router()

////http://localhost:8000/admin/slider/create
sliderRoute.post("/create",sliderCreate );
////http://localhost:8000/admin/slider/view
sliderRoute.get("/view", sliderView);

////http://localhost:8000/admin/slider/delete
sliderRoute.delete("/delete",sliderDelete );
////http://localhost:8000/admin/slider/update
sliderRoute.put("/update", sliderUpdate);

module.exports = sliderRoutes;
