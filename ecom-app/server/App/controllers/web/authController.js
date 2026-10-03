const UserModel = require("../../models/userModels")
const bcrypt = require('bcrypt');
const saltRounds = 10;
let authController = {
    register: async (req, res) => {
        let insertData = req.body
        //Check Email Already Exist
        let checkEmail = await UserModel.findOne({ email: insertData.email })
        if (checkEmail) {
            let obj = {
                status: false,
                message: "Email Already Exist"
            }
            return res.send(obj)
        }
        //Check Phone Already Exist
        let checkPhone = await UserModel.findOne({ phone: insertData.phone })
        if (checkPhone) {
            let obj = {
                status: false,
                message: "Phone Already Exist"
            }
            return res.send(obj)
        }
        //Data Insert password Hash
        const hash = bcrypt.hashSync(insertData.password, saltRounds);

        insertData.password = hash
        let userRes = await UserModel(insertData)
        let insertRes = await userRes.save() //DataBase Insert
        let responseData = insertRes.toObject()
        delete responseData.password

        let obj = {
            status: true,
            message: "Register Api",
            data: responseData
        }
        res.send(obj)
    },

    login: async (req, res) => {
        let { email, password } = req.body

        let checkEmail = await UserModel.findOne({ email: email })

        if (checkEmail) {
            //password
            let dbPassword = checkEmail.password //DBPassword

            if (bcrypt.compareSync(password, dbPassword)) {
                let responseData = checkEmail.toObject()
                delete responseData.password
                let obj = {
                    status: true,
                    data: responseData
                }
                return res.send(obj)
            }
            else {
                let obj = {
                    status: false,
                    message: "Invalid  Password"
                }
                return res.send(obj)
            }
        }
        else {
            let obj = {
                status: false,
                message: "Invalid  Email Id"
            }
            return res.send(obj)
        }


    },
    forgotPassword: async (req, res) => {
        let obj = {
            status: true,
            message: "Forgot Password Api",
            data: req.body
        }
        res.send(obj)
    },
    resetPassword: async (req, res) => {
        let obj = {
            status: true,
            message: "Reset Password Api",
            data: req.body
        }
        res.send(obj)
    },
    changePassword: async (req, res) => {
        let obj = {
            status: true,
            message: "Change Password Api",
            data: req.body
        }
        res.send(obj)
    },
    updateProfile: async (req, res) => {
        let obj = {
            status: true,
            message: "Update Profile Api",
            data: req.body
        }
        res.send(obj)
    }
}

module.exports = authController