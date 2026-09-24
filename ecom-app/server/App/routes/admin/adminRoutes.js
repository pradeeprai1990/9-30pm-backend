let express=require("express")
const colorRoute = require("./colorRoutes")
const materialRoute = require("./materialRoutes")
const checkToken = require("../../middleware/checkToken")
const categoryRoute = require("./categoryRoutes")
const subcategoryRoute = require("./subCategoryRoutes")
const subSubcategoryRoute = require("./subsubCategoryRoutes")
// const sliderRoutes = require("./sliderRoutes")

let adminRoutes=express.Router() //Api Create 

//http://localhost:8000/admin/color
adminRoutes.use("/color",colorRoute)

//http://localhost:8000/admin/material
adminRoutes.use("/material",materialRoute)


// adminRoutes.use("/slider",sliderRoutes)

adminRoutes.use("/category",categoryRoute)


adminRoutes.use("/subcategory",subcategoryRoute)


adminRoutes.use("/subsubcategory",subSubcategoryRoute)



module.exports=adminRoutes