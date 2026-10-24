const orderModel = require("../../models/orderModel")
let jwt = require("jsonwebtoken")
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


let orderController = {
    saveOrder: async (req, res) => {

        let token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, process.env.TOKENKEY);
        let { id } = decoded
        let orderData = req.body
        if (orderData.paymentMethod == "cod") {
            orderData['orderStatus'] = "processing"
            orderData['userId'] = id
            let savedOrder = await orderModel.create(orderData)
            let obj = {
                status: true,
                message: "Order Save Successfully",
                data: savedOrder
            }

            res.status(200).json(obj)

        }
        else {


            orderData['userId'] = id
            let savedOrder = await orderModel.create(orderData)



            // Create a Razorpay order
            const options = {
                amount: orderData.totalAmount * 100,      // Amount in the smallest currency unit (e.g., 50000 paise = ₹500)
                currency: "INR",
                receipt: savedOrder._id,
            };

            const order = await razorpayInstance.orders.create(options);


            let orderID = order.id;
            await orderModel.updateOne(
                {
                    _id: savedOrder._id
                },
                {
                    $set: {
                        razorpayOrderId: orderID
                    }
                }
            )

            res.status(200).json({
                status: true,
                message: "Online Payment Order Save Successfully",
                data: order
            })

            // res.saveOrder.status(200).json({
            //     status: true,
            //     message: "Online Payment Order Save Successfully",
            //     data: options
            // })



            // res.status(200).json({
            //     status: true,
            //     order,
            //     message: "Online Payment Order Save Successfully",
            //     data: orderData
            // })
        }


    },
    getOrders: async () => {

    },
    getOrderById: async () => {

    },
    updateOrderStatus: async () => {

    },
    updatePaymentStatus: async (req, res) => {

    },
    verifyPayment: async (req, res) => {
      let { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

        let obj = {
            orderStatus: "processing",
            paymentStatus: "success",
            razorpayPaymentId: razorpay_payment_id
        }


        await orderModel.updateOne(
            {
                razorpayOrderId: razorpay_order_id
            },
            {
                $set: obj
            }
        )

        res.status(200).json({
            status: true,
            message: "Payment Status Updated Successfully"
        })


    }
}

module.exports = orderController