import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiCarThin } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { GrPersonalComputer } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
function SideProfile({ showProfile, setShowProfile}) {
    return (
        <>
            <div className=' h-screen w-full   flex'>
                <div className='   w-full '>
                    <div className=' px-5 py-2 bg-gray-200'>
                       <div className=' w-full flex justify-end '>
                       <RxCross2 className=' text-2xl text-gray-400' onClick={
                            () => setShowProfile(!showProfile)
                           
                       } />
                       </div>
                        <MdAccountCircle className=' text-5xl text-gray-400' />
                        Sign in | Register

                    </div>
                    <div className=' p-5 border-b-2 flex flex-col  gap-3 border-gray-300 py-3'>
                        <div className=' flex items-center gap-2 text-lg'>
                            <AiOutlineHome className='  text-xl text-gray-400' />
                            Home
                        </div>

                        <div className=' flex items-center gap-2 text-lg'>
                            <TfiMenuAlt className='  text-xl text-gray-400' />
                            Categories
                        </div>
                        <div className=' flex items-center gap-2 text-lg'>
                            <CiHeart className='  text-xl text-gray-400' />
                            Favorites
                        </div>
                        <div className=' flex items-center gap-2 text-lg'>
                            <PiCarThin className='  text-xl text-gray-400' />
                            My orders
                        </div>
                    </div>
                    <div className='border-b-2 p-5 flex flex-col  gap-3 border-gray-300 py-3'>
                        <div className=' flex items-center gap-2 text-lg'>
                            <CiGlobe className='  text-xl text-gray-400' />
                            English | USD
                        </div>
                        <div className=' flex items-center gap-2 text-lg'>
                            <LuHeadphones className='  text-xl text-gray-400' />
                            Contact us
                        </div>
                        <div className=' flex items-center gap-2 text-lg'>
                            <GrPersonalComputer className='  text-xl text-gray-400' />
                            About
                        </div>
                    </div>
                    <div className=' p-5 flex flex-col gap-5'>
                        <div>
                            User agreement
                        </div>
                        <div>
                            Partnership
                        </div>
                        <div>
                            Privacy policy
                        </div>
                    </div>
                </div>
                <div className=' w-1/4 h-screen bg-gray-600'>
                    <div className=' text-gray-600'>
                        hi
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideProfile