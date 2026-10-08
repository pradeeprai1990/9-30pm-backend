import CustomerFeedback from '@/app/components/home-component/CustomerFeedback'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function AboutUs() {
  return (
    <main>
      <section className='w-full lg:max-w-[1140px] container mx-auto py-4 px-6'>
        <div className='grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6' >
            <h2 className='font-playfair font-semibold text-4xl'>About Us</h2>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className='font-rubik text-dark-gray text-sm'>
                    <Link href={"/"}>
                    Home
                    </Link>
                </li>
                <li className='font-rubik text-orange-dim text-sm'>
                    <div className="flex items-center">
                    <MdOutlineKeyboardArrowRight className='mr-2' /> About Us
                    </div>
                </li> 
               </ol>
            </nav>
        </div>
        <figure className='py-8'>
            <img src="/about-us/about-banner.jpg" alt="" />
        </figure>
        <div className='text-center text-sm /7 px-1'>
            <h1 className='text-2xl font-playfair font-semibold mb-2'>Welcome To Monsta!</h1>
            <p className='font-rubik text-dark-gray mb-4'>               
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
            </p>
            <p className='font-rubik font-normal text-orange-dim italic tracking-normal'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
        </div> 
      </section> 
    
      <section className="bg-white">
        <div className="lg:max-w-[1140px] container mx-auto py-4 px-6 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-playfair font-semibold mb-2">
              Why choose us?
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center">
                <img src="/about-us/about-icon1.jpg" alt="" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">100% Money Back Guarantee</h3>
              <p className="text-sm text-dark-gray">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <img src="/about-us/about-icon2.jpg" alt="Online Support 24/7" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">Online Support 24/7</h3>
              <p className="text-sm text-dark-gray">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <img src="/about-us/about-icon3.jpg" alt="Creative-Design" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">Creative-Design</h3>
              <p className="text-sm text-dark-gray">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4">
                <img src="/about-us/about-icon4.jpg" alt="What Do We Do?" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">What Do We Do?</h3>
              <p className="text-sm text-dark-gray">
                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4">
                <img src="/about-us/about-icon5.jpg" alt="Our Mission" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">Our Mission</h3>
              <p className="text-sm text-dark-gray">
                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4">
                <img src="/about-us/about-icon6.jpg" alt="History Of Us" />
              </div>
              <h3 className="mb-4 text-sm font-semibold font-playfair">History Of Us</h3>
              <p className="text-sm text-dark-gray">
                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='lg:max-w-[900px] container mx-auto py-4 px-6 text-center'>
          <CustomerFeedback />
        </div>
      </section>

    </main>
  )
}
