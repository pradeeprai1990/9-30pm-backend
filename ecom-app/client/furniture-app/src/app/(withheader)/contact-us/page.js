import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaFax } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
        <section className='w-full max-w-[1120px] mx-auto px-2'>
            <div className='grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6' >
                <h2 className='font-playfair font-semibold text-4xl'>Contact Us</h2>
                <nav className="flex" aria-label="Breadcrumb">
                <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className='font-rubik text-dark-gray text-sm'>
                        <Link href={"/"}>
                        Home
                        </Link>
                    </li>
                    <li className='font-rubik text-orange-dim text-sm'>
                        <div className="flex items-center">
                        <MdOutlineKeyboardArrowRight className='mr-2' /> Contact Us
                        </div>
                    </li> 
                </ol>
                </nav>
            </div>
        </section>

        <section className='py-8 lg:py-16 px-2 mx-auto max-w-[1120px]'>
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7155.251016816475!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1781692221070!5m2!1sen!2sin"
            width={1120}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
        </section>

        <section className='w-full max-w-[1120px] mx-auto py-4 px-2'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                <div className=''>
                    <h2 className='text-2xl font-playfair font-bold border-b-1 border-gray-200 py-4'>
                        Contact Us
                    </h2>
                    <div className='grid grid-cols-1 justify-start items-start gap-3 font-rubik text-dark-gray text-sm'>
                        <div className='inline-flex items-center text-dark-gray border-b-1 border-gray-200 py-3'>
                            <FaFax className='mr-3'/> Address : Claritas est etiam processus dynamicus
                        </div>
                        <div className='inline-flex items-center text-dark-gray border-b-1 border-gray-200 py-3'>
                            <FaFax className='mr-3'/> 98745612330
                        </div>
                        <div className='inline-flex items-center text-dark-gray border-b-1 border-gray-200 py-3'>
                            <FaFax className='mr-3'/> furniture@gmail.com
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-playfair font-bold py-4 mb-3'>
                        Tell us your question
                    </h2>
                    <div>
                        <form>
                          <div className='mb-3'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                            Your Name (required)
                            </label>
                            <input
                            type="text"
                            id="name"
                            className="bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full p-2.5"
                            placeholder="name *"
                            required
                            />
                          </div>  
                          <div className='mb-3'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                            Your Email (required)
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full p-2.5"
                            placeholder="email"
                            required
                            />
                          </div> 
                          <div className='mb-3'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                            Your Mobile Number (required)
                            </label>
                            <input
                            type="tel"
                            id="mobile"
                            className="bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full p-2.5"
                            placeholder="Mobile Number"
                            required
                            />
                          </div>
                          <div className='mb-3'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                            Subject
                            </label>
                            <input
                            type="text"
                            id="subject"
                            className="bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full p-2.5"
                            placeholder="Subject *"
                            required
                            />
                          </div>
                          <div className='mb-3'>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                            Your Message
                            </label>
                            <textarea 
                            name="message" 
                            id="message" 
                            rows={3}
                            placeholder={'Message *'}
                            className="bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full h-50 p-2.5 "
                            />
                          </div>
                          <div>
                            <button 
                            type="submit"
                            id="send_enquiry"
                            className='px-8 py-3 text-sm bg-gray-900 hover:bg-orange-dim text-white rounded'
                            >
                                Send
                            </button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
