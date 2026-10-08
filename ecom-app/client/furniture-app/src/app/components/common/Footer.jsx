import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";

const navFooterLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Online Store" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/term-of-use", label: "Terms Of Use" },
];

export default function Footer() {
  return (
    
    <footer className="bg-neutral-primary border-t border-gray-200 py-6">
      <div className="mx-auto lg:max-w-[1140px] px-4 py-4">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-[30%_auto_auto_30%]">
          <div>
            <h2 className="mb-6 text-xl font-semibold font-playfair">
              Contact Us
            </h2>
            <p className='font-rubik text-sm/8 text-dark-gray tracking-wide'>Address: Claritas est etiam processus dynamicus</p>
            <p className='font-rubik text-sm/8 text-dark-gray tracking-wide'>Phone: 98745612330</p>
            <p className='font-rubik text-sm/8 text-dark-gray tracking-wide'>Email: furniture@gmail.com</p>
            <div className="flex mt-4 lg:justify-start sm:justify-center gap-2 text-lg">
              <Link href={'/'} className='border border-gray-200 hover:border-orange-dim hover:text-dim-orange rounded-full p-2'>
                <FaFacebookF className='text-gray-400 hover:text-orange-dim' />
              </Link>
              <Link href={'/'} className='border border-gray-200 hover:border-orange-dim hover:text-dim-orange rounded-full p-2'>
                <FaInstagram className='text-gray-400 hover:text-orange-dim' />
              </Link>
              <Link href={'/'} className='border border-gray-200 hover:border-orange-dim hover:text-dim-orange rounded-full p-2'>
                <FaTwitter className='text-gray-400 hover:text-orange-dim' />
              </Link>
              <Link href={'/'} className='border border-gray-200 hover:border-orange-dim hover:text-dim-orange rounded-full p-2'>
                <FaYoutube className='text-gray-400 hover:text-orange-dim' />
              </Link>
              <Link href={'/'} className='border border-gray-200 hover:border-orange-dim hover:text-dim-orange rounded-full p-2'>
                <FaTelegram className='text-gray-400 hover:text-orange-dim' />
              </Link>   
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-playfair">
              Information
            </h2>
            <ul className="font-rubik text-sm/8 text-dark-gray">
              <li>
                <Link href={"/about-us"} className="hover:text-orange-dim">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/contact-us"} className="hover:text-orange-dim">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={"/faq"} className="hover:text-orange-dim">
                  Frequently Questions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-playfair">
              My Account
            </h2>
            <ul className="font-rubik text-sm/8 text-dark-gray">
              <li>
                <Link href={"/dashboard"} className="hover:text-orange-dim">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link href={"/wishlist"} className="hover:text-orange-dim">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-playfair">
              Top Rated Products
            </h2>
            <ul>
              <li>
                <div className="grid grid-cols-[30%_auto] gap-2">
                  <div className="simple_product_thumb">
                      <Link href="http://localhost:3000/product/harper-l-shaped-wooden-sofa-with-drawer">
                          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661762520951Group%201.jpg" alt="" />
                      </Link>
                  </div>
                  <div className="simple_product_content">
                      <div className="font-rubik text-sm text-dark-gray">
                        <Link href={'http://localhost:3000/product/harper-l-shaped-wooden-sofa-with-drawer'}>L Shape Sofa</Link>
                      </div>
                      <div className="product_name">
                          <h3 className='font-playfair text-base text-gray-700 mb-2'>
                            <Link href={"http://localhost:3000/product/harper-l-shaped-wooden-sofa-with-drawer"}>
                              Harper L Shaped Wooden Sofa with Drawer
                            </Link>
                          </h3>
                      </div>
                      <div className="flex gap-2">
                          <span className="font-rubik text-sm font-normal text-dark-gray line-through">Rs. 85,000</span>
                          <span className="font-rubik text-sm font-semibold text-orange-dim">Rs. 76,000</span>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="mx-auto lg:max-w-[1140px] px-4 py-4 border-y border-gray-200">
        <nav className="hidden md:flex items-center justify-center gap-8">
          {/* {Desktop Menu} */}
          {navFooterLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md tracking-wide font-rubik transition text-dark-gray hover:text-orange-dim"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <div className="mx-auto lg:max-w-[1140px] grid grid-cols-1 place-items-center px-4 py-6">
          <span className='font-rubik text-sm/8 text-dark-gray tracking-wide mb-2'>
            All Rights Reserved By Furniture | © 2026
          </span>
          <img src="/papyel2.png" alt="Payment Methos"/>
        </div>
      </div>
    </footer>


  )
}
