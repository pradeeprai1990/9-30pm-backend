let express=require("express");
let mongoose=require("mongoose")

require("dotenv").config() //
const adminRoutes = require("./App/routes/admin/adminRoutes");
const checkToken = require("./App/middleware/checkToken");
let App=express()
App.use(express.json())


// console.log(process.env.TOKEN); //12345

//http://localhost:8000/admin
//  App.use(checkToken) //next

App.use("/admin",adminRoutes) //adminRoutes Call


//Server Connect + DB Name Create

mongoose.connect(`${process.env.CONNECTIONURL+process.env.DBNAME}`) //Promises
.then((res)=>{
    App.listen(8000,()=>{
        console.log("Server Start");
    })
})
//http://localhost:8000
