"use client"
import axios from 'axios'
import iziToast from 'izitoast'
import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordForm() {
   const [isSubmitting, setIsSubmitting] = useState(false)
   let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

   let handleForgotPassword = (event) => {
    setIsSubmitting(true)
      event.preventDefault()
      let obj = {
         email: event.target.email.value,
      }

      axios.post(`${apiBaseUrl}auth/forgot-password`, obj)
         .then((res) => res.data)
         .then((finalRes) => {
            if (finalRes.status) {
               iziToast.show({
                  title: 'Success',
                  message: finalRes.message,
                  position: 'topRight',
               });
               event.target.reset()
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
   }
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#577064]">Account assistance</p>
        <h2 className="font-playfair text-3xl font-semibold text-[#202923] sm:text-4xl">Forgot password?</h2>
        <p className="mt-2 text-sm leading-6 text-[#66716a]">Enter your account email to request a password reset link.</p>
      </div>

      <form onSubmit={handleForgotPassword} className="space-y-5">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#303a33]">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-sm border border-[#d9dfd8] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full rounded-sm bg-[#344d3f] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263b2f]">
          {isSubmitting ? 'Sending...' : 'Send reset link'}
        </button>
      </form>

      <div className="mt-7 border-t border-[#e6e9e5] pt-6 text-center text-sm text-[#66716a]">
        Remembered your password?{' '}
        <Link href="/login" className="font-semibold text-[#496b59] hover:text-[#304b3c]">Back to sign in</Link>
      </div>
    </div>
  )
}
