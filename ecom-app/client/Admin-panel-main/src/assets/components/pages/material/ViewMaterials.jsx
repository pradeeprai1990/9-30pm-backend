import axios from 'axios'
import iziToast from 'izitoast'
import { useEffect, useState } from 'react'
import { FaFilter, FaPenToSquare } from 'react-icons/fa6'
import { Link } from 'react-router'

export default function ViewMaterials() {
  const [data, setData] = useState([])
  const [ids, setIds] = useState([])
  const apiBaseUrl = import.meta.env.VITE_APIBASEPATH

  const getMaterials = () => {
    axios
      .get(`${apiBaseUrl}material/view`)
      .then((response) => response.data)
      .then((result) => setData(result.data ?? []))
  }

  useEffect(() => {
    getMaterials()
  }, [])

  const handleCheck = (event) => {
    const { checked, value } = event.target
    setIds((currentIds) =>
      checked ? [...new Set([...currentIds, value])] : currentIds.filter((id) => id !== value),
    )
  }

  const handleSelectAll = (event) => {
    setIds(event.target.checked ? data.map((material) => material._id) : [])
  }

  const handleBulkAction = (action) => {
    if (ids.length === 0) {
      iziToast.error({
        title: 'Error',
        message: `Please select at least one material to ${action === 'delete' ? 'delete' : 'change status'}`,
        position: 'topRight',
      })
      return
    }

    const request = action === 'delete'
      ? axios.post(`${apiBaseUrl}material/delete`, { ids })
      : axios.post(`${apiBaseUrl}material/change-status`, { ids })

    request
      .then((response) => response.data)
      .then((result) => {
        if (result.status) {
          iziToast.show({
            title: 'Success',
            message: result.message,
            position: 'topRight',
            color: 'green',
          })
          getMaterials()
          setIds([])
        } else {
          iziToast.error({
            title: 'Error',
            message: result.error?.name ?? `Unable to ${action} materials`,
            position: 'topRight',
          })
        }
      })
  }

  return (
    <section className='w-full'>
      <nav className='flex border-b bg-white px-6 py-3 shadow-sm'>
        <ol className='inline-flex items-center space-x-2 text-gray-600'>
          <li><a className='text-md font-medium hover:text-indigo-600'>Home</a></li>
          <li>/</li>
          <li><a className='text-md font-medium hover:text-indigo-600'>Material</a></li>
          <li>/</li>
          <li className='text-md font-medium text-gray-900'>View Material</li>
        </ol>
      </nav>

      <div className='p-4'>
        <div id='material-filter' className='hidden py-4 relative px-6 my-3 rounded-lg border border-slate-200 w-full bg-white shadow-sm'>
          <p className='font-semibold py-2 text-[20px]'>Filter</p>
          <div className='flex items-end gap-6'>
            <div className='mb-5'>
              <label className='block mb-2 font-medium text-gray-700'>Material Name</label>
              <input type='text' placeholder='Enter Material Name' className='text-[17px] border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' />
            </div>
            <button className='text-white bg-slate-500 hover:bg-slate-600 px-6 py-2.5 rounded-lg transition-all mb-5'>Clear</button>
            <button className='text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg shadow-sm transition-all mb-5'>Apply</button>
          </div>
        </div>

        <div className='bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300'>
          <div className='text-[26px] font-semibold'>View Material</div>
          <div className='flex gap-3 items-center'>
            <button type='button' className='flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all'><FaFilter /> Filter</button>
            <button type='button' onClick={() => handleBulkAction('delete')} className='text-white disabled:bg-slate-400 bg-red-700 hover:bg-red-800 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Delete</button>
            <button type='button' onClick={() => handleBulkAction('status')} className='text-white disabled:bg-slate-400 bg-green-700 hover:bg-green-800 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Change Status</button>
          </div>
        </div>

        <div className='border border-t-0 rounded-b-md border-slate-300 overflow-x-auto'>
          <div className='min-w-[900px] text-center'>
            <div className='grid grid-cols-[100px_70px_repeat(4,minmax(120px,1fr))_100px_100px] text-sm uppercase bg-gray-50 border-b text-gray-700'>
              <div className='px-2 py-3 font-semibold flex items-center justify-center gap-2'><input type='checkbox' onChange={handleSelectAll} checked={data.length > 0 && ids.length === data.length} className='w-4 h-4 cursor-pointer' />Select</div>
              <div className='px-2 py-3 font-semibold'>S. No.</div>
              <div className='px-2 py-3 font-semibold'>Material Name</div>
              <div className='px-2 py-3 font-semibold'>Order</div>
              <div className='px-2 py-3 font-semibold'>Status</div>
              <div className='px-2 py-3 font-semibold'>Action</div>
            </div>

            {data.map((material, index) => (
              <div key={material._id} className='grid grid-cols-[100px_70px_repeat(2,minmax(120px,1fr))_100px_100px] bg-white border-b text-gray-700'>
                <div className='px-2 py-4'><input type='checkbox' value={material._id} checked={ids.includes(material._id)} onChange={handleCheck} className='material-row-check w-4 h-4 cursor-pointer' /></div>
                <div className='px-2 py-4'>{index + 1}</div>
                <div className='px-2 py-4'>{material.name}</div>
                <div className='px-2 py-4'>{material.order}</div>
                <div className={`px-2 py-4 font-semibold ${material.status ? 'text-green-600' : 'text-red-600'}`}>{material.status ? 'Active' : 'Deactive'}</div>
                <div className='px-2 py-4'><Link to={`/material/edit/${material._id}`}><FaPenToSquare className='text-[gold] text-xl' /></Link></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
