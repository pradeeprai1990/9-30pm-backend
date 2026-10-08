const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "pradeep.9997@gmail.com",
    pass: "kpqwtcnxgnvigyil",
  },
});

module.exports = {transporter}

