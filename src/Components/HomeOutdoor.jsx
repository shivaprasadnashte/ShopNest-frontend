import React from 'react'
import Chair from '../../public/images/chair.jpeg'
import Mixer from '../../public/images/mixe.jpeg'
import Lamp from '../../public/images/lamp.jpeg'
import { HiMiniArrowLongRight } from "react-icons/hi2";

function HomeOutdoor() {
    return (
        <>
            <div className=' hidden justify-center lg:flex  '>
                <div className=" bg-[url('/images/home.jpeg')] bg-cover h-72 w-1/4 ">
                    <div className=' :p-5 text-sm lg:text-2xl font-bold w-1/2'>
                        <p>
                            Home and outdoor
                        </p>
                    </div>
                    <button className=' mx-5 text bg-white p-2 rounded-md hover:bg-gray-200'>
                        Source now
                    </button>
                </div>
                <div className=' flex'>
                    <div className=' flex flex-col  '>
                        <div className=' flex py-5 px-11 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                        <div className=' flex py-6 px-10 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Mixer} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col  '>
                        <div className=' flex py-5 px-11 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex  items-end '>
                                <img src={Lamp} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                        <div className=' flex py-6 px-10 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col  '>
                        <div className=' flex py-5 px-10 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                        <div className=' flex p-6 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                    </div>


                    <div className=' flex flex-col  '>
                        <div className=' flex py-5 px-10 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                        <div className=' flex p-6 border-2 border-gray-200 '>
                            <div>
                                <p className=' text-lg font-bold'>Soft chairs</p>
                                <p className=' text-gray-400 w-2/3'> From USD 19</p>
                            </div>
                            <div className=' pt-8 flex items-end '>
                                <img src={Chair} alt="" className=' w-16 h-16' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden m-2'>
                <p className=' font-bold '>Home and outdoor</p>
                <div className=' flex overflow-auto no-scrollbar'>
                    <div className='px-8 text-xs border-2 border-gray-200 flex flex-col justify-center items-center'>
                        <img src={Chair} alt="" className=' h-20 w-20' />
                        <div className=' w-20 text-center'>
                            Smart watches
                        </div>
                        <div className=' text-center text-gray-500'>
                            From USD 19
                        </div>
                    </div>

                    <div className='px-8 border-2 text-xs border-gray-200 flex flex-col justify-center items-center'>
                        <img src={Mixer} alt="" className=' h-20 w-20' />
                        <div className='w-20 text-center'>
                            Smart watches
                        </div>
                        <div className=' text-center text-gray-500'>
                            From USD 19
                        </div>
                    </div>

                    <div className='border-2 text-xs px-8 border-gray-200 flex flex-col justify-center items-center'>
                        <img src={Chair} alt="" className=' h-20 w-20' />
                        <div className=' w-20 text-center'>
                            Smart watches
                        </div>
                        <div className=' text-center text-gray-500'>
                            From USD 19
                        </div>
                    </div>

                    <div className='border-2 px-8 text-xs border-gray-200 flex flex-col justify-center items-center'>
                        <img src={Chair} alt="" className=' h-20 w-20' />
                        <div className='w-20 text-center'>
                            Smart watches
                        </div>
                        <div className=' text-center text-gray-500'>
                            From USD 19
                        </div>
                    </div>

                    <div className='border-2 px-8 text-xs border-gray-200 flex flex-col justify-center items-center'>
                        <img src={Lamp} alt="" className=' h-20 w-20' />
                        <div className='w-20 text-center'>
                            Smart watches
                        </div>
                        <div className=' text-center text-gray-500'>
                            From USD 19
                        </div>
                    </div>
                </div >
               <div className='text-lg  mt-1 font-bold flex gap-3 text-blue-500 items-center '>
               <p>Source now</p>
                <HiMiniArrowLongRight className=' text-2xl mt-1' />
               </div>
            </div>

        </>
    )
}

export default HomeOutdoor