import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { orders, statusColors, formatDate, orderNumber } from '@/app/components/Data/orders-data'

export default function OrdersPage() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            My Orders
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> My Orders
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {orders.length === 0 ? (
          <div className="py-16 text-center font-rubik">
            <p className="text-dark-gray mb-4">You have not placed any orders yet.</p>
            <Link href="/product" className="inline-block rounded bg-orange-dim px-6 py-3 font-semibold text-white hover:opacity-90">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="py-8 space-y-6 font-rubik">
            {orders.map((order) => {
              const itemCount = order.orderItems.reduce((total, item) => total + item.quantity, 0)
              return (
                <div key={order._id} className="bg-white shadow rounded">
                  {/* Order header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 bg-gray-50 px-6 py-4 text-sm">
                    <div>
                      <p className="text-dark-gray">Order</p>
                      <p className="font-semibold">{orderNumber(order._id)}</p>
                    </div>
                    <div>
                      <p className="text-dark-gray">Placed On</p>
                      <p className="font-semibold">{formatDate(order.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-dark-gray">Total</p>
                      <p className="font-semibold">Rs. {order.totalAmount}</p>
                    </div>
                    <div>
                      <p className="text-dark-gray">Payment</p>
                      <p className="font-semibold uppercase">{order.paymentMethod}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusColors[order.orderStatus]}`}>
                      {order.orderStatus}
                    </span>
                  </div>

                  {/* Items preview */}
                  <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
                    <div className="flex items-center gap-3">
                      {order.orderItems.slice(0, 3).map((item) => (
                        <img
                          key={item.id}
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded object-cover border border-gray-100"
                        />
                      ))}
                      <div className="text-sm">
                        <p className="font-semibold">{order.orderItems[0].name}</p>
                        <p className="text-dark-gray">
                          {itemCount} {itemCount === 1 ? "item" : "items"}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/orders/${order._id}`}
                      className="rounded border border-orange-dim px-5 py-2 text-sm font-semibold text-orange-dim hover:bg-orange-dim hover:text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
