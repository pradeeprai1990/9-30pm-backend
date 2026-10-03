let express=require("express")
const authController = require("../../controllers/web/authController")
let authRoutes=express.Router() //Api Create

//
authRoutes.post('/register',authController.register)
authRoutes.post('/login',authController.login)
authRoutes.post('/forgot-password',authController.forgotPassword)
authRoutes.post('/reset-password',authController.resetPassword)
authRoutes.post('/change-password',authController.changePassword)
authRoutes.post('/update-profile',authController.updateProfile)

module.exports=authRoutes