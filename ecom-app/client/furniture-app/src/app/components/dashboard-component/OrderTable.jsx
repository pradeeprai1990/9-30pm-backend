import React from 'react'
import Link from 'next/link'
import { orders, formatDate, orderNumber } from '../Data/orders-data'

export default function OrderTable() {
  return (
    <div>
        <table className="w-full border-collapse bg-white shadow rounded">
            <thead className="bg-gray-100 border-b-2 border-dark-gray font-playfair text-sm">
            <tr>
                <th className="p-4">Order</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total</th>
                <th className="p-4">Actions</th>
            </tr>
            </thead>

            <tbody>
            {orders.map((item) => (
                <tr key={item._id} className="text-center border-gray-100 text-sm">
                <td className="border border-gray-100 p-2">{orderNumber(item._id)}</td>
                <td className="border border-gray-100 p-2 font-semibold">{formatDate(item.createdAt)}</td>
                <td className="border border-gray-100 p-2 font-semibold capitalize">{item.orderStatus}</td>
                <td className="border border-gray-100 p-2 font-semibold">
                    Rs. {item.totalAmount} for {item.orderItems.length} {item.orderItems.length === 1 ? "item" : "items"}
                </td>
                <td className="border border-gray-100 p-2">
                    <Link href={`/orders/${item._id}`} className="px-4 py-2 rounded text-orange-dim font-semibold">
                        View
                    </Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
