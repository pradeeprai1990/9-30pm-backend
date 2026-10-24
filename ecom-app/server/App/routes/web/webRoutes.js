let express=require("express")
const authRoutes = require("./authRoutes")
const orderRoutes = require("./orderRoutes")
const homeRoutes = require("./homeRoutes")
let webRoutes=express.Router() //Api Create

webRoutes.use("/home",homeRoutes) //Home Routes Call (Mega Menu)
webRoutes.use("/auth",authRoutes) //Auth Routes Call
webRoutes.use("/order",orderRoutes) //Order Routes Call

module.exports=webRoutes
