'use client'

import { useState } from 'react'

export default function Addresses() {
  const [formData, setFormData] = useState({
    billingName: '',
    billingEmail: '',
    billingMobile: '',
    billingAddress: '',
    billingCountry: '',
    billingState: '',
    billingCity: '',
    billingPincode: '',
    shippingName: '',
    shippingEmail: '',
    shippingMobile: '',
    shippingAddress: '',
    shippingCountry: '',
    shippingState: '',
    shippingCity: '',
    shippingPincode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Address updated successfully!')
  }

  return (
    <div className=" bg-white">
      <div className="mb-6">
        <p className="mt-2 text-sm text-dark-gray">The following addresses will be used on the checkout page by default.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-[#f0e2d4] bg-white p-5">
            <h3 className="mb-4 text-xl font-semibold font-playfair">Billing Address</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Full name</label>
                <input
                  type='text'
                  name="billingName"
                  value={formData.billingName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Email</label>
                <input
                  type="email"
                  name="billingEmail"
                  value={formData.billingEmail}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Email</label>
                <input
                  type="tel"
                  name="billingMobile"
                  value={formData.billingMobile}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="8888888888"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Address</label>
                <input
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="Flat 12, Building Name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Country</label>
                <input
                name="billingCountry"
                value={formData.billingCountry}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">State</label>
                <input
                name="billingState"
                value={formData.billingState}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">City</label>
                <input
                name="billingCity"
                value={formData.billingCity}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Pincode</label>
                <input
                name="billingPincode"
                value={formData.billingPincode}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                placeholder="400001"
                />
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[#f0e2d4] bg-white p-5">
            <h3 className="mb-4 text-xl font-semibold font-playfair">Shipping Address</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Full name</label>
                <input
                  type='text'
                  name="shippingName"
                  value={formData.shippingName}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Email</label>
                <input
                  type="email"
                  name="shippingEmail"
                  value={formData.shippingEmail}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Email</label>
                <input
                  type="tel"
                  name="shippingMobile"
                  value={formData.shippingMobile}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="8888888888"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Address</label>
                <input
                  type='text'
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                  placeholder="Flat 12, Building Name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Country</label>
                <input
                    type='text'
                    name="shippingCountry"
                    value={formData.shippingCountry}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                    placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">State</label>
                <input
                    type='text'
                    name="shippingState"
                    value={formData.shippingState}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                    placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">City</label>
                <input
                    type='text'
                    name="shippingCity"
                    value={formData.shippingCity}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                    placeholder="Mumbai"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">Pincode</label>
                <input
                    type='number'
                    name="shippingPincode"
                    value={formData.shippingPincode}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-[#e5d8ca] bg-white px-4 py-3 text-sm outline-none focus:border-orange-dim"
                    placeholder="400001"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-sm bg-orange-dim px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
