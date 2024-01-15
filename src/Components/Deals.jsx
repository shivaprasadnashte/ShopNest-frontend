import React from 'react'
import Img1 from '../../public/images/watch.jpeg'
import Img2 from '../../public/images/laptop.jpeg'
import Img3 from '../../public/images/phone.jpeg'
import Img4 from '../../public/images/headphon.jpeg'
import Img5 from '../../public/images/cam.jpeg'
function Deals() {
    return (
        <>
            <div className=' flex'>
                <div className='border-2 border-gray-200 flex flex-col gap-6 p-5 i'>
                    <div>
                        <p className=' text-2xl font-bold'>Deals and offers</p>
                        <p className='text-xl text-gray-500'> Hygiene equipments</p>
                    </div>
                    <div className=' gap-5 flex'>
                        <div className=' flex flex-col items-center justify-center bg-[#606060] p-1 text-xl font-bold text-white rounded-md'>
                            <span>
                                04
                            </span>
                            <span>
                                Days
                            </span>
                        </div>
                        <div className=' flex flex-col items-center justify-center bg-[#606060] p-1 text-xl font-bold text-white rounded-md'>
                            <span>
                                13
                            </span>
                            <span>
                                Hour
                            </span>
                        </div>
                        <div className=' flex flex-col items-center justify-center bg-[#606060] py-1 px-2 text-xl font-bold text-white rounded-md'>
                            <span>
                                24
                            </span>
                            <span>
                                Min
                            </span>
                        </div>
                        <div className=' flex flex-col items-center justify-center bg-[#606060] py-1 px-2 text-xl font-bold text-white rounded-md'>
                            <span>
                                56
                            </span>
                            <span>
                                Sec
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' border-2 border-gray-200 p-5 flex flex-col items-center justify-center gap-4'>
                    <img src={Img1} alt="watch" className=' h-40' />
                    <div className=' text-lg'>
                        Smart watches
                    </div>
                    <div className=' text-lg text-[#EB001B]'>
                        -25%
                    </div>
                </div>

                <div className=' border-2 border-gray-200 p-5 flex flex-col items-center justify-center gap-4'>
                    <img src={Img2} alt="watch" className=' h-40' />
                    <div className=' text-lg'>
                        Smart watches
                    </div>
                    <div className=' text-lg text-[#EB001B]'>
                        -25%
                    </div>
                </div>

                <div className=' border-2 border-gray-200 p-5 flex flex-col items-center justify-center gap-4'>
                    <img src={Img3} alt="watch" className=' h-40' />
                    <div className=' text-lg'>
                        Smart watches
                    </div>
                    <div className=' text-lg text-[#EB001B]'>
                        -25%
                    </div>
                </div>

                <div className=' border-2 border-gray-200 p-5 flex flex-col items-center justify-center gap-4'>
                    <img src={Img4} alt="watch" className=' h-40' />
                    <div className=' text-lg'>
                        Smart watches
                    </div>
                    <div className=' text-lg text-[#EB001B]'>
                        -25%
                    </div>
                </div>

                <div className=' border-2 border-gray-200 p-5 flex flex-col items-center justify-center gap-4'>
                    <img src={Img5} alt="watch" className=' h-40' />
                    <div className=' text-lg'>
                        Smart watches
                    </div>
                    <div className=' text-lg text-[#EB001B]'>
                        -25%
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals