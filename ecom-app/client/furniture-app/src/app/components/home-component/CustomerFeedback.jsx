"use client"
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { FaStar } from "react-icons/fa";

export default function CustomerFeedback() {
  return (
    <div>
        <div className="mb-4">
            <h2 className="text-2xl font-playfair font-bold mb-2">
                What Our Custumers Say ?
            </h2>
        </div>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
        <SwiperSlide>
            <div>
                <p className='text-dark-gray font-rubik px-2 text-base/7'>
                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                </p>
            </div>
            <div className='flex place-content-center'>
                <div className='grid grid-cols-1 gap-3'>
                    <img className="w-24 h-24 mb-6 rounded-full" src="/testimonial2.jpg" alt="Kathy Young"/>
                    <h5 className="text-base font-semibold tracking-tight font-playfair uppercase">Kathy Young</h5>
                    <span className="text-sm font-rubik text-dark-gray">CEO of SunPark</span>
                    <div className='text-sm flex justify-center gap-1 mb-4'>
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                    </div>
                    <div className='p-4'> </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='text-dark-gray font-rubik px-2 text-base/7'>
                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                </p>
            </div>
            <div className='flex place-content-center'>
                <div className='grid grid-cols-1 gap-3'>
                    <img className="w-24 h-24 mb-6 rounded-full" src="/testimonial1.png" alt="Kathy Young"/>
                    <h5 className="text-base font-semibold tracking-tight font-playfair uppercase">Kathy Young</h5>
                    <span className="text-sm font-rubik text-dark-gray">CEO of SunPark</span>
                    <div className='text-sm flex justify-center gap-1 mb-4'>
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                    </div>
                    <div className='p-4'> </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p className='text-dark-gray font-rubik px-2 text-base/7'>
                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                </p>
            </div>
            <div className='flex place-content-center'>
                <div className='grid grid-cols-1 gap-3'>
                    <img className="w-24 h-24 mb-6 rounded-full" src="/testimonial3.jpg" alt="Kathy Young"/>
                    <h5 className="text-base font-semibold tracking-tight font-playfair uppercase">Kathy Young</h5>
                    <span className="text-sm font-rubik text-dark-gray">CEO of SunPark</span>
                    <div className='text-sm flex justify-center gap-1 mb-4'>
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                        <FaStar className='text-orange-dim' />
                    </div>
                    <div className='p-4'> </div>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}
