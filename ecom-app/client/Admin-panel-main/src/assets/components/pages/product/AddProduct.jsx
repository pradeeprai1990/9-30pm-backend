import { FaRegImage } from 'react-icons/fa6'

export default function AddProduct() {
  return (
    <div className='w-full min-h-[680px] px-5 bg-slate-50 py-10'>
      <div className='mx-auto'>
        <h3 className='text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500'>
          Add New Product
        </h3>
        <form className='border border-slate-200 border-t-0 bg-white p-6 rounded-b-lg shadow-sm'>
          <div className='flex gap-3'>
            <div className='mb-6 basis-[33%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Parent Category</label>
              <select name='parent_category' defaultValue='' className='text-[17px] border cursor-pointer border-gray-300 rounded-lg block w-full py-2.5 px-3'>
                <option value=''>Select Parent Category</option>
              </select>
            </div>
            <div className='mb-6 basis-[33%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Sub Category</label>
              <select name='sub_category' defaultValue='' className='text-[17px] border cursor-pointer border-gray-300 rounded-lg block w-full py-2.5 px-3'>
                <option value=''>Select Sub Category</option>
              </select>
            </div>
            <div className='mb-6 basis-[33%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Sub Sub Category</label>
              <select name='sub_sub_category' defaultValue='' className='text-[17px] border cursor-pointer border-gray-300 rounded-lg block w-full py-2.5 px-3'>
                <option value=''>Select Sub Sub Category</option>
              </select>
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='mb-6 basis-[25%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Product Name</label>
              <input type='text' name='product_name' autoComplete='off' className='text-[17px] border border-gray-300 rounded-lg block w-full py-2.5 px-3' placeholder='Enter product name' />
            </div>
            <div className='mb-6 basis-[33%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Product Type</label>
              <select name='type' defaultValue='' className='text-[17px] border cursor-pointer border-gray-300 rounded-lg block w-full py-2.5 px-3'>
                <option value=''>Select Product Type</option>
              </select>
            </div>
            <div className='mb-6 basis-[25%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Price</label>
              <input type='number' name='price' autoComplete='off' className='text-[17px] border border-gray-300 rounded-lg block w-full py-2.5 px-3' placeholder='Enter price' />
            </div>
            <div className='mb-6 basis-[25%]'>
              <label className='block mb-2 text-md font-medium text-gray-700'>Stock</label>
              <input type='number' name='stock' autoComplete='off' className='text-[17px] border border-gray-300 rounded-lg block w-full py-2.5 px-3' placeholder='Enter stock' />
            </div>
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Short Description</label>
            <textarea name='short_description' placeholder='Enter short description' className='text-[17px] border border-gray-300 rounded-lg block w-full py-2.5 px-3' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Description</label>
            <textarea name='description' placeholder='Enter description' className='text-[17px] border border-gray-300 rounded-lg block w-full py-2.5 px-3 min-h-[150px]' />
          </div>
          <div className='flex mb-6 flex-col'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Image</label>
            <div className='relative w-60 h-60 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100'>
              <div className='relative w-full h-full overflow-hidden bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-4'>
                <div className='absolute inset-0 bg-slate-300 animate-pulse' />
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.8s_linear_infinite]' />
                <div className='relative z-10 flex flex-col items-center gap-3'>
                  <FaRegImage className='text-slate-600' size={55} />
                  <div className='w-28 h-3 bg-slate-400 rounded-full' />
                  <div className='w-20 h-3 bg-slate-400 rounded-full' />
                </div>
              </div>
              <input type='file' accept='image/*' className='absolute inset-0 opacity-0 cursor-pointer' />
            </div>
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
