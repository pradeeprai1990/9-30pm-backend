import axios from 'axios'
import iziToast from 'izitoast'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function AddMaterial() {
  const { id } = useParams()
  const [editData, setEditData] = useState(null)
  const navigate = useNavigate()
  const apiBaseUrl = import.meta.env.VITE_APIBASEPATH

  const handleSubmit = (event) => {
    event.preventDefault()
    const material = {
      name: event.target.name.value,
      order: event.target.order.value,
    }
    const request = id
      ? axios.put(`${apiBaseUrl}material/update/${id}`, material)
      : axios.post(`${apiBaseUrl}material/create`, material)

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
          navigate('/material/view')
        } else {
          iziToast.error({
            title: 'Error',
            message: result.error?.name ?? 'Unable to save material',
            position: 'topRight',
          })
        }
      })
  }

  useEffect(() => {
    if (id) {
      axios
        .get(`${apiBaseUrl}material/details/${id}`)
        .then((response) => response.data)
        .then((result) => setEditData(result.data))
    } else {
      setEditData(null)
    }
  }, [id, apiBaseUrl])

  return (
    <div className='w-full min-h-[680px] px-4 bg-slate-50 py-10'>
      <div className='mx-auto'>
        <h3 className='text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500'>
          Add New Material
        </h3>
        <form onSubmit={handleSubmit} className='border border-slate-200 border-t-0 bg-white p-6 rounded-b-lg shadow-sm'>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Material Name</label>
            <input type='text' name='name' defaultValue={editData?.name} autoComplete='off' className='text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' placeholder='Enter Material name' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-gray-700'>Order</label>
            <input type='number' name='order' min='1' defaultValue={editData?.order} autoComplete='off' className='text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' placeholder='Enter order number' />
          </div>
          <button type='submit' className='mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all'>
            {id ? 'Update Material' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}
