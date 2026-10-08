const UserModel = require("../../models/userModels")

let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { transporter } = require("../../config/helper");
const saltRounds = 10;

const forgotPasswordTemplate = (resetUrl) => {
    const resetAction = resetUrl ? `
            <a href="${resetUrl}" style="display:inline-block;padding:13px 22px;background:#176b5b;color:#ffffff;text-decoration:none;border-radius:4px;font-size:15px;font-weight:600;">Reset password</a>
            <p style="margin:28px 0 0;font-size:12px;line-height:1.6;color:#65717d;">If the button does not work, copy and paste this link into your browser:<br><a href="${resetUrl}" style="color:#176b5b;word-break:break-all;">${resetUrl}</a></p>
    ` : "";

    return `
        <div style="margin:0;padding:32px 16px;background:#f4f6f8;font-family:Arial,sans-serif;color:#202833;">
            <div style="max-width:560px;margin:0 auto;padding:36px;background:#ffffff;border:1px solid #e3e8ed;border-radius:8px;">
                <h1 style="margin:0 0 20px;font-size:24px;color:#202833;">Reset your password</h1>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">We received a request to reset the password for your account.</p>
                <p style="margin:0 0 28px;font-size:15px;line-height:1.6;">Use the button below to continue. If you did not request a password reset, you can ignore this email.</p>
                ${resetAction}
            </div>
        </div>
    `;
};

let authController = {
    register: async (req, res) => {
        let insertData = req.body
        //Check Email Already Exist
        let checkEmail = await UserModel.findOne({ email: insertData.email })
        console.log(checkEmail);

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
            message: "User Created",
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

                let token = jwt.sign(
                    {
                        id: checkEmail._id
                    },
                    process.env.TOKENKEY
                );




                let responseData = checkEmail.toObject()
                delete responseData.password
                let obj = {
                    status: true,
                    token,
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

        try {
            const { email } = req.body;
            //Email Check in DB
            let checkEmail = await UserModel.findOne({ email: email })
            //results

            if (checkEmail) {

                const resetUrl = `${process.env.RESET_PASSWORD_URL}${checkEmail._id}`;
                //http://localhost:3000/reset-password/6ac7c85a757ffb594b3be3c6

                const info = await transporter.sendMail({
                    from: '"Ecom App" <pradeep.9997@gmail.com>',
                    to: email,
                    subject: "Reset your password",
                    text: "We received a request to reset your password. If you did not request this, you can ignore this email.",
                    html: forgotPasswordTemplate(resetUrl),
                });

                let obj = {
                    status: true,
                    message: "Reset link sent to your email",

                }
                res.send(obj)
            }
            else {
                let obj = {
                    status: false,
                    message: "Email Id Not Exist...",

                }
                res.send(obj)
            }
        } catch (err) {
            console.error("Error while sending mail:", err);
        }



    },
    resetPassword: async (req, res) => {
        let { id } = req.params

        let { password, confirmPassword } = req.body

        if (password == confirmPassword) {
            const hash = bcrypt.hashSync(password, saltRounds);
            await UserModel.updateOne(
                {
                    _id: id
                },
                {
                    $set: {
                        password: hash
                    }
                }
            )
            let obj = {
                status: true,
                message: "Password Changed Successfully"
            }
            return res.send(obj)
        }
        else {
            let obj = {
                status: false,
                message: "New Password and Confirm Password do not match"
            }
            return res.send(obj)
        }


    },



    changePassword: async (req, res) => {
        let { oldPassword, newPassword, confirmPassword } = req.body
        let token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, process.env.TOKENKEY);
        let { id } = decoded
        let data = await UserModel.findOne({ _id: id })
        let dbPassword = data.password

        if (bcrypt.compareSync(oldPassword, dbPassword)) {

            if (newPassword !== confirmPassword) {
                let obj = {
                    status: false,
                    message: "New Password and Confirm Password do not match"
                }
                return res.send(obj)
            }
            else {
                const hash = bcrypt.hashSync(newPassword, saltRounds);
                await UserModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        $set: {
                            password: hash
                        }
                    }
                )

                let obj = {
                    status: true,
                    message: "Password Changed Successfully"
                }
                return res.send(obj)
            }

        }

        else {
            let obj = {
                status: false,
                message: "Invalid Old Password"
            }
            return res.send(obj)
        }




    },
    updateProfile: async (req, res) => {

        let token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, process.env.TOKENKEY);
        let { id } = decoded

        let updateData = req.body
        if (req.file) {
            updateData.image = req.file.filename
        }

        let updateResult = await UserModel.updateOne(
            {
                _id: id
            },
            {
                $set: updateData
            }
        )

        let obj = {
            status: true,
            message: "Update Profile Api",
            updateResult
        }
        res.send(obj)
    }
}

module.exports = authController