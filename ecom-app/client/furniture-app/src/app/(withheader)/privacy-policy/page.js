import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function PrivacyPolicy() {
  return (
    <>
        <section className='w-full lg:max-w-[1140px] container mx-auto py-4 px-6'>
            <div className='grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6' >
                <h2 className='font-playfair font-semibold text-4xl'>Privacy Policy</h2>
                <nav className="flex" aria-label="Breadcrumb">
                <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className='font-rubik text-dark-gray text-sm'>
                        <Link href={"/"}>
                        Home
                        </Link>
                    </li>
                    <li className='font-rubik text-orange-dim text-sm'>
                        <div className="flex items-center">
                        <MdOutlineKeyboardArrowRight className='mr-2' /> Privacy Policy
                        </div>
                    </li> 
                </ol>
                </nav>
            </div>
        </section>

        <section>
          <div className="w-full lg:max-w-[1140px] container mx-auto py-4 px-6">
            <h2 className='font-playfair text-xl mb-5'>Who we are</h2>
            <p className='font-rubik text-md/6 mb-4'>
                Our website address is:{" "}
                <Link 
                    href={"http://localhost:3000/furniture"}
                    className='text-red-800'
                >http://localhost/furniture</Link>
            </p>
            <h2 className='font-playfair text-xl mb-5'>What personal data we collect and why we collect it</h2>
            <h3 className='font-playfair text-xl mb-5'>Comments</h3>
            <p className='font-rubik text-md/6 mb-4'>
                When visitors leave comments on the site we collect the data shown in the
                comments form, and also the visitor’s IP address and browser user agent
                string to help spam detection.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                An anonymized string created from your email address (also called a hash)
                may be provided to the Gravatar service to see if you are using it. The
                Gravatar service privacy policy is available here:
                https://automattic.com/privacy/. After approval of your comment, your
                profile picture is visible to the public in the context of your comment.
            </p>
            <h3 className='font-playfair text-xl mb-5'>Media</h3>
            <p className='font-rubik text-md/6 mb-4'>
                If you upload images to the website, you should avoid uploading images with
                embedded location data (EXIF GPS) included. Visitors to the website can
                download and extract any location data from images on the website.
            </p>
            <h3 className='font-playfair text-xl mb-5'>Cookies</h3>
            <p className='font-rubik text-md/6 mb-4'>
                If you leave a comment on our site you may opt-in to saving your name, email
                address and website in cookies. These are for your convenience so that you
                do not have to fill in your details again when you leave another comment.
                These cookies will last for one year.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                If you have an account and you log in to this site, we will set a temporary
                cookie to determine if your browser accepts cookies. This cookie contains no
                personal data and is discarded when you close your browser.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                When you log in, we will also set up several cookies to save your login
                information and your screen display choices. Login cookies last for two
                days, and screen options cookies last for a year. If you select “Remember
                Me”, your login will persist for two weeks. If you log out of your account,
                the login cookies will be removed.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                If you edit or publish an article, an additional cookie will be saved in
                your browser. This cookie includes no personal data and simply indicates the
                post ID of the article you just edited. It expires after 1 day.
            </p>
            <h3 className='font-playfair text-xl mb-5'>Embedded content from other websites</h3>
            <p className='font-rubik text-md/6 mb-4'>
                Articles on this site may include embedded content (e.g. videos, images,
                articles, etc.). Embedded content from other websites behaves in the exact
                same way as if the visitor has visited the other website.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                These websites may collect data about you, use cookies, embed additional
                third-party tracking, and monitor your interaction with that embedded
                content, including tracking your interaction with the embedded content if
                you have an account and are logged in to that website.
            </p>
            <h2 className='font-playfair text-xl mb-5'>How long we retain your data</h2>
            <p className='font-rubik text-md/6 mb-4'>
                If you leave a comment, the comment and its metadata are retained
                indefinitely. This is so we can recognize and approve any follow-up comments
                automatically instead of holding them in a moderation queue.
            </p>
            <p className='font-rubik text-md/6 mb-4'>
                For users that register on our website (if any), we also store the personal
                information they provide in their user profile. All users can see, edit, or
                delete their personal information at any time (except they cannot change
                their username). Website administrators can also see and edit that
                information.
            </p>
            <h2 className='font-playfair text-xl mb-5'>What rights you have over your data</h2>
            <p className='font-rubik text-md/6 mb-4'>
                If you have an account on this site, or have left comments, you can request
                to receive an exported file of the personal data we hold about you,
                including any data you have provided to us. You can also request that we
                erase any personal data we hold about you. This does not include any data we
                are obliged to keep for administrative, legal, or security purposes.
            </p>
            <h2 className='font-playfair text-xl mb-5'>Where we send your data</h2>
            <p className='font-rubik text-md/6 mb-4'>
                Visitor comments may be checked through an automated spam detection service.
            </p>
          </div>

        </section>
    
    </>
  )
}
