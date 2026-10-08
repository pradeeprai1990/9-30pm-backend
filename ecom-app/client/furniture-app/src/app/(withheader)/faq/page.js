import FAQs from '@/app/components/home-component/FAQs'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function faq() {
  return (
    <>
        <section className='lg:max-w-[1140px] container mx-auto py-4 px-6'>
            <div className='grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6' >
                <h2 className='font-playfair font-semibold text-4xl'>Frequently Questions</h2>
                <nav className="flex" aria-label="Breadcrumb">
                <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className='font-rubik text-dark-gray text-sm'>
                        <Link href={"/"}>
                        Home
                        </Link>
                    </li>
                    <li className='font-rubik text-orange-dim text-sm'>
                        <div className="flex items-center">
                        <MdOutlineKeyboardArrowRight className='mr-2' /> Frequently Questions
                        </div>
                    </li> 
                </ol>
                </nav>
            </div>
        </section>
        <section>
            <FAQs />
        </section>
    </>
  )
}
