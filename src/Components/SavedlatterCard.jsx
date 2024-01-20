import React from 'react'
import Mobile from '../../public/images/mobile1.jpeg'
import { GiShoppingCart } from "react-icons/gi";

function SavedlatterCard() {
    return (
        <>
            <div className='bg-gray-50 border-2 border-gray-300 w-52 flex flex-col gap-3 items-center'>
                <div>
                    <img src={Mobile} alt=".." className='w-40 h-40' />
                </div>
                <div className='p-4'>
                    <div className='font-bold text-lg'>
                        $99.50
                    </div>
                    <div className='text-xs'>
                        GoPro HERO6 4K Action Camera - Black
                    </div>
                    <div className=' flex gap-2 justify-center text-center hover:bg-blue-600 hover:text-white text-blue-500 border-2 border-gray-300 items-center'>
                        <GiShoppingCart />
                        <button>
                            Move to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavedlatterCard