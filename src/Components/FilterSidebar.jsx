import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function FilterSidebar() {
    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    return (
        <>
            <div className='hidden md:block w-1/5 p-2'>
                <div className=' flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className=' font-bold'>Category</p>
                    </div>
                    <div className=' flex flex-col gap-2 ml-2'>
                        <p>Mobile accessory</p>
                        <p>Electronics</p>
                        <p>Smartphones </p>
                        <p>Modern tech</p>
                        <p className=' text-blue-600'>See all</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className='font-bold'>Brands</p>
                    </div>
                    <div className=' flex flex-col gap-2 ml-2'>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick(!click)
                                    }
                                }>
                                <TiTick className={click ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Samsung</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick1(!click1)
                                    }
                                }>
                                <TiTick className={click1 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Apple</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick2(!click2)
                                    }
                                }>
                                <TiTick className={click2 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>OnePlus</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick3(!click3)
                                    }
                                }>
                                <TiTick className={click3 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Huawei</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick4(!click4)
                                    }
                                }>
                                <TiTick className={click4 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Pocco</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className='font-bold'>Features</p>
                    </div>
                    <div className=' flex flex-col gap-2 ml-2'>
                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick3(!click3)
                                    }
                                }>
                                <TiTick className={click3 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Metallic</p>
                        </div>

                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick3(!click3)
                                    }
                                }>
                                <TiTick className={click3 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Plastic cover</p>
                        </div>

                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick3(!click3)
                                    }
                                }>
                                <TiTick className={click3 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>8GB Ram</p>
                        </div>

                        <div className=' flex gap-2 items-center'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick3(!click3)
                                    }
                                }>
                                <TiTick className={click3 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <p>Super power</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className='font-bold'>Price range</p>
                    </div>
                    <div className='flex px-2 gap-1 justify-between'>
                        <div>
                            <p>Min</p>
                            <input type="text" placeholder='0' className=' border-2 w-14 placeholder:px-1 lg:w-28 1 border-gray-400 focus:outline-none' />
                        </div>
                        <div>
                            <p>Max</p>
                            <input type="text" placeholder='0' className=' border-2 w-14 lg:w-28  placeholder:px-1 border-gray-400 focus:outline-none' />
                        </div>
                    </div>
                    <button className='text-blue-900 text-center m-1 border-2 border-gray-200 py-2 w-full rounded-md
                    '>
                        Apply
                    </button>
                </div>
                <div className='flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className='font-bold'>Condition</p>
                    </div>
                    <div className=' flex flex-col gap-2 ml-2'>
                        <div className='flex items-center  gap-2'>
                            <div className='  w-5  ' onClick={
                                () => {
                                    setClick(!click)
                                }
                            }>
                                <GoDotFill className={click ? "border-2 border-blue-800 text-blue-600 rounded-full" : "text-white border-2 rounded-full border-gray-400"} />
                            </div>
                            <p>Any</p>
                        </div>
                        <div className='flex items-center  gap-2'>
                            <div className='  w-5  ' onClick={
                                () => {
                                    setClick(!click)
                                }
                            }>
                                <GoDotFill className={click ? "border-2 border-blue-800 text-blue-600 rounded-full" : "text-white border-2 rounded-full border-gray-400"} />
                            </div>
                            <p>Refurbished</p>
                        </div>
                        <div className='flex items-center  gap-2'>
                            <div className='  w-5  ' onClick={
                                () => {
                                    setClick(!click)
                                }
                            }>
                                <GoDotFill className={click ? "border-2 border-blue-800 text-blue-600 rounded-full" : "text-white border-2 rounded-full border-gray-400"} />
                            </div>
                            <p>Brand new</p>
                        </div>
                        <div className='flex items-center  gap-2'>
                            <div className='  w-5  ' onClick={
                                () => {
                                    setClick(!click)
                                }
                            }>
                                <GoDotFill className={click ? "border-2 border-blue-800 text-blue-600 rounded-full" : "text-white border-2 rounded-full border-gray-400"} />
                            </div>
                            <p>Old items</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b-2 border-gray-200 py-5'>
                    <div>
                        <p className='font-bold'>Ratings</p>
                    </div>
                    <div className='flex flex-col gap-2 ml-2
                    '>
                        <div className='flex gap-2 '>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick4(!click4)
                                    }
                                }>
                                <TiTick className={click4 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <div className='flex text-lg gap-1 text-yellow-400 '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick4(!click4)
                                    }
                                }>
                                <TiTick className={click4 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <div className='flex text-lg gap-1  '>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <CiStar />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick4(!click4)
                                    }
                                }>
                                <TiTick className={click4 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <div className='flex text-lg gap-1  '>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='   text-center items-center text-white w-4'
                                onClick={
                                    () => {
                                        setClick4(!click4)
                                    }
                                }>
                                <TiTick className={click4 ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                            </div>
                            <div className='flex text-lg gap-1  '>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSidebar