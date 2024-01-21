import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { MdOutlineStorefront } from "react-icons/md";
import CartCard from '../Components/CartCard';
function sellerProfile() {
    return (
        <>

            <Navbar />
            <div className=' '>
                <div className=' bg-blue-400 flex flex-col justify-center items-center'>
                    <MdAccountCircle className=' text-9xl text-gray-200' />
                    <div className=' text-center text-white'>
                        <p className=' font-bold text-lg'>Shivaprasad</p>
                        <p>Shivaprasadnashte@23456967</p>
                        <button className=' border-2 border-gray-100 p-1 mb-1 rounded-md hover:bg-gray-400 hover:border-black hover:text-black '>Add Product </button>
                    </div>
                    <div className=' md:w-1/2 w-full  h-20 items-end justify-evenly shadow-lg bg-white flex text-3xl'>
                        <div className='flex flex-col justify-center items-center'>
                            <CiViewList />
                            <p className=' text-sm'>My Productd</p>
                        </div>
                        <div className='flex flex-col justify-center items-center' >
                            <CiHeart />
                            <p className='text-sm'>Selled</p>
                        </div>
                        <div className='flex flex-col justify-center items-center' >
                            <MdOutlineStorefront />
                            <p className='text-sm'>Store</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <IoMdNotificationsOutline />
                            <p className='  text-sm'>Notifications</p>
                        </div>
                    </div>
                </div>
                <div className='  flex-col flex items-center  bg-gray-100'>
                    <div className=' bg-white h-10 text-white shadow-lg w-full md:w-1/2'>
                        hi
                    </div>
                    <div className=' md:w-1/2 w-full bg-white mt-5 p-5 mb-5'>
                        <p className='font-bold text-lg'>My Orders </p>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default sellerProfile