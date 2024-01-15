import React from 'react'
import Chair from '../../public/images/chair.jpeg'
import Mixer from '../../public/images/mixe.jpeg'
import Lamp from '../../public/images/lamp.jpeg'
function HomeOutdoor() {
    return (
        <>
            <div className=' m-5 hidden md:flex'>
                <div className=" bg-[url('/images/home.jpeg')] bg-cover h-72 w-1/4 ">
                    <div className=' p-5 text-2xl font-bold w-1/2'>
                        <p>
                            Home and outdoor
                        </p>
                    </div>
                    <button className=' mx-5 bg-white p-2 rounded-md hover:bg-gray-200'>
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

        </>
    )
}

export default HomeOutdoor