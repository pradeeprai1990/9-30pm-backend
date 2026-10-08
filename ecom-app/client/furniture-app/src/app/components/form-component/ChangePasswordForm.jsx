'use client'

import { useState } from 'react'

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.password || !formData.confirmPassword) {
      setMessage('Please fill in both password fields.')
      return
    }

    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters long.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Password reset successfully!')
    setFormData({ password: '', confirmPassword: '' })
    setTimeout(() => {
      window.location.href = '/login'
    }, 1500)
  }

  return (
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full">
            <div className="mb-6">
              <h2 className="font-playfair text-xl font-semibold text-[#1f1f1f]">Change password</h2>
            </div>

            {message ? (
              <div className="mb-4 rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm text-orange-dim">
                {message}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-gray-100 p-5">
              <div>
                <label htmlFor="currentPassword" className="mb-2 block text-sm font-medium">
                  Current password
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter Current password"
                  className="w-full rounded-sm border border-gray-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium">
                  New password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-full rounded-sm border border-gray-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="w-full rounded-sm border border-gray-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
              </div>

              <button
                type="submit"
                className="rounded-sm bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
              >
                Change password
              </button>
            </form>
          </div>
        </div>
  )
}

