import Link from 'next/link'
import React from 'react'

export default function Collections() {
  return (
    <>
        <div className="lg:max-w-[1140px] container mx-auto py-10 px-6 text-center">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
                <Link href={"/"}>
                <img src="/banner2.webp" alt="Chair Collection" />
                </Link> 
                <figcaption className="absolute px-4 top-5 left-2 text-left">
                    <p className="text-sm/7 text-black font-rubik">Design Creative</p>
                    <h2 className="text-2xl/7 text-black font-bold font-playfair">Chair Collection</h2>
                </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
                <Link href={"/"}>
                <img src="/banner1.webp" alt="Chair Collection" />
                </Link> 
                <figcaption className="absolute px-4 top-5 left-2 text-left">
                    <p className="text-sm/7 text-black font-rubik">Bestselling Products</p>
                    <h2 className="text-2xl/7 text-black font-bold font-playfair">Chair Collection</h2>
                </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
                <Link href={"/"}>
                <img src="/banner2.webp" alt="Chair Collection" />
                </Link> 
                <figcaption className="absolute px-4 top-5 left-2 text-left">
                    <p className="text-sm/7 text-black font-rubik">Onsale Products</p>
                    <h2 className="text-2xl/7 text-black font-bold font-playfair">Chair Collection</h2>
                </figcaption>
            </figure>
            </div>
        </div>
    </>
  )
}
