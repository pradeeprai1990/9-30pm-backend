import React from 'react'

export default function OrderTable() {
    let orders = [
        {
            orderid: 1,
            date: 'May 10, 2025',
            status: 'Completed',
            total: 'Rs. 25.00 for 1 item',
        },
        {
            orderid: 2,
            date: 'May 10, 2026',
            status: 'Processing',
            total: 'Rs. 25.00 for 1 item',
        }
    ]

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
                <tr key={item.orderid} className="text-center border-gray-100 text-sm">
                <td className="border border-gray-100 p-2">{item.orderid}</td>
                <td className="border border-gray-100 p-2 font-semibold">{item.date}</td>
                <td className="border border-gray-100 p-2 font-semibold">{item.status}</td>
                <td className="border border-gray-100 p-2 font-semibold">{item.total}</td>
                <td className="border border-gray-100 p-2">
                    <button className="px-4 py-2 rounded text-orange-dim font-semibold">
                        View
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
