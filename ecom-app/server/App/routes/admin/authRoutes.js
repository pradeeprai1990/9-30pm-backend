let express=require("express")
const authController = require("../../controllers/admin/authController")
let authRoute=express.Router()


authRoute.post('/login',authController.login)

// authRoute.post('/change-password')

// authRoute.post('/update-profile')

// authRoute.post('/forgot-password')

// authRoute.post('/reset-password')