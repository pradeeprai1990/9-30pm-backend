"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductCard from './ProductCard';

export default function SingleProduct({pdata}) {
   
    let {pid} = useParams();    
    let productData = pdata;
    
    let product = pdata.find((obj)=>obj.slug==pid);  
  return (
   <>
    {
    product &&
    <div className="min-h-screen bg-white font-rubik" key={product.id}>
    
      <div className='grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6' >
        <h2 className='font-playfair font-semibold text-4xl'>{product.name}</h2>
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className='inline-flex items-center font-rubik text-dark-gray text-sm'>
                <Link href={"/"}>
                Home
                </Link>
                <MdOutlineKeyboardArrowRight className=' ml-2 mr-2' /> {product.category_name}
            </li>
            <li className='font-rubik text-orange-dim text-sm'> 
                <div className="flex items-center">
                <MdOutlineKeyboardArrowRight className='mr-2' /> {product.name}
                </div>
            </li> 
            </ol>
        </nav>
      </div>

      
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Product Image Section */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 md:h-[500px] flex items-center justify-center relative group">
              <img 
                src={product.thumbnail} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-gray-200 rounded-lg cursor-pointer hover:border-orange-dim border-2 border-transparent transition">
                <img src={product.thumbnail} alt="thumb1" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-20 h-20 bg-gray-200 rounded-lg cursor-pointer hover:border-orange-dim border-2 border-transparent transition">
                <img src={product.thumbnail} alt="thumb2" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-20 h-20 bg-gray-200 rounded-lg cursor-pointer hover:border-orange-dim border-2 border-transparent transition">
                <img src={product.thumbnail} alt="thumb3" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-4"> 
            <div>
              <h1 className="text-2xl font-bold font-playfair text-foreground mb-2">
                {product.name}
              </h1>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-md text-gray-400 line-through">
                  Rs. {product.original_price}
                </span>
                <span className="text-lg font-bold text-orange-dim">
                  Rs. {product.sale_price}
                </span>
               
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                Save ₹{product.original_price - product.sale_price}
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock ? (
                <>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700 text-sm font-semibold">In Stock ({product.stock} available)</span>
                </>
              ) : (
                <>
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-red-700 font-semibold">Out of Stock</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-dark-gray leading-7 text-sm font-rubik">
              {product.description}
            </p>

            {/* Features */}
            <div className="rounded-lg">
              <ul className='leading-7 text-sm font-rubik text-dark-gray'>
                <li><span>Dimension:</span> 72L * 32H * 30W</li>
                <li><span>Estimate Delivery Days:</span> 40-45 Days</li>
                <li><span>Category:</span> Coffee Table Sets</li>
                <li><span>Color:</span> Weathered Walnut</li>
                <li><span>Material:</span> Mahogany Wood</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold font-playfair text-orange-dim mb-2 border-b-1 border-gray-200 pb-3">
            Description
          </h2>
          <p className="text-dark-gray leading-7 text-sm font-rubik">
            {product.description}
          </p>
        </div>
      </div>
      
      {/* Related Product */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold font-playfair text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                pdata.
                filter(item => [6,10,15,19].includes(item.id)).
                map((products,index)=>(
                    <ProductCard key={index} productData={products} /> 
                ))
            }
            
          </div> 
        </div>
      </div>
    </div>
    } 
   </> 
  )
}
