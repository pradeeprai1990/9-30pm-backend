import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { orders, statusColors, formatDate, orderNumber, SHIPPING_CHARGE } from '@/app/components/Data/orders-data'

const orderSteps = ["pending", "processing", "delivered"]

export default async function OrderDetailsPage({ params }) {
  const { id } = await params
  // Static lookup — swap for the order details API call later
  const order = orders.find((item) => item._id === id)

  if (!order) {
    return (
      <div className="min-h-screen py-16 text-center">
        <h2 className="font-playfair text-4xl font-semibold mb-4">Order Not Found</h2>
        <Link href="/orders" className="font-rubik text-orange-dim font-semibold">Back to My Orders</Link>
      </div>
    )
  }

  const subTotal = order.orderItems.reduce((total, item) => total + item.sale_price * item.quantity, 0)
  const currentStep = orderSteps.indexOf(order.orderStatus === "success" ? "delivered" : order.orderStatus)
  const { shippingAddress } = order

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Order Details
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-dark-gray">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  <Link href="/orders">My Orders</Link>
                </div>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> {orderNumber(order._id)}
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="py-8 font-rubik space-y-8">
          {/* Summary bar */}
          <div className="bg-white shadow rounded p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-playfair text-2xl font-semibold">Order {orderNumber(order._id)}</p>
              <p className="text-sm text-dark-gray">Placed on {formatDate(order.createdAt)}</p>
            </div>
            <span className={`rounded-full px-4 py-1 text-sm font-semibold capitalize ${statusColors[order.orderStatus]}`}>
              {order.orderStatus}
            </span>
          </div>

          {/* Status tracker */}
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-playfair text-2xl font-semibold mb-6 border-b-3 border-orange-dim pb-2">
              Order Status
            </h3>
            {order.orderStatus === "failed" ? (
              <p className="rounded bg-red-50 p-4 text-red-700">
                This order could not be completed. Any amount deducted will be refunded within 5-7 working days.
              </p>
            ) : (
              <ol className="grid grid-cols-3">
                {orderSteps.map((step, index) => (
                  <li key={step} className="flex flex-col items-center text-center">
                    <div className="flex w-full items-center">
                      <div className={`h-1 flex-1 ${index === 0 ? "invisible" : index <= currentStep ? "bg-orange-dim" : "bg-gray-200"}`} />
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white ${index <= currentStep ? "bg-orange-dim" : "bg-gray-300"}`}>
                        {index + 1}
                      </div>
                      <div className={`h-1 flex-1 ${index === orderSteps.length - 1 ? "invisible" : index < currentStep ? "bg-orange-dim" : "bg-gray-200"}`} />
                    </div>
                    <p className={`mt-2 text-sm capitalize ${index <= currentStep ? "font-semibold" : "text-dark-gray"}`}>{step}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[60%_auto]">
            {/* Items + totals */}
            <div className="bg-white shadow rounded p-6 h-fit">
              <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                Items Ordered
              </h3>

              <div className="divide-y divide-gray-100">
                {order.orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-dark-gray">Rs. {item.sale_price} × {item.quantity}</p>
                    </div>
                    <p className="font-semibold">Rs. {item.sale_price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-dark-gray">Subtotal</span>
                  <span>Rs. {subTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-gray">Shipping</span>
                  <span>Rs. {SHIPPING_CHARGE}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span className="text-orange-dim">Rs. {order.totalAmount}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Shipping address */}
              <div className="bg-white shadow rounded p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                  Shipping Address
                </h3>
                <div className="text-sm space-y-1">
                  <p className="font-semibold text-base">{shippingAddress.name}</p>
                  <p>{shippingAddress.address}</p>
                  <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}</p>
                  <p>{shippingAddress.country}</p>
                  <p className="pt-2"><span className="text-dark-gray">Mobile:</span> {shippingAddress.mobile}</p>
                  {shippingAddress.email && (
                    <p><span className="text-dark-gray">Email:</span> {shippingAddress.email}</p>
                  )}
                </div>
              </div>

              {/* Payment info */}
              <div className="bg-white shadow rounded p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                  Payment
                </h3>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-dark-gray">Method</span>
                    <span className="font-semibold">
                      {order.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-gray">Status</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusColors[order.paymentStatus]}`}>
                      {order.paymentStatus}
                    </span>
                  </div>
                  {order.razorpayPaymentId && (
                    <div className="flex justify-between">
                      <span className="text-dark-gray">Payment ID</span>
                      <span className="font-semibold">{order.razorpayPaymentId}</span>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/orders"
                className="block w-full rounded bg-orange-dim py-3 text-center font-semibold text-white hover:opacity-90"
              >
                Back to My Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
