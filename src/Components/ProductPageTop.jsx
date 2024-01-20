import React from 'react'
import Tshart from '../../public/images/Tshart.jpeg'
import Tshart2 from '../../public/images/tshart2.jpeg'
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineChat } from "react-icons/md";
import { LuBaggageClaim } from "react-icons/lu";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
function ProductPageTop() {
    return (
        <>
            <div className=' flex gap-2 bg-white border-2 border-gray-300 rounded-md justify-evenly p-5'>
                <div className='w-1/2 lg:w-1/4 flex flex-col gap-2'>
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
                    <div className='text-xs md:text-lg font-bold  lg:w-2/3'>
                        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex items-center text-xs lg:text-lg gap-1  '>
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <CiStar />
                            <CiStar />
                            <p className=' ml-2 text-yellow-500'>3.0</p>
                        </div>
                        <div className='flex gap-1  text-gray-500 items-center'>
                            <MdOutlineChat className='text-xs lg:text-lg' />
                            <p className='text-xs lg:text-lg'>32 reviews</p>
                        </div>

                        <div className='flex gap-1  text-gray-500 items-center'>
                            <LuBaggageClaim className='text-xs lg:text-lg' />
                            <p className='text-xs lg:text-lg'>154 sold</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <p className='lg:text-2xl text-sm font-bold'>$98.00</p>
                        <p className='lg:text-xl text-xs line-through text-gray-500 font-bold'>$100.00</p>
                    </div>
                    <div className=' flex gap-2'>
                        <button className=' hover:bg-green-600 border-2 text-xs lg:text-sm border-green-600 hover:text-white font-bold p-2 lg:w-52'>
                            ADD TO WISHLIST
                        </button>
                        <button className=' hover:bg-green-600 border-2 text-xs lg:text-sm border-green-600 hover:text-white font-bold p-2 lg:w-32'>
                            ADD TO CART
                        </button>
                    </div>
                    <div className=' mt-2'>
                        <button className=' bg-green-600 text-white text-xs lg:text-sm font-bold p-2 w-[230px] lg:w-[344px]'>
                            BUY NOW
                        </button>
                    </div>
                </div>
                <div className=' lg:w-1/4 w-1/2'>
                    <div className='flex flex-col gap-3  border-2 border-gray-400 p-5'>
                        <div className='flex gap-2'>
                            <div className='bg-blue-200 flex justify-center items-center text-3xl font-bold w-14 h-14'>
                                <p className=' text-blue-500'>R</p>
                            </div>
                            <div className='lg:text-xl text-xs '>
                                <p>Supplier</p>
                                <p>Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-1 items-center'>
                                <LiaFlagUsaSolid className='text-2xl text-blue-500' />
                                <p>Germany, Berlin</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <MdOutlineVerifiedUser className='text-2xl text-blue-500' />
                                <p>Verified Seller</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <CiGlobe className='text-2xl text-blue-500' />
                                <p>Worldwide shipping</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='bg-blue-600 p-1 rounded-md text-white'>
                                Send inquiry
                            </button>
                            <button className='hover:bg-blue-600 p-1 rounded-md border-2 border-gray-400 hover:text-white'>
                                Seller’s profile
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-1 items-center text-blue-600 justify-center mt-8'>
                        <CiHeart className='text-3xl text-gray-500' />
                        <p>Save for later</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageTop