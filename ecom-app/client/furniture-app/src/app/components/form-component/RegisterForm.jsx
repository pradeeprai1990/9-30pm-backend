"use client"
import axios from 'axios';
import iziToast from 'izitoast';
import Link from 'next/link'

export default function RegisterForm() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    console.log(apiBaseUrl);

    let handleRegsiter = (event) => {
        event.preventDefault()
        let obj = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            address: event.target.address.value
        }

        axios.post(`${apiBaseUrl}auth/register`, obj)
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
            })
    }
    return (
        <div>
            <div className="mb-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#577064]">Join our community</p>
                <h2 className="font-playfair text-3xl font-semibold text-[#202923] sm:text-4xl">Create account</h2>
                <p className="mt-2 text-sm leading-6 text-[#66716a]">Add your details to set up your home account.</p>
            </div>

            <form onSubmit={handleRegsiter} className="space-y-4">
                <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#303a33]">Full name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your full name" className="w-full rounded-sm border border-[#d9dfd8] px-4 py-3 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#303a33]">Email address</label>
                        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-sm border border-[#d9dfd8] px-4 py-3 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#303a33]">Phone number</label>
                        <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Your phone number" className="w-full rounded-sm border border-[#d9dfd8] px-4 py-3 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-[#303a33]">Delivery address</label>
                    <textarea id="address" name="address" autoComplete="street-address" required rows="2" placeholder="Street, city, postal code" className="w-full resize-y rounded-sm border border-[#d9dfd8] px-4 py-3 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
                </div>

                <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[#303a33]">Password</label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Create a password" className="w-full rounded-sm border border-[#d9dfd8] px-4 py-3 text-sm outline-none transition placeholder:text-[#929a94] focus:border-[#496b59] focus:ring-2 focus:ring-[#496b59]/15" />
                </div>

                <button type="submit" className="w-full rounded-sm bg-[#344d3f] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263b2f]">
                    Create account
                </button>
            </form>

            <div className="mt-6 border-t border-[#e6e9e5] pt-5 text-center text-sm text-[#66716a]">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-[#496b59] hover:text-[#304b3c]">Sign in</Link>
            </div>
        </div>
    )
}
