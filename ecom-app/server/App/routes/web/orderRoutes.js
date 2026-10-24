let express=require("express")
const orderController = require("../../controllers/web/orderController")
let orderRoutes=express.Router() //Api Create


orderRoutes.post('/place-order',orderController.saveOrder)
orderRoutes.get('/get-orders',orderController.getOrders)
orderRoutes.get('/get-order/:id',orderController.getOrderById)
orderRoutes.post('/update-order-status/:id',orderController.updateOrderStatus)
orderRoutes.post('/verify-payment',orderController.verifyPayment)
orderRoutes.post('/update-payment-status/:id',orderController.updatePaymentStatus)

module.exports=orderRoutes