let express=require("express")
const homeController = require("../../controllers/web/homeController")
let homeRoutes=express.Router() //Api Create

//http://localhost:8000/web/home/mega-menu
homeRoutes.get('/mega-menu',homeController.megaMenu)

module.exports=homeRoutes
