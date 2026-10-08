"use client"
import React, { useState } from 'react'
import OrderTable from './OrderTable'
import Addresses from './Addresses'
import Profile from './Profile'
import ChangePasswordForm from '../form-component/ChangePasswordForm'

export default function DashboardTabs() {
  let [activeTab, setActiveTab] = useState("Dashboard")
  return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-[25%_auto] gap-8'>
        <div>
        <nav>
            <ol className='grid grid-cols-1 gap-3'>
            <li
                onClick={()=>setActiveTab("Dashboard")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "Dashboard" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                My Dashboard
            </li>
            <li
                onClick={()=>setActiveTab("Orders")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "Order" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                Orders
            </li>
            <li
                onClick={()=>setActiveTab("Address")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "Address" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                Addresses
            </li>
            <li
                onClick={()=>setActiveTab("Profile")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "Profile" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                My Profile
            </li>
            <li
                onClick={()=>setActiveTab("ChangePassword")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "ChangePassword" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                Change Password
            </li>
            <li
                onClick={()=>setActiveTab("Logout")}
                className={`px-6 py-3 text-white text-sm rounded-sm
                    ${
                        activeTab == "Logout" ?
                        "bg-orange-dim" : 
                        "bg-foreground hover:bg-orange-dim"
                    }`}
            >
                Logout
            </li>
            </ol>
        </nav>
        </div>
        <div>
            {
                activeTab == "Dashboard" &&
                <div>
                    <h1 className='text-xl font-playfair font-bold mb-4'>My Dashboard</h1>
                    <p>
                    From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.
                    </p>
                </div>
            }
            {
                activeTab == "Orders" &&
                <div>
                    <h1 className='text-xl font-playfair font-bold mb-4'>Orders</h1>
                    <OrderTable />
                </div>
            }
            {
                activeTab == "Address" &&
                <div>
                    <Addresses />
                </div>
            }
            {
                activeTab == "Profile" &&
                <div>
                    <Profile />
                </div>
            }
            {
                activeTab == "ChangePassword" &&
                <div>
                    <ChangePasswordForm />
                </div>
            }
        </div>
    </div>
  )
}
