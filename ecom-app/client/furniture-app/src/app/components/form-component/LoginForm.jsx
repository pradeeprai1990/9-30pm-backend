'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/redux/authSlice'
import axios from 'axios'

export default function LoginForm() {

  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  const handleSubmit = async (event) => {

    setIsSubmitting(true)
    event.preventDefault()
    let obj={
      email:event.target.email.value,
      password:event.target.password.value,
    }
    axios.post(`${apiBaseUrl}auth/login`,obj)
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        setError('')
        console.log(finalRes);
        
      }
      else{
        setError(finalRes.message)
      }

      setIsSubmitting(false)
    })


   
  }

  return (
      <div>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#577064]">Welcome back</p>
            <h2 className="font-playfair text-3xl font-semibold text-[#202923] sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm leading-6 text-[#66716a]">Enter the email and password associated with your account.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#303a33]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-sm border border-[#d9dfd8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#303a33]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full rounded-sm border border-[#d9dfd8] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15"
              />
            </div>

            <div className="flex justify-end text-sm">
              <Link href="/forgot-password" className="font-medium text-[#496b59] hover:text-[#304b3c]">
                Forgot password?
              </Link>
            </div>

            {error ? (
              <p role="alert" className="text-sm text-red-700" aria-live="polite">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm bg-[#344d3f] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263b2f] disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-7 border-t border-[#e6e9e5] pt-6 text-center text-sm text-[#66716a]">
            Do not have an account?{' '}
            <Link href="/register" className="font-semibold text-[#496b59] hover:text-[#304b3c]">
              Create account
            </Link>
          </div>
      </div>
  )
}
