'use client'

import { clearCredentials } from "@/redux/authSlice"
import axios from "axios"
import iziToast from "izitoast"
import { redirect } from "next/navigation"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ChangePasswordForm() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL
  let token = useSelector((allStore) => allStore.auth.token)
    let dispatch=useDispatch()
  const handleSubmit = (e) => {
     e.preventDefault()
    let obj = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
      confirmPassword: e.target.confirmPassword.value
    }

    axios.post(
      `${apiBaseUrl}auth/change-password`,
      obj,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          iziToast.show({
            title: 'Success',
            message: finalRes.message,
            position: 'topRight',
          });
          e.target.reset()
          dispatch(clearCredentials())   
          redirect('/login')
        }
        else {
          iziToast.error({
            title: 'Error',
            message: finalRes.message,
            position: 'topRight',
          });
        }
       

  


        setIsSubmitting(false)
      })
    // console.log('====================================');
    // console.log(obj);
    // console.log('====================================');
   
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full">
        <div className="mb-6">
          <h2 className="font-playfair text-xl font-semibold text-[#1f1f1f]">Change password</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-gray-100 p-5">
          <div>
            <label htmlFor="currentPassword" className="mb-2 block text-sm font-medium">
              Current password
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
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
              name="newPassword"
              type="password"
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
              placeholder="Re-enter password"
              className="w-full rounded-sm border border-gray-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
          >
            {isSubmitting ? 'Saving...' : 'Save new password'}
          </button>
        </form>
      </div>
    </div>
  )
}
