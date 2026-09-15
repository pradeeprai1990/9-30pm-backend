export default function AddMaterial() {
  return (
    <div className='w-full min-h-[680px] px-4 bg-slate-50 py-10'>
      <div className='mx-auto'>
        <h3 className='text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500'>
          Add New Material
        </h3>
        <form className='border border-slate-200 border-t-0 bg-white p-6 rounded-b-lg shadow-sm'>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Material Name</label>
            <input type='text' name='name' autoComplete='off' className='text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' placeholder='Enter Material name' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Order</label>
            <input type='number' name='order' min='1' autoComplete='off' className='text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' placeholder='Enter order number' />
          </div>
          <button type='submit' className='mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
