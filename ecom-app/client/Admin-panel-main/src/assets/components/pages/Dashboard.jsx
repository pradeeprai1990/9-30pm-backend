import PageHeader from './common/PageHeader'

export default function Dashboard() {
  return (
    <>
      <PageHeader current='Dashboard' />
      <div className='w-full px-4 py-8 sm:px-6 lg:px-4'>
        <h2 className='mb-9 text-3xl font-extrabold text-slate-900'>Dashboard Overview</h2>

        <div className='grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <div id='dashboard-users' className='min-h-[240px] w-full rounded-md bg-[#5a54d6] p-7 text-white shadow-xl shadow-slate-300/60'><p className='text-3xl font-extrabold'>26</p><p className='mt-3 text-2xl font-bold'>Users</p></div>
          <div id='dashboard-products' className='min-h-[240px] w-full rounded-md bg-[#2d9bf0] p-7 text-white shadow-xl shadow-slate-300/60'><p className='text-3xl font-extrabold'>$6,200</p><p className='mt-3 text-2xl font-bold'>Product</p></div>
          <div id='dashboard-categories' className='min-h-[240px] w-full rounded-md bg-[#ffb31a] p-7 text-white shadow-xl shadow-slate-300/60'><p className='text-3xl font-extrabold'>2.49</p><p className='mt-3 text-2xl font-bold'>Category</p></div>
          <div id='dashboard-orders' className='min-h-[240px] w-full rounded-md bg-[#ee4d50] p-7 text-white shadow-xl shadow-slate-300/60'><p className='text-3xl font-extrabold'>44</p><p className='mt-3 text-2xl font-bold'>Orders</p></div>
        </div>
      </div>
    </>
  )
}
