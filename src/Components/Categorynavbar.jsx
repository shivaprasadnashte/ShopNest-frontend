import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import flag from '../../public/images/flag.jpeg'
function Categorynavbar() {
    return (
        <>
            <div className=' px-5 flex justify-between'>
                <div className=' flex gap-8 text-lg'>
                    <div className=' flex items-center gap-3'>
                        <GiHamburgerMenu />
                        All category
                    </div>
                    <div>
                        Hot offers
                    </div>
                    <div>
                        Gift boxes
                    </div>
                    <div>
                        Projects
                    </div>
                    <div>
                        Menu item
                    </div>
                    <div  className=' flex  items-center gap-2'>
                        Help
                        <FaAngleDown className=' mt-1 text-gray-400 gap-1'/>
                    </div>
                </div>
                <div className='  gap-5 flex'>
                    <div className=' flex items-center gap-1'>
                        English, USD
                        <FaAngleDown className=' mt-1 text-gray-400 '/>
                    </div>
                    <div className=' flex items-center gap-1'>
                        Ship to
                        <img src={flag} alt="" className=' w-4 h-3'/>
                        <FaAngleDown className=' mt-1 text-gray-400 '/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorynavbar