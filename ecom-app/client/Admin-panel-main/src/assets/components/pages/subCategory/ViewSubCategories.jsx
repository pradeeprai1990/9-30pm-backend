import { FaFilter, FaPenToSquare } from 'react-icons/fa6'

export default function ViewSubCategories() {
  return (
    <section className='w-full'>
      <nav className='flex border-b bg-white px-6 py-3 shadow-sm'>
        <ol className='inline-flex items-center space-x-2 text-gray-600'>
          <li><a className='text-md font-medium hover:text-indigo-600'>Home</a></li>
          <li>/</li>
          <li><a className='text-md font-medium hover:text-indigo-600'>Sub Category</a></li>
          <li>/</li>
          <li className='text-md font-medium text-gray-900'>View Sub Category</li>
        </ol>
      </nav>

      <div className='p-4'>
        <div id='sub-category-filter' className='hidden py-4 relative px-6 my-3 rounded-lg border border-slate-200 w-full bg-white shadow-sm'>
          <p className='font-semibold py-2 text-[20px]'>Filter</p>
          <div className='flex items-end gap-6'>
            <div className='mb-5'>
              <label className='block mb-2 font-medium text-gray-700'>Sub Category Name</label>
              <input type='text' placeholder='Enter Sub Category Name' className='text-[17px] border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' />
            </div>
            <button className='text-white bg-slate-500 hover:bg-slate-600 px-6 py-2.5 rounded-lg transition-all mb-5'>Clear</button>
            <button className='text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg shadow-sm transition-all mb-5'>Apply</button>
          </div>
        </div>

        <div className='bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300'>
          <div className='text-[26px] font-semibold'>View Sub Category</div>
          <div className='flex gap-3 items-center'>
            <button type='button' className='flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all'><FaFilter /> Filter</button>
            <button className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Delete All</button>
            <button className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Change Status</button>
          </div>
        </div>

        <div className='border border-t-0 rounded-b-md border-slate-300 overflow-x-auto'>
          <div className='min-w-[900px] text-center'>
            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] text-sm uppercase bg-gray-50 border-b text-gray-700'>
              <div className='px-2 py-3 font-semibold flex items-center justify-center gap-2'><input type='checkbox' className='w-4 h-4 cursor-pointer' />Select</div>
              <div className='px-2 py-3 font-semibold'>S. No.</div>
              <div className='px-2 py-3 font-semibold'>Parent</div>
              <div className='px-2 py-3 font-semibold'>Sub Category</div>
              <div className='px-2 py-3 font-semibold'>Slug</div>
              <div className='px-2 py-3 font-semibold'>Order</div>
              <div className='px-2 py-3 font-semibold'>Status</div>
              <div className='px-2 py-3 font-semibold'>Action</div>
            </div>

            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] bg-white border-b text-gray-700'>
              <div className='px-2 py-4'><input type='checkbox' className='sub-category-row-check w-4 h-4 cursor-pointer' /></div>
              <div className='px-2 py-4'>1</div>
              <div className='px-2 py-4'>Beds</div>
              <div className='px-2 py-4'>King Size Beds</div>
              <div className='px-2 py-4'>king-size-beds</div>
              <div className='px-2 py-4'>1</div>
              <div className='px-2 py-4 font-semibold text-green-600'>Active</div>
              <div className='px-2 py-4'><FaPenToSquare className='text-[gold] text-xl' /></div>
            </div>

            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] bg-white border-b text-gray-700'>
              <div className='px-2 py-4'><input type='checkbox' className='sub-category-row-check w-4 h-4 cursor-pointer' /></div>
              <div className='px-2 py-4'>2</div>
              <div className='px-2 py-4'>Beds</div>
              <div className='px-2 py-4'>Queen Size Beds</div>
              <div className='px-2 py-4'>queen-size-beds</div>
              <div className='px-2 py-4'>2</div>
              <div className='px-2 py-4 font-semibold text-red-600 font-bold'>Inactive</div>
              <div className='px-2 py-4'><FaPenToSquare className='text-[gold] text-xl' /></div>
            </div>

            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] bg-white border-b text-gray-700'>
              <div className='px-2 py-4'><input type='checkbox' className='sub-category-row-check w-4 h-4 cursor-pointer' /></div>
              <div className='px-2 py-4'>3</div>
              <div className='px-2 py-4'>Sofas</div>
              <div className='px-2 py-4'>L Shape Sofa</div>
              <div className='px-2 py-4'>l-shape-sofa</div>
              <div className='px-2 py-4'>3</div>
              <div className='px-2 py-4 font-semibold text-green-600'>Active</div>
              <div className='px-2 py-4'><FaPenToSquare className='text-[gold] text-xl' /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
