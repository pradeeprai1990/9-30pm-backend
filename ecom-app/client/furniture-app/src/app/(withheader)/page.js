import Image from "next/image";
import Slider from "../components/home-component/Slider";
import Link from "next/link";
import { IoEarthSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import CustomerFeedback from "../components/home-component/CustomerFeedback";
import Collections from "../components/home-component/Collections";
import BestSellingProduct from "../components/home-component/BestSellingProduct";
import { getProducts } from "./api-services/product.api";
import ProductFeaturedTabs from "../components/home-component/ProductFeaturedTabs";

export default async function Home() {

  let data = await getProducts();//server side render
  return (
    <>
      {/* Home Slider */}
      <section>
        <Slider />
      </section>

      {/* Collection Section */}
      <section className="bg-white border-b-1 border-gray-200">
        <Collections />
      </section>

      {/* Product Featured tab section */}
      <section>
        <ProductFeaturedTabs data={data}/>
      </section>

      {/* Shopping banner */}
      <section className="bg-[url(/Trends-banner.jpg)] bg-no-repeat bg-scroll bg-center bg-cover">
        <div className="flex items-center h-[512px] max-w-[1000px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mx-auto">
            <div className="flex w-full">
                <div className="">
                  <h2 className="font-playfair text-5xl font-bold mb-4">New Trending Collection</h2>
                  <p className="font-rubik text-base text-dark-gray mb-12">We Believe That Good Design is Always in Season</p>
                  <button className="uppercase text-Rubik font-base text-sm/12 text-orange-dim hover:text-white bg-transparent hover:bg-orange-dim border-2 border-orange-dim px-10"
                  fdprocessedid="bwnp1e">
                    <Link href={'/product'}>Shopping Now</Link> 
                  </button>
                </div>
            </div>
        </div>     
      </section>

      {/* BestSelling slider */}
      <section className="best-selling-slider">
        <BestSellingProduct data={data} />
      </section>

      {/* Shipping section */}
      <section className="bg-gray-50 ">
        <div className="py-8 px-4 mx-auto max-w-[1120px] sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3  md:gap-12 md:space-y-0">
            <div className="text-center">
              <div className="inline-flex justify-center items-center place-items-center mb-4 w-10 h-10 border-1 rounded-full bg-primary-100 lg:h-15 lg:w-15">
                <IoEarthSharp className="text-gray-600 text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold font-playfair text-center">Free Shipping</h3>
              <p className="text-gray-500 font-rubik text-center">
                Free shipping on all order
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex justify-center items-center place-items-center mb-4 w-10 h-10 border-1 rounded-full bg-primary-100 lg:h-15 lg:w-15">
                <IoMdCheckmarkCircleOutline className="text-gray-600 text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold font-playfair text-center">Money Return</h3>
              <p className="text-gray-500 font-rubik text-center">
                Back guarantee under 7 days
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex justify-center items-center place-items-center mb-4 w-10 h-10 border-1 rounded-full bg-primary-100 lg:h-15 lg:w-15">
                <GoClock className="text-gray-600 text-xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold font-playfair text-center">Online Support</h3>
              <p className="text-gray-500 font-rubik text-center">
                Support online 24 hours a day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section>
        <div className='lg:max-w-[900px] container mx-auto py-12 px-6 text-center'>
          <CustomerFeedback />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-[1120px] sm:py-16 lg:px-6">
          <h2 className="text-2xl font-playfair font-bold mb-2 text-center">
              Our Newsletter
          </h2>
          <p className="text-gray-500 font-rubik text-center">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <div className="inline-flex justify-center items-center w-full py-8 ">
            <form className="inline-flex font-rubik text-sm">
              <input
              type="email"
              placeholder="Email address..."
              className="flex-1 px-4 py-3 border-2 border-gray-200 outline-none w-100"
              fdprocessedid="rf2zy7"
              />

              <button
                type="button"
                fdprocessedid="hwx5d7"
                className="bg-orange-dim border-2 border-orange-dim text-white px-8 py-3 hover:bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}
