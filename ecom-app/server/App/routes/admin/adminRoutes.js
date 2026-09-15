let express=require("express")
const colorRoute = require("./colorRoutes")
const materialRoute = require("./materialRoutes")
const checkToken = require("../../middleware/checkToken")
// const sliderRoutes = require("./sliderRoutes")

let adminRoutes=express.Router() //Api Create 

//http://localhost:8000/admin/color
adminRoutes.use("/color",colorRoute)

//http://localhost:8000/admin/material
adminRoutes.use("/material",materialRoute)


// adminRoutes.use("/slider",sliderRoutes)



module.exports=adminRoutes