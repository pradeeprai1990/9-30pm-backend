
import React from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DashboardTabs from '@/app/components/dashboard-component/DashboardTabs';

export default function Dashboard() {

  return (
    <div className='className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8"'>
      <div className="mx-auto max-w-[1120px]">

        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Dashboard
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> Dashboard
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div>
            <DashboardTabs />
        </div>
      </div>
    </div>
  )
}
