// Static order data shaped like the server's orderModel — replace with the order API response later
const productImage = "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"

const shippingAddress = {
  name: "Rahul Sharma",
  mobile: "9876543210",
  email: "rahul@example.com",
  address: "12, MG Road, Near City Mall",
  city: "Jodhpur",
  state: "Rajasthan",
  pincode: "342001",
  country: "India",
}

export const SHIPPING_CHARGE = 100

export const orders = [
  {
    _id: "6650a1f2c4e8b21a9f3d0001",
    orderItems: [
      { id: 1, name: "Caroline Study Tables", image: productImage, sale_price: 2500, quantity: 1 },
      { id: 2, name: "Evan Coffee Table", image: productImage, sale_price: 1800, quantity: 2 },
    ],
    shippingAddress,
    paymentMethod: "cod",
    orderStatus: "delivered",
    paymentStatus: "success",
    totalAmount: 6200,
    createdAt: "2026-09-28T10:15:00.000Z",
  },
  {
    _id: "6650a1f2c4e8b21a9f3d0002",
    orderItems: [
      { id: 3, name: "Bolton Bookshelf", image: productImage, sale_price: 4200, quantity: 1 },
    ],
    shippingAddress,
    paymentMethod: "online",
    orderStatus: "processing",
    paymentStatus: "success",
    razorpayOrderId: "order_PqR8sT2uV3wX4y",
    razorpayPaymentId: "pay_PqR9aB1cD2eF3g",
    totalAmount: 4300,
    createdAt: "2026-10-05T16:40:00.000Z",
  },
  {
    _id: "6650a1f2c4e8b21a9f3d0003",
    orderItems: [
      { id: 4, name: "Arlo Shoe Rack", image: productImage, sale_price: 1500, quantity: 1 },
      { id: 5, name: "Wooden Wall Mirror", image: productImage, sale_price: 1200, quantity: 1 },
    ],
    shippingAddress,
    paymentMethod: "cod",
    orderStatus: "pending",
    paymentStatus: "pending",
    totalAmount: 2800,
    createdAt: "2026-10-11T09:05:00.000Z",
  },
  {
    _id: "6650a1f2c4e8b21a9f3d0004",
    orderItems: [
      { id: 6, name: "Sheesham TV Unit", image: productImage, sale_price: 7800, quantity: 1 },
    ],
    shippingAddress,
    paymentMethod: "online",
    orderStatus: "failed",
    paymentStatus: "failed",
    razorpayOrderId: "order_QaB1cD2eF3gH4i",
    totalAmount: 7900,
    createdAt: "2026-10-12T19:30:00.000Z",
  },
]

export const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  success: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
}

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })

// Short, readable order number from the Mongo _id
export const orderNumber = (id) => `#${id.slice(-6).toUpperCase()}`
