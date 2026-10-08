"use client"
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import ProductCard from "../product-component/ProductCard";

export default function BestSellingProduct({data}) {
    let [product, setProduct] = useState(data)   
     
  return (
    <>
      <div className="w-full max-w-[1140px] mx-auto px-2 py-10">
        <div className="flex items-center gap-1 mb-8">
          <h2 className="text-3xl font-playfair font-bold">
            Bestselling Products
          </h2>
          <div className="h-[2px] bg-gray-200 flex-1 mx-5"></div>
          <div className="flex gap-2  ">
            <button className="prev-btn flex items-end justify-center text-xl font-rubik">
              <MdKeyboardArrowLeft />
            </button>
            <button className="next-btn flex items-end justify-center text-xl font-rubik">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn"
          }}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },

            1280: {
              slidesPerView: 5,
            },
          }}
        >
            
            {
                product.map((obj, index)=>{
                  return(
                   <SwiperSlide key={obj.id}>
                        <ProductCard key={index} productData={obj}/>
                   </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
      </div>
    </>
  );
}
