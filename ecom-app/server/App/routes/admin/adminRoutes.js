let express=require("express")
const colorRoute = require("./colorRoutes")
const materialRoute = require("./materialRoutes")
const checkToken = require("../../middleware/checkToken")
const categoryRoute = require("./categoryRoutes")
const subcategoryRoute = require("./subCategoryRoutes")
const subSubcategoryRoute = require("./subsubCategoryRoutes")
const sliderRoutes = require("./sliderRoutes")
const countryRoutes = require("./countryRoutes")
const testimonialRoutes = require("./testimonialRoutes")
const faqRoutes = require("./faqRoutes")
const whyChooseUsRoutes = require("./whyChooseUsRoutes")
const productRoute = require("./productRoutes")

let adminRoutes=express.Router() //Api Create 

//http://localhost:8000/admin/color
adminRoutes.use("/color",colorRoute)

//http://localhost:8000/admin/material
adminRoutes.use("/material",materialRoute)


adminRoutes.use("/why-choose-us", whyChooseUsRoutes)

adminRoutes.use("/slider", sliderRoutes)
adminRoutes.use("/country", countryRoutes)
adminRoutes.use("/testimonial", testimonialRoutes)
adminRoutes.use("/faqs", faqRoutes)

adminRoutes.use("/category",categoryRoute)


adminRoutes.use("/subcategory",subcategoryRoute)


adminRoutes.use("/subsubcategory",subSubcategoryRoute)

adminRoutes.use("/product",productRoute)



module.exports=adminRoutes