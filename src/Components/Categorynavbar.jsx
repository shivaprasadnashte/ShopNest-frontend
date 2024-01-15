import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import flag from '../../public/images/flag.jpeg'
function Categorynavbar() {
    return (
        <>
            <div className=' md:block hidden'>
                <div className=' px-5 flex text-xs lg:text-lg justify-between'>
                    <div className=' flex gap-5 lg:gap-8 text-lg'>
                        <div className=' flex text-xs lg:text-xl  items-center gap-3'>
                            <GiHamburgerMenu />
                            All category
                        </div>
                        <div className=' text-xs lg:text-xl flex items-center'>
                            Hot offers
                        </div>
                        <div className=' text-xs lg:text-xl  flex items-center'>
                            Gift boxes
                        </div>
                        <div className=' text-xs lg:text-xl   flex items-center'>
                            Projects
                        </div>
                        <div className=' text-xs lg:text-xl  flex items-center'>
                            Menu item
                        </div>
                        <div className=' flex text-xs  lg:text-xl items-center gap-2'>
                            Help
                            <div>
                            <FaAngleDown className=' mt-1 text-gray-400 gap-1' />
                            </div>
                        </div>
                    </div>
                    <div className='  gap-5 flex'>
                        <div className=' flex items-center gap-1'>
                            English, USD
                            <FaAngleDown className=' mt-1 text-gray-400 ' />
                        </div>
                        <div className=' flex items-center gap-1'>
                            Ship to
                            <img src={flag} alt="" className=' w-4 h-3' />
                            <FaAngleDown className=' mt-1 text-gray-400 ' />

                        </div>
                    </div>
                </div>
            </div>
            <div className=' md:hidden flex gap-2 no-scrollbar overflow-auto px-2 mt-3'>
                <div className='flex gap-2 bg-gray-200 px-2 rounded-sm text-blue-600'>
                    All <span>
                    category
                    </span>
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Gadgets
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Clocthes
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Accessory
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Automobiles
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Electronics
                </div>
                <div className=' bg-gray-200 px-2 rounded-sm text-blue-600'>
                    Smartphones
                </div>
            </div>
        </>
    )
}

export default Categorynavbar