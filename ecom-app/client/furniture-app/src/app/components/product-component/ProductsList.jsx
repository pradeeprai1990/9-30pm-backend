"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductsList({data}) {
  let [product, setProduct] = useState(data)
  let dispatch = useDispatch();
  return (
    <>
          {                    
            product.map((obj, index)=>{
              return(
                <ProductCard key={index} productData={obj} /> 
              )
            })
          } 
          <ToastContainer />
    </>
  )
}

