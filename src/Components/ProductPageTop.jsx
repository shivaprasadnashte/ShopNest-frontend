import React from 'react'
import Tshart from '../../public/images/Tshart.jpeg'
import Tshart2 from '../../public/images/tshart2.jpeg'
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineChat } from "react-icons/md";
import { LuBaggageClaim } from "react-icons/lu";
function ProductPageTop() {
    return (
        <>
            <div className=' flex justify-evenly p-5'>
                <div className=' w-1/4 flex flex-col gap-2'>
                    <div className='border-2 border-gray-300'>
                        <img src={Tshart} alt="." className=' w-80 h-80' />
                    </div>
                    <div className=' flex gap-2'>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart} alt="." className=' w-14 h-14' />
                        </div>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart2} alt="." className=' w-14 h-14' />
                        </div>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart} alt="." className=' w-14 h-14' />
                        </div>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart} alt="." className=' w-14 h-14' />
                        </div>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart2} alt="." className=' w-14 h-14' />
                        </div>
                        <div className='border-2 border-gray-300'>
                            <img src={Tshart} alt="." className=' w-14 h-14' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 text-green-500'>
                        <TiTick />
                        <p>  In stock</p>
                    </div>
                    <div className='text-lg font-bold'>
                        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center text-lg gap-1  '>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <CiStar />
                            <CiStar />
                            <p className=' ml-2 text-yellow-500'>3.0</p>
                        </div>
                        <div className='flex gap-1 text-gray-500 items-center'>
                            <MdOutlineChat />
                            <p>32 reviews</p>
                        </div>

                        <div className='flex gap-1 text-gray-500 items-center'>
                            <LuBaggageClaim />
                            <p>154 sold</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <p className='text-2xl font-bold'>$98.00</p>
                        <p className='text-xl line-through text-gray-500 font-bold'>$100.00</p>
                    </div>
                    <div className=' flex gap-2'>
                        <button className=' hover:bg-green-600 border-2 border-green-600 hover:text-white font-bold py-2 w-52'>
                            ADD TO WISHLIST
                        </button>
                        <button className=' hover:bg-green-600 border-2 border-green-600 hover:text-white font-bold py-2 w-32'>
                            ADD TO CART
                        </button>
                    </div>
                    <div className=' mt-2'>
                        <button className=' bg-green-600 text-white font-bold py-2 w-[344px]'>
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageTop