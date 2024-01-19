import React from 'react'
import Mobile from '../../public/images/mobile1.jpeg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
function BigCard2() {
    return (
        <>
            <div className=' flex border-2 border-gray-200 rounded-md shadow-sm bg-white p-2 w-full'>
                <div>
                    <img src={Mobile} alt=".." className='w-28' />
                </div>
                <div>
                    <div className='text-sm'>
                        Regular Fit Resort Shirt
                    </div>
                    <div>
                        $57.70
                    </div>
                    <div>
                        <div className='flex text- gap-1 items-center  '>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <CiStar />
                            <p className=' text-yellow-500'>7.5</p>
                        </div>
                        <div className='flex items-center gap-1 text-xs text-gray-400'>
                            <GoDotFill className='text-gray-400' />
                            <p> 154 orders</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <GoDotFill className='text-gray-400' />
                            <p className=' text-green-600 text-xs'> Free Shipping</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BigCard2