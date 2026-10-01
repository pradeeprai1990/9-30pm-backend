import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaEye, FaFilter, FaPenToSquare, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router'

// Sample data shaped like the product model (populated refs) until the view API is ready


export default function ViewProducts() {

  const [ids, setIds] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showFilter, setShowFilter] = useState(false)

  const handleCheck = (event) => {
    const { checked, value } = event.target
    setIds((currentIds) => (checked ? [...new Set([...currentIds, value])] : currentIds.filter((id) => id !== value)))
  }

  const handleSelectAll = (event) => {
    setIds(event.target.checked ? data.map((product) => product._id) : [])
  }

 let [data, setData] = useState([]);
  let [path, setPath] = useState("");
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;

  let getProduct = () => {
    axios
      .get(`${apiBaseUrl}product/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);
        setPath(finalRes.path);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);



  return (
    <section className='w-full'>
      <nav className='flex border-b bg-white px-6 py-3 shadow-sm'>
        <ol className='inline-flex items-center space-x-2 text-gray-600'>
          <li><a className='text-md font-medium hover:text-indigo-600'>Home</a></li>
          <li>/</li>
          <li><a className='text-md font-medium hover:text-indigo-600'>Product</a></li>
          <li>/</li>
          <li className='text-md font-medium text-gray-900'>View Product</li>
        </ol>
      </nav>

      <div className='p-4'>
        {showFilter && (
          <div className='py-4 relative px-6 my-3 rounded-lg border border-slate-200 w-full bg-white shadow-sm'>
            <p className='font-semibold py-2 text-[20px]'>Filter</p>
            <div className='flex items-end gap-6'>
              <div className='mb-5'>
                <label className='block mb-2 font-medium text-gray-700'>Product Name</label>
                <input type='text' placeholder='Enter Product Name' className='text-[17px] border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3' />
              </div>
              <button className='text-white bg-slate-500 hover:bg-slate-600 px-6 py-2.5 rounded-lg transition-all mb-5'>Clear</button>
              <button className='text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-lg shadow-sm transition-all mb-5'>Apply</button>
            </div>
          </div>
        )}

        <div className='bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300'>
          <div className='text-[26px] font-semibold'>View Product</div>
          <div className='flex gap-3 items-center'>
            <button type='button' onClick={() => setShowFilter(!showFilter)} className='flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all'><FaFilter /> Filter</button>
            <button disabled={ids.length === 0} className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Delete All</button>
            <button disabled={ids.length === 0} className='text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all'>Change Status</button>
          </div>
        </div>

        <div className='border border-t-0 rounded-b-md border-slate-300 overflow-x-auto bg-white'>
          <table className='w-full min-w-[1100px] text-sm text-center text-gray-700'>
            <thead className='text-xs uppercase bg-gray-50 border-b text-gray-700'>
              <tr>
                <th className='px-3 py-3'>
                  <input
                    type='checkbox'
                    className='w-4 h-4 cursor-pointer'
                    checked={data.length > 0 && ids.length === data.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className='px-3 py-3'>S. No.</th>
                <th className='px-3 py-3'>Image</th>
                <th className='px-3 py-3 text-left'>Product Name</th>
                <th className='px-3 py-3 text-left'>Category</th>
                <th className='px-3 py-3'>Price</th>
                <th className='px-3 py-3'>Stock</th>
                <th className='px-3 py-3'>Type</th>
                <th className='px-3 py-3'>Order</th>
                <th className='px-3 py-3'>Status</th>
                <th className='px-3 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((product, index) => (
                  <tr key={product._id} className='border-b hover:bg-slate-50'>
                    <td className='px-3 py-3'>
                      <input type='checkbox' className='w-4 h-4 cursor-pointer' value={product._id} checked={ids.includes(product._id)} onChange={handleCheck} />
                    </td>
                    <td className='px-3 py-3'>{index + 1}</td>
                    <td className='px-3 py-3'>
                      {product.image
                        ? <img src={path+product.image} alt={product.name} className='w-12 h-12 object-cover rounded-md border mx-auto' />
                        : '-'}
                    </td>
                    <td className='px-3 py-3 text-left font-medium text-gray-900'>
                      {product.name}
                      {product.bestSelling && <span className='ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-700'>Best Selling</span>}
                    </td>
                    <td className='px-3 py-3 text-left'>
                      <div>{product.parent?.name ?? '-'}</div>
                      <div className='text-xs text-gray-500'>
                        {[product.subCategory?.name, product.subSubCategory?.name].filter(Boolean).join(' / ')}
                      </div>
                    </td>
                    <td className='px-3 py-3'>
                      <div className='font-semibold'>₹{product.salePrice}</div>
                      {product.actualPrice > product.salePrice && (
                        <div className='text-xs text-gray-400 line-through'>₹{product.actualPrice}</div>
                      )}
                    </td>
                    <td className={`px-3 py-3 ${product.stocks > 0 ? '' : 'text-red-600 font-semibold'}`}>
                      {product.stocks > 0 ? product.stocks : 'Out of stock'}
                    </td>
                    <td className='px-3 py-3'>{product.productType ?? '-'}</td>
                    <td className='px-3 py-3'>{product.order ?? '-'}</td>
                    <td className='px-3 py-3'>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${product.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {product.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className='px-3 py-3'>
                      <div className='flex justify-center items-center gap-3'>
                        <button type='button' title='View Details' onClick={() => setSelectedProduct(product)} className='text-indigo-600 hover:text-indigo-800 text-lg'>
                          <FaEye />
                        </button>
                        <button type='button' title='Edit'>
                          <Link to={`/product/edit/${product._id}`}>
                              <FaPenToSquare className='text-[gold] text-lg' />
                          </Link>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className='px-3 py-6 text-gray-500'>No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedProduct && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' onClick={() => setSelectedProduct(null)}>
          <div className='bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col' onClick={(event) => event.stopPropagation()}>
            <div className='flex justify-between items-center px-5 py-3 border-b bg-slate-100 rounded-t-lg'>
              <h2 className='text-[20px] font-semibold'>Product Details</h2>
              <button type='button' onClick={() => setSelectedProduct(null)} className='text-gray-500 hover:text-gray-800 text-xl'><FaXmark /></button>
            </div>

            <div className='overflow-y-auto p-5'>
              <div className='flex gap-5 mb-5'>
                <img src={path+selectedProduct.image} alt='Front' className='w-32 h-32 object-cover rounded-md border' />
                {path+selectedProduct.backImage && <img src={path+selectedProduct.backImage} alt='Back' className='w-32 h-32 object-cover rounded-md border' />}
                <div>
                  <h3 className='text-xl font-semibold'>{selectedProduct.name}</h3>
                  <p className='mt-2'>
                    <span className='text-lg font-semibold text-indigo-600'>₹{selectedProduct.salePrice}</span>
                    <span className='ml-2 text-sm text-gray-400 line-through'>₹{selectedProduct.actualPrice}</span>
                  </p>
                  <p className={`mt-2 font-semibold ${selectedProduct.status ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedProduct.status ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>

              <table className='w-full text-sm text-left'>
                <tbody>
                  <tr className='border-b'><th className='py-2 w-[170px] text-gray-600'>Category</th><td>{selectedProduct.parent?.name}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Sub Category</th><td>{selectedProduct.subCategory?.name}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Sub Sub Category</th><td>{selectedProduct.subSubCategory?.name}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Material</th><td>{selectedProduct.material.map((item) => item.name).join(', ')}</td></tr>
                  <tr className='border-b'>
                    <th className='py-2 text-gray-600'>Colors</th>
                    <td>
                      <div className='flex gap-3'>
                        {selectedProduct.color.map((item) => (
                          <span key={item.name} className='flex items-center gap-1'>
                            <span className='w-4 h-4 rounded-full border' style={{ backgroundColor: item.code }}></span>
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Product Type</th><td>{selectedProduct.productType}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Best Selling</th><td>{selectedProduct.bestSelling ? 'Yes' : 'No'}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Actual Price</th><td>₹{selectedProduct.actualPrice}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Sale Price</th><td>₹{selectedProduct.salePrice}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Stock</th><td>{selectedProduct.stocks}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Order</th><td>{selectedProduct.order}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600'>Created On</th><td>{new Date(selectedProduct.date).toLocaleDateString()}</td></tr>
                  <tr className='border-b'><th className='py-2 text-gray-600 align-top'>Description</th><td className='py-2'>{selectedProduct.description}</td></tr>
                </tbody>
              </table>

              {selectedProduct.gallery.length > 0 && (
                <div className='mt-4'>
                  <p className='font-semibold text-gray-600 text-sm mb-2'>Gallery</p>
                  <div className='flex flex-wrap gap-3'>
                    {selectedProduct.gallery.map((image, index) => (
                      <img key={index} src={path+image} alt='' className='w-20 h-20 object-cover rounded-md border' />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex justify-end px-5 py-3 border-t'>
              <button type='button' onClick={() => setSelectedProduct(null)} className='text-white bg-slate-500 hover:bg-slate-600 px-5 py-2 rounded-lg text-sm'>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
