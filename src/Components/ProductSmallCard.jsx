import React from 'react'
import phone from '../../public/images/phone.jpeg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Mobile from '../../public/images/mobile1.jpeg'
function ProductSmallCard() {
    return (
        <>
            <div className=' bg-white border-2 border-gray-200 flex flex-col gap-5 w-52 justify-center items-center p-2'>
                <div className=' bg-white'>
                    <img src={phone} alt="bj" className=' h-32' />
                </div>
                <div>
                    <div className=' flex items-center'>
                        <div className=' w-full'>
                            <div className=' flex justify-between w-full p-1 font-bold '>
                                <div>
                                    $99.50
                                </div>
                                <div className=' h-full  flex '>
                                    <CiHeart className='text-2xl ml-2 text-blue-500 border-2 border-gray-300' />
                                </div>
                            </div>
                            <div className='flex text-lg gap-1 items-center  '>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <CiStar />
                                <p className='ml-1 text-yellow-500'>7.5</p>
                            </div>
                        </div>

                    </div>
                    <div className=' text-gray-500'>
                        GoPro HERO6 4K Action
                    </div>
                    <div className=' text-gray-600'>
                        Camera - Black
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSmallCard