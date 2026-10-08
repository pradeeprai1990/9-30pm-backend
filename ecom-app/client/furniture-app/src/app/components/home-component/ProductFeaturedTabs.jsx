"use client";
import React, { useState } from "react";
import ProductCard from "../product-component/ProductCard";

export default function ProductFeaturedTabs({data}) {
  let [product, setProduct] = useState(data);
  let [productTab, setProductTab] = useState("Featured");

  let featuredProduct = [1,2,3,4,5,6,7,8];
  let newArrival = [9,10,11,12,13,14,15];
  let onSale = [16,17,18,19];

  return (
    <>
      <div className="w-full max-w-[1140px] mx-auto px-2 py-5">
        <div className="flex items-center justify-center">
          <div
            className={`flex 
                    relative 
                    border-2 
                    border-gray-200 
                    before:content-empty 
                    before:absolute 
                    before:w-[200px] 
                    before:h-[2px] 
                    before:right-full 
                    before:top-1/2
                    before:-translate-y-1/2
                    before:bg-gradient-to-r
                    before:from-transparent
                    before:to-[#ebebeb]
                    after:content-empty
                    after:absolute
                    after:w-[200px]
                    after:h-[2px]
                    after:left-[100.4%]
                    after:top-1/2
                    after:-translate-y-1/2
                    after:bg-gradient-to-r
                    after:from-[#ebebeb]
                    after:to-transparent
                    `}
          >
            <button
                onClick={()=>setProductTab("Featured")}
                fdprocessedid="tocldq"
                className={`font-playfair font-bold text-lg px-5 py-2 
                ${
                    productTab == "Featured" ? 
                    "relative text-orange-dim before:content-empty before:absolute before:top-[-2px] before:left-[-2px] before:w-[104%] before:h-[109%] before:left before:border-2 before:border-orange-dim" : 
                    "text-dark-gray"
                }`}>
              Featured
            </button>
            <button 
                onClick={()=>setProductTab("NewArrival")}
                fdprocessedid="7turpg"
                className={`font-playfair font-bold text-lg px-5 py-2 
                ${
                    productTab == "NewArrival" ? 
                    "relative text-orange-dim before:content-empty before:absolute before:top-[-2px] before:left-[-2px] before:w-[103%] before:h-[109%] before:left before:border-2 before:border-orange-dim" : 
                    "text-dark-gray border-l-2 border-gray-200"
                }`}>
              New Arrivals
            </button>
            <button 
                onClick={()=>setProductTab("Onsale")}
                className={`font-playfair font-bold text-lg px-5 py-2 
                ${
                    productTab == "Onsale" ? 
                    "relative text-orange-dim before:content-empty before:absolute before:top-[-2px] before:left-[-2px] before:w-[104%] before:h-[109%] before:left before:border-2 before:border-orange-dim" : 
                    "text-dark-gray border-l-2 border-gray-200"
                }`}>
              Onsale
            </button>
          </div>
        </div>
        {
            productTab == "Featured" &&
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
                {
                    product.filter(obj=>featuredProduct.includes(obj.id)).map((obj, index)=>{
                        return(
                            <ProductCard key={index} productData={obj} /> 
                        )
                    })
                }
            </div>
        }
        {
            productTab == "NewArrival" &&
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
                {
                    product.filter(obj=>newArrival.includes(obj.id)).map((obj, index)=>{
                        return(
                            <ProductCard key={index} productData={obj} /> 
                        )
                    })
                }
            </div>
        }
        {
            productTab == "Onsale" &&
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5">
                {
                    product.filter(obj=>onSale.includes(obj.id)).map((obj, index)=>{
                        return(
                            <ProductCard key={index} productData={obj} /> 
                        )
                    })
                }
            </div>
        }
      </div>
    </>
  );
}


