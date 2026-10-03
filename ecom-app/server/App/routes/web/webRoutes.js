let express=require("express")
const authRoutes = require("./authRoutes")
let webRoutes=express.Router() //Api Create

webRoutes.use("/auth",authRoutes) //Auth Routes Call

module.exports=webRoutes
