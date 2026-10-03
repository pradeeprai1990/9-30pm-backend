let express=require("express");
let mongoose=require("mongoose")
let cors=require("cors")
require("dotenv").config() //
const adminRoutes = require("./App/routes/admin/adminRoutes");
const webRoutes = require("./App/routes/web/webRoutes");
// const checkToken = require("./App/middleware/checkToken");
let App=express()
App.use(cors())
App.use(express.json())

App.use("/uploads/category",express.static("uploads/category"))
App.use("/uploads/subcategory",express.static("uploads/subcategory"))
App.use("/uploads/subsubcategory",express.static("uploads/subsubcategory"))
App.use("/uploads/slider",express.static("uploads/slider"))
App.use("/uploads/why-choose-us",express.static("uploads/why-choose-us"))
App.use("/uploads/testimonial",express.static("uploads/testimonial"))
App.use("/uploads/product",express.static("uploads/product"))


// console.log(process.env.TOKEN); //12345

//http://localhost:8000/admin
//  App.use(checkToken) //next

App.use("/admin",adminRoutes) //adminRoutes Call

App.use("/web",webRoutes) //Website API Routes Call

//Server Connect + DB Name Create

mongoose.connect(`${process.env.CONNECTIONURL+process.env.DBNAME}`) //Promises
.then((res)=>{
    App.listen(8000,()=>{
        console.log("Server Start");
    })
})
//http://localhost:8000
