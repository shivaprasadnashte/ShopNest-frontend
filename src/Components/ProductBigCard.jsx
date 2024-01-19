import React, { useState } from 'react'
import Mobile1 from '../../public/images/mobile1.jpeg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Mobile2 from '../../public/images/phone.jpeg'
function ProductBigCard() {
    const [like, setlike] = useState(false)
    return (
        <>
            <div className=' flex h-48  items-center bg-white border-2 border-gray-200 '>
                <div className=' w-96'>
                    <img src={Mobile2} alt="mobile" className='w-20 sm:w-56 ' />
                </div>
                <div className=' p-5'>
                    <div className=' mb-4 text-xs sm:text-lg '>
                        Canon Cmera EOS 2000, Black 10x zoom
                    </div>
                    <div className='gap-3 items-center flex text-xs sm:text-lg'>
                        <p className=' font-bold text-lg '>$998.00</p>
                        <p className=' text-gray-400 line-through'>$1128.00</p>
                    </div>
                    <div className=' sm:flex gap-3'>
                        <div className='flex text-lg gap-1 items-center  '>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <CiStar />
                            <p className=' text-yellow-500'>7.5</p>
                        </div>
                        <div className='flex items-center gap-1 text-gray-400'>
                            <GoDotFill className='text-gray-400' />
                            <p> 154 orders</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <GoDotFill className='text-gray-400' />
                            <p className=' text-green-600'> Free Shipping</p>
                        </div>

                    </div>
                    <div className=' text-xs h-5 overflow-hidden'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex rem neque quod voluptatem eligendi, dignissimos autem mollitia animi quos! Ratione doloribus pariatur ab explicabo quibusdam vel libero doloremque iure.</p>
                    </div>
                    <div className=' text-lg text-blue-600'>
                        View details
                    </div>
                </div>
                {like ? <div className=' h-full  text-2xl p-5'>
                    <CiHeart onClick={
                        () => {
                            setlike(!like)
                        }
                    } />

                </div> :
                    <div className=' h-full  text-2xl p-5'>
                        <FaHeart className=' text-red-500' onClick={
                            () => {
                                setlike(!like)
                            }
                        } />
                    </div>

                }
            </div>

        </>
    )
}

export default ProductBigCard