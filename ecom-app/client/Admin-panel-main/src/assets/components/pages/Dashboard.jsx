import axios from 'axios'
import { useEffect, useState } from 'react'
import PageHeader from './common/PageHeader'

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
  success: 'bg-emerald-100 text-emerald-700',
  failed: 'bg-red-100 text-red-700',
}

const formatAmount = (amount) => `₹${Number(amount || 0).toLocaleString('en-IN')}`

export default function Dashboard() {
  let [stats, setStats] = useState(null)
  let [loading, setLoading] = useState(true)
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH

  let getStats = () => {
    setLoading(true)
    axios
      .get(`${apiBaseUrl}dashboard/stats`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setStats(finalRes.data)
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getStats()
  }, [])

  const cards = [
    { id: 'dashboard-users', label: 'Users', value: stats?.totalUsers, color: 'bg-[#5a54d6]' },
    { id: 'dashboard-products', label: 'Products', value: stats?.totalProducts, color: 'bg-[#2d9bf0]', note: stats && `${stats.activeProducts} active · ${stats.outOfStock} out of stock` },
    { id: 'dashboard-categories', label: 'Categories', value: stats?.totalCategories, color: 'bg-[#ffb31a]' },
    { id: 'dashboard-orders', label: 'Orders', value: stats?.totalOrders, color: 'bg-[#ee4d50]' },
    { id: 'dashboard-revenue', label: 'Revenue', value: stats && formatAmount(stats.totalRevenue), color: 'bg-[#16a34a]', note: 'Excludes failed orders' },
  ]

  const maxRevenue = Math.max(1, ...(stats?.monthlySales || []).map((m) => m.revenue))
  const maxCategory = Math.max(1, ...(stats?.productsByCategory || []).map((c) => c.count))

  return (
    <>
      <PageHeader current='Dashboard' />
      <div className='w-full px-4 py-8 sm:px-6 lg:px-4'>
        <div className='mb-9 flex items-center justify-between'>
          <h2 className='text-3xl font-extrabold text-slate-900'>Dashboard Overview</h2>
          <button onClick={getStats} disabled={loading} className='rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50'>
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>

        <div className='grid w-full gap-6 md:grid-cols-2 xl:grid-cols-5'>
          {cards.map((card) => (
            <div key={card.id} id={card.id} className={`min-h-[160px] w-full rounded-md ${card.color} p-7 text-white shadow-xl shadow-slate-300/60`}>
              <p className='text-3xl font-extrabold'>{card.value ?? '--'}</p>
              <p className='mt-3 text-2xl font-bold'>{card.label}</p>
              {card.note && <p className='mt-2 text-sm opacity-90'>{card.note}</p>}
            </div>
          ))}
        </div>

        {stats && (
          <>
            <div className='mt-8 grid gap-6 xl:grid-cols-3'>
              {/* Monthly Sales Chart */}
              <div className='rounded-md bg-white p-6 shadow-sm xl:col-span-2'>
                <h3 className='mb-6 text-xl font-bold text-slate-900'>Monthly Revenue (Last 12 Months)</h3>
                <div className='flex h-64 items-end gap-2'>
                  {stats.monthlySales.map((m) => (
                    <div key={m.label} className='flex h-full flex-1 flex-col items-center justify-end gap-2'>
                      <div
                        title={`${m.label}: ${formatAmount(m.revenue)} (${m.orders} orders)`}
                        className='w-full rounded-t bg-[#5a54d6] transition-all hover:bg-[#433db8]'
                        style={{ height: `${(m.revenue / maxRevenue) * 100}%`, minHeight: m.revenue ? '4px' : '0' }}
                      />
                      <span className='text-[11px] text-slate-500'>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orders By Status */}
              <div className='rounded-md bg-white p-6 shadow-sm'>
                <h3 className='mb-6 text-xl font-bold text-slate-900'>Orders By Status</h3>
                {stats.ordersByStatus.length === 0 && <p className='text-slate-500'>No orders yet</p>}
                <ul className='space-y-3'>
                  {stats.ordersByStatus.map((s) => (
                    <li key={s._id} className='flex items-center justify-between'>
                      <span className={`rounded px-3 py-1 text-sm font-semibold capitalize ${statusColors[s._id] || 'bg-slate-100 text-slate-700'}`}>{s._id}</span>
                      <span className='font-bold text-slate-900'>{s.count}</span>
                    </li>
                  ))}
                </ul>
                <h4 className='mb-3 mt-8 font-bold text-slate-900'>Payment Method</h4>
                <ul className='space-y-2'>
                  {stats.ordersByPaymentMethod.map((p) => (
                    <li key={p._id} className='flex justify-between text-sm'>
                      <span className='uppercase text-slate-600'>{p._id}</span>
                      <span className='font-semibold'>{p.count} · {formatAmount(p.amount)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-6 grid gap-6 xl:grid-cols-2'>
              {/* Top Selling Products */}
              <div className='rounded-md bg-white p-6 shadow-sm'>
                <h3 className='mb-6 text-xl font-bold text-slate-900'>Top Selling Products</h3>
                {stats.topProducts.length === 0 && <p className='text-slate-500'>No sales yet</p>}
                <ul className='divide-y divide-slate-100'>
                  {stats.topProducts.map((p) => (
                    <li key={p._id} className='flex items-center gap-4 py-3'>
                      {p.image && <img src={p.image} alt={p._id} className='h-12 w-12 rounded object-cover' />}
                      <span className='flex-1 font-medium text-slate-800'>{p._id}</span>
                      <span className='text-sm text-slate-500'>{p.quantity} sold</span>
                      <span className='w-24 text-right font-semibold'>{formatAmount(p.revenue)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products By Category */}
              <div className='rounded-md bg-white p-6 shadow-sm'>
                <h3 className='mb-6 text-xl font-bold text-slate-900'>Products By Category</h3>
                {stats.productsByCategory.length === 0 && <p className='text-slate-500'>No products yet</p>}
                <ul className='space-y-4'>
                  {stats.productsByCategory.map((c) => (
                    <li key={c.name}>
                      <div className='mb-1 flex justify-between text-sm'>
                        <span className='font-medium text-slate-700'>{c.name}</span>
                        <span className='font-semibold'>{c.count}</span>
                      </div>
                      <div className='h-2 w-full rounded bg-slate-100'>
                        <div className='h-2 rounded bg-[#2d9bf0]' style={{ width: `${(c.count / maxCategory) * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Orders */}
            <div className='mt-6 overflow-x-auto rounded-md bg-white p-6 shadow-sm'>
              <h3 className='mb-6 text-xl font-bold text-slate-900'>Recent Orders</h3>
              <table className='w-full text-left text-sm'>
                <thead className='border-b text-slate-500'>
                  <tr>
                    <th className='py-2'>Customer</th>
                    <th className='py-2'>Items</th>
                    <th className='py-2'>Amount</th>
                    <th className='py-2'>Payment</th>
                    <th className='py-2'>Status</th>
                    <th className='py-2'>Date</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-100'>
                  {stats.recentOrders.length === 0 && (
                    <tr><td colSpan={6} className='py-4 text-center text-slate-500'>No orders yet</td></tr>
                  )}
                  {stats.recentOrders.map((o) => (
                    <tr key={o._id}>
                      <td className='py-3'>
                        <p className='font-medium text-slate-800'>{o.userName || 'Unknown'}</p>
                        <p className='text-xs text-slate-500'>{o.userEmail}</p>
                      </td>
                      <td className='py-3'>{o.itemCount}</td>
                      <td className='py-3 font-semibold'>{formatAmount(o.totalAmount)}</td>
                      <td className='py-3 uppercase'>{o.paymentMethod} · <span className='capitalize'>{o.paymentStatus}</span></td>
                      <td className='py-3'>
                        <span className={`rounded px-2 py-1 text-xs font-semibold capitalize ${statusColors[o.orderStatus] || ''}`}>{o.orderStatus}</span>
                      </td>
                      <td className='py-3 text-slate-500'>{new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  )
}
