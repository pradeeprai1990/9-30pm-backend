"use client"
import { useState } from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRazorpay } from "react-razorpay";
// Sample order data — replace with cart data from the Redux store once the cart slice exists
const orderItems = [
    {
        id: 1,
        name: "Caroline Study Tables",
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
        sale_price: 2500,
        quantity: 1,
    },
    {
        id: 2,
        name: "Evan Coffee Table",
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
        sale_price: 1800,
        quantity: 2,
    },
]

const SHIPPING_CHARGE = 100

const initialAddress = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
}

const inputClass = "bg-white border-1 border-gray-200 text-gray-900 text-sm block w-full p-2.5"

export default function CheckoutPage() {
    const { error, isLoading, Razorpay } = useRazorpay();

    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [shippingAddress, setShippingAddress] = useState(initialAddress)

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL
    const handleAddressChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value })
    }

    const subTotal = orderItems.reduce((total, item) => total + item.sale_price * item.quantity, 0)
    const grandTotal = subTotal + SHIPPING_CHARGE
    let token = useSelector((allStore) => allStore.auth.token)

    const placeOrder = (e) => {
        e.preventDefault()
        let orderData = {
            orderItems,
            shippingAddress,
            paymentMethod,
            totalAmount: grandTotal,
        }
        axios.post(
            `${apiBaseUrl}order/place-order`,
            orderData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then((res) => res.data)
            .then((finalRes) => {

                if (paymentMethod == "cod") {
                    if (finalRes.status) {

                    }
                }
                else {


                    let { amount_due, currency, id } = finalRes.data


                    const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                        amount: amount_due,          // Amount in paise (e.g., 50000 paise = ₹500)
                        currency: currency,
                        name: "Furniture Website",
                        description: "Furniture Website",
                        order_id: id,            // Generated Order ID from backend
                        handler: function (response) {
                            // Verify payment API.
                            axios.post(
                                `${apiBaseUrl}order/verify-payment`,
                                response)
                                .then((res) => res.data)
                                .then((verifyRes) => {
                                    if (verifyRes.status) {
                                        toast.success("Payment successful and verified!");
                                    } else {
                                        toast.error("Payment verification failed. Please contact support.");
                                    }
                                })
                                .catch((error) => {
                                    console.error("Error verifying payment:", error);
                                    toast.error("An error occurred while verifying payment. Please try again.");
                                });

                            // Always send response.razorpay_payment_id, order_id, and signature
                            // to your backend to verify the integrity of the payment.
                        },
                        prefill: {
                            name: "Pradeep rai",
                            email: "pradeep.9997@gamil.com",
                            contact: "9999999999",
                        },
                        theme: {
                            color: "#F37254",
                        },
                    };

                    const razorpayInstance = new Razorpay(options);
                    razorpayInstance.open();

            }
        })
}

return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[1120px]">
            <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
                <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
                    Checkout
                </h2>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
                        <li className="font-rubik text-dark-gray">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="font-rubik text-orange-dim">
                            <div className="flex items-center">
                                <MdOutlineKeyboardArrowRight className="mr-2" /> Checkout
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
                {/* Left side: Order data */}
                <div className="bg-white shadow rounded p-6">
                    <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                        Your Order
                    </h3>

                    <div className="divide-y divide-gray-100">
                        {orderItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 py-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded object-cover"
                                />
                                <div className="flex-1">
                                    <p className="font-rubik font-semibold">{item.name}</p>
                                    <p className="font-rubik text-sm text-dark-gray">
                                        Rs. {item.sale_price} × {item.quantity}
                                    </p>
                                </div>
                                <p className="font-rubik font-semibold">
                                    Rs. {item.sale_price * item.quantity}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="font-rubik border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-dark-gray">Subtotal</span>
                            <span>Rs. {subTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-dark-gray">Shipping</span>
                            <span>Rs. {SHIPPING_CHARGE}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                            <span>Total</span>
                            <span className="text-orange-dim">Rs. {grandTotal}</span>
                        </div>
                    </div>
                </div>

                {/* Right side: Shipping address + payment method */}
                <form onSubmit={placeOrder} className="space-y-8 h-fit">
                    <div className="bg-white shadow rounded p-6">
                        <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                            Shipping Address
                        </h3>

                        <div className="font-rubik grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-1 text-sm font-medium">Full Name *</label>
                                <input type="text" id="name" name="name" value={shippingAddress.name} onChange={handleAddressChange} className={inputClass} placeholder="Full Name" required />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block mb-1 text-sm font-medium">Mobile Number *</label>
                                <input type="tel" id="mobile" name="mobile" value={shippingAddress.mobile} onChange={handleAddressChange} className={inputClass} placeholder="10 digit mobile number" pattern="[0-9]{10}" title="Enter a 10 digit mobile number" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                                <input type="email" id="email" name="email" value={shippingAddress.email} onChange={handleAddressChange} className={inputClass} placeholder="Email" />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="address" className="block mb-1 text-sm font-medium">Address *</label>
                                <textarea id="address" name="address" rows={3} value={shippingAddress.address} onChange={handleAddressChange} className={inputClass} placeholder="House no., street, area, landmark" required />
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-1 text-sm font-medium">City *</label>
                                <input type="text" id="city" name="city" value={shippingAddress.city} onChange={handleAddressChange} className={inputClass} placeholder="City" required />
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-1 text-sm font-medium">State *</label>
                                <input type="text" id="state" name="state" value={shippingAddress.state} onChange={handleAddressChange} className={inputClass} placeholder="State" required />
                            </div>
                            <div>
                                <label htmlFor="pincode" className="block mb-1 text-sm font-medium">Pincode *</label>
                                <input type="text" id="pincode" name="pincode" value={shippingAddress.pincode} onChange={handleAddressChange} className={inputClass} placeholder="6 digit pincode" pattern="[0-9]{6}" title="Enter a 6 digit pincode" required />
                            </div>
                            <div>
                                <label htmlFor="country" className="block mb-1 text-sm font-medium">Country *</label>
                                <input type="text" id="country" name="country" value={shippingAddress.country} onChange={handleAddressChange} className={inputClass} placeholder="Country" required />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded p-6">
                        <h3 className="font-playfair text-2xl font-semibold mb-4 border-b-3 border-orange-dim pb-2">
                            Payment Method
                        </h3>

                        <div className="font-rubik space-y-3">
                            <label
                                className={`flex items-center gap-3 border rounded p-4 cursor-pointer ${paymentMethod === "cod" ? "border-orange-dim bg-orange-50" : "border-gray-200"}`}
                            >
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="accent-orange-dim w-4 h-4"
                                />
                                <div>
                                    <p className="font-semibold">Cash on Delivery (COD)</p>
                                    <p className="text-sm text-dark-gray">Pay with cash when your order is delivered.</p>
                                </div>
                            </label>

                            <label
                                className={`flex items-center gap-3 border rounded p-4 cursor-pointer ${paymentMethod === "online" ? "border-orange-dim bg-orange-50" : "border-gray-200"}`}
                            >
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="online"
                                    checked={paymentMethod === "online"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="accent-orange-dim w-4 h-4"
                                />
                                <div>
                                    <p className="font-semibold">Online Payment</p>
                                    <p className="text-sm text-dark-gray">Pay securely using UPI, card or net banking.</p>
                                </div>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="font-rubik mt-6 w-full rounded bg-orange-dim py-3 font-semibold text-white hover:opacity-90"
                        >
                            {paymentMethod === "cod" ? "Place Order" : `Pay Rs. ${grandTotal}`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
