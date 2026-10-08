'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: 'Rohini Deshmane',
    email: 'example@example.com',
    phone: '8888888888',
    address: 'Pune',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast('Profile updated successfully!')
  }

  return (
    <div className=" bg-white">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-[#1f1f1f]">My Profile</h2>
          <p className="mt-2 text-sm text-dark-gray">Manage your personal information and contact details.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-gray-100 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-100 px-4 py-3 text-sm outline-none focus:border-orange-dim"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-100 px-4 py-3 text-sm outline-none focus:border-orange-dim"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-100 px-4 py-3 text-sm outline-none focus:border-orange-dim"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-sm border border-gray-100 px-4 py-3 text-sm outline-none focus:border-orange-dim"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"

            className="rounded-sm bg-orange-dim px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9724d]"
          >
            Update Profile
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}
