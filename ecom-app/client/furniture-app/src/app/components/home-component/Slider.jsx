"use client"
import React from 'react'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <div className='home-banner'>
        <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
        <SwiperSlide>
            <img src="/slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slider3.jpg" alt="" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}
