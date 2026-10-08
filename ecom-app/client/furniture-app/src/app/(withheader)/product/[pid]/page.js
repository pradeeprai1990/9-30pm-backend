import SingleProduct from '@/app/components/product-component/SingleProduct';
import React from 'react'
import { getProducts } from '../../api-services/product.api';


export default async function ProductDetails() {
  
  let data = await getProducts();
  
  return (
    <>   
        {
            data ?
            <SingleProduct pdata={data} />
            :
            <div className='font-playfair text-7xl'>
                No Product Found
            </div>
        }     
                     
    </>
  )
}
