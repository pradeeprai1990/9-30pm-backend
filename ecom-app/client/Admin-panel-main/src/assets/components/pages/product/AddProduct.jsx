import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCloudArrowUp } from 'react-icons/fa6'

function NoPreview({ text = 'Click to upload image' }) {
  return (
    <div className='flex flex-col items-center gap-2 text-slate-400'>
      <FaCloudArrowUp className='text-3xl' />
      <p className='text-sm font-medium text-slate-500'>No Preview</p>
      <p className='text-xs'>{text}</p>
    </div>
  )
}

export default function AddProduct() {

  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;
  let [parentCategory, setParentCategory] = useState([]);
  let [subCategoryData, setsubCategoryData] = useState([]);
  let [subsubCategoryData, setsubsubCategoryData] = useState([]);
  let [materialData, setMaterialData] = useState([]);
  let [colorData, setColorData] = useState([]);

  let [imagePreview, setImagePreview] = useState('');
  let [backImagePreview, setBackImagePreview] = useState('');
  let [galleryPreview, setGalleryPreview] = useState([]);

  let showImagePreview = (event) => {
    let file = event.target.files[0];
    setImagePreview(file ? URL.createObjectURL(file) : '');
  };

  let showBackImagePreview = (event) => {
    let file = event.target.files[0];
    setBackImagePreview(file ? URL.createObjectURL(file) : '');
  };

  let showGalleryPreview = (event) => {
    let files = Array.from(event.target.files);
    setGalleryPreview(files.map((file) => URL.createObjectURL(file)));
  };


  let getParents = () => {
    axios
      .get(`${apiBaseUrl}product/parent`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParentCategory(finalRes.data);
      });
  };

  let getSubCategory = (event) => {
    let parentId = event.target.value;
    axios
      .get(`${apiBaseUrl}product/sub-category/${parentId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setsubCategoryData(finalRes.data);
      });
  };


  let getSubsubCategory = (event) => {
    let subCatId = event.target.value;
    axios
      .get(`${apiBaseUrl}product/sub-sub-category/${subCatId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setsubsubCategoryData(finalRes.data);
      });
  };


  let getMaterial = (event) => {

    axios
      .get(`${apiBaseUrl}product/material`)
      .then((res) => res.data)
      .then((finalRes) => {
        setMaterialData(finalRes.data);
      });
  };

  let getColors = (event) => {

    axios
      .get(`${apiBaseUrl}product/colors`)
      .then((res) => res.data)
      .then((finalRes) => {
        setColorData(finalRes.data);
      });
  };

  let handleProduct = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target); //Form Data
    axios
      .post(`${apiBaseUrl}product/create`, formData)
      .then((res) => res.data)
      .then((finalRes) => {

        // if (finalRes.status) {
        //   iziToast.show({
        //     title: "Success",
        //     message: finalRes.message,
        //     position: "topRight",
        //     color: "green",
        //   });
        //   Navigate("/sub-sub-category/view");
        // } else {
        //   iziToast.error({
        //     title: "Error",
        //     message: finalRes.error.name,
        //     position: "topRight",
        //   });
        // }
      });
  };



  useEffect(() => {
    getParents()
    getColors()
    getMaterial()
  }, [])


  const inputClass = 'block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
  const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'
  const uploadBoxClass = 'flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-slate-300 bg-slate-50 p-2 transition hover:border-indigo-400 hover:bg-indigo-50/40'

  return (
    <div className='min-h-[680px] w-full bg-slate-50 px-5 py-8'>
      <div className='mx-auto max-w-[1500px]'>
        <div className='mb-4 text-sm text-slate-500'>Home / Product / <span className='font-medium text-slate-800'>Add</span></div>
        <form onSubmit={handleProduct} className='grid grid-cols-1 gap-x-6 gap-y-5 rounded-md border border-slate-200 bg-white/100 p-5 shadow-sm lg:grid-cols-3'>
          <div className='space-y-5'>
            <div>
              <span className={labelClass}>Main Image</span>
              <label className={uploadBoxClass}>
                <input type="file" name='image' accept='image/*' className='hidden' onChange={showImagePreview} />
                {imagePreview ? (
                  <img src={imagePreview} alt='Main Preview' className='h-full w-full object-contain' />
                ) : (
                  <NoPreview />
                )}
              </label>
            </div>

            <div>
              <span className={labelClass}>Back Image</span>
              <label className={uploadBoxClass}>
                <input type="file" name='backImage' accept='image/*' className='hidden' onChange={showBackImagePreview} />
                {backImagePreview ? (
                  <img src={backImagePreview} alt='Back Preview' className='h-full w-full object-contain' />
                ) : (
                  <NoPreview />
                )}
              </label>
            </div>

            <div>
              <span className={labelClass}>Gallery Images</span>
              <label className={`${uploadBoxClass} !h-28`}>
                <input type="file" name='gallery' accept='image/*' multiple className='hidden' onChange={showGalleryPreview} />
                <NoPreview text='Click to upload multiple images' />
              </label>
              {galleryPreview.length > 0 && (
                <div className='mt-3 grid grid-cols-4 gap-2'>
                  {galleryPreview.map((src, index) => {
                    return (
                      <div key={index} className='aspect-square overflow-hidden rounded-md border border-slate-200 bg-slate-50'>
                        <img src={src} alt={`Gallery ${index + 1}`} className='h-full w-full object-cover' />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className='grid content-start grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:col-span-2'>
            <div>
              <label htmlFor='product_name' className={labelClass}>Product Name</label>
              <input id='product_name' name='name' type='text' autoComplete='off' className={inputClass} placeholder='Product Name' />
            </div>
            <div>
              <label htmlFor='parent' className={labelClass}>Select Parent Category</label>
              <select
                onChange={getSubCategory}
                id='parent' name='parent' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                {parentCategory.map((parent, index) => {
                  return <option value={parent._id}>{parent.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor='subCategory' className={labelClass}>Select Sub Category</label>
              <select
                onChange={getSubsubCategory}
                id='subCategory' name='subCategory' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                {subCategoryData.map((obj, index) => {
                  return <option value={obj._id}>{obj.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor='subSubCategory' className={labelClass}>Select Sub Sub Category</label>
              <select id='subSubCategory' name='subSubCategory' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                {subsubCategoryData.map((obj, index) => {
                  return <option value={obj._id}>{obj.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor='material' className={labelClass}>Select material</label>
              <select id='material' multiple name='material[]' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                {materialData.map((obj, index) => {
                  return <option value={obj._id}>{obj.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor='color' className={labelClass}>Select Color</label>
              <select id='color' multiple name='color[]' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                {colorData.map((obj, index) => {
                  return <option value={obj._id}>{obj.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor='productType' className={labelClass}>Select Product Type</label>
              <select id='productType' name='productType' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                <option value='Featured'>Featured</option>
                <option value='New Arrivals'>New Arrivals</option>
                <option value='Onsale'>Onsale</option>
              </select>
            </div>
            <div>
              <label htmlFor='bestSelling' className={labelClass}>Is Best Selling</label>
              <select id='bestSelling' name='bestSelling' defaultValue='' className={inputClass}>
                <option value=''>Nothing Selected</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>

            <div>
              <label htmlFor='actualPrice' className={labelClass}>Actual Price</label>
              <input id='actualPrice' name='actualPrice' type='number' min='0' step='0.01' className={inputClass} placeholder='Actual Price' />
            </div>
            <div>
              <label htmlFor='salePrice' className={labelClass}>Sale Price</label>
              <input id='salePrice' name='salePrice' type='number' min='0' step='0.01' className={inputClass} placeholder='Sale Price' />
            </div>
            <div>
              <label htmlFor='stocks' className={labelClass}>Total In Stocks</label>
              <input id='stocks' name='stocks' type='number' min='0' className={inputClass} placeholder='Total In Stocks' />
            </div>
            <div>
              <label htmlFor='order' className={labelClass}>Order</label>
              <input id='order' name='order' type='number' min='0' className={inputClass} placeholder='Order' />
            </div>
          </div>

          <div className='lg:col-span-3'>
            <label htmlFor='description' className={labelClass}>Description</label>
            <textarea id='description' name='description' className={`${inputClass} min-h-36 resize-y`} />
          </div>

          <div className='lg:col-span-3'>
            <button type='submit' className='rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}
