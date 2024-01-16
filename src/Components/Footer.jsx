import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div className=' pb-2 shadow-sm bg-gray-100'>
        <div className=' md:flex'>
          <div className=' w-full md:w-1/5 p-2 md:p-5 gap-4 flex flex-col text-sm'>
            <div className=' flex justify-center items-center'>
              <div className=' bg-[#0D6EFD] p-1 md:p-2 text-white text-xl rounded-md md:text-2xl  '> <IoBagOutline /></div>
              <div className=' text-[#8CB7F5] md:text-3xl text-2xl font-bold'> Brand</div>
            </div>
            <div className='text-xs sm:text-lg text-center'>
              Best information about the company gies here but now lorem ipsum is
            </div>
            <div>
              <div className=' flex justify-center gap-4'>
                <div>
                  <FaFacebook className=' text-2xl text-gray-500' />
                </div>
                <div>
                  <FaLinkedin className=' text-2xl text-gray-500' />
                </div>
                <div>
                  <AiFillTwitterCircle className=' text-2xl text-gray-500' />
                </div>
                <div>
                  <TiSocialInstagram className=' text-2xl text-gray-500' />
                </div>
                <div>
                  <FaYoutube className=' text-2xl text-gray-500' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly  w-full text-xs sm:text-lg md:w-2/3'>
            <div className='flex flex-col gap-3 '>
              <div className='font-bold'>
                <p>
                  About
                </p>
              </div>
              <div className='text-gray-600 gap-2'>
                <p>
                  About Us
                </p>
                <p>
                  Find store
                </p>
                <p>
                  Categories
                </p>
                <p>
                  Blogs
                </p>
              </div>
            </div>
            <div className='flex  flex-col gap-3'>
              <div className='font-bold'>
                <p>
                  Information
                </p>
              </div>
              <div className='text-gray-600 gap-2'>
                <p>
                  Help Center
                </p>
                <p>
                  Money Refund
                </p>
                <p>
                  Shipping
                </p>
                <p>
                  Contact us
                </p>
              </div>
            </div>
            <div className='flex  flex-col gap-3'>
              <div className='font-bold'>
                <p>
                  For users
                </p>
              </div>
              <div className='text-gray-600 gap-2'>
                <p>
                  Login
                </p>
                <p>
                  Register
                </p>
                <p>
                  Settings
                </p>
                <p>
                  My Orders
                </p>
              </div>
            </div>
          </div>
          <div className=' flex flex-col gap-5 '>
            <p className='text-xl font-bold text-center'>Get app</p>
            <div className=' flex justify-center flex-col sm:flex-row items-center md:flex-col gap-3'>
              <div className='w-40 bg-gray-800 text-white flex py-1 px-2 rounded-lg text-xs'>
                <FaApple className='text-4xl mt-1  ' />
                <div className='justify-center flex  flex-col text-center'>
                  <div >Download on the</div>
                  <div className='font-bold text-xs md:text-lg'>App Store</div>
                </div>
              </div>
              <div className='w-40 bg-gray-800 text-white flex py-1 px-2 rounded-lg text-xs'>
                <FaGooglePlay className='text-4xl mt-1  ' />
                <div className='justify-center flex  flex-col text-center'>
                  <div >Get it on</div>
                  <div className='font-bold text-xs md:text-lg'>Google Play</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
 <div>
    <div className='flex justify-center text-xs sm:text-lg bg-gray-300 p-2  mb-1 text-gray-600'>
      <p>© 2021 Brand All Rights Reserved.</p>
    </div>
 </div>
    </>
  )
}

export default Footer