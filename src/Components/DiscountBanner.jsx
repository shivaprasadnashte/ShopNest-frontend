import React from 'react'
import '../index.css'
function DiscountBanner() {
    return (
        <>
            <div className='flex h-28'>
                <div className='bg-[#237CFF] text-white w-1/2 p-5'>
                    <p className=' font-bold text-2xl'>  Super discount on more than 100 USD</p>
                    <p>  Have you ever finally just write dummy info</p>
                </div>
                <div className=' w-1/2 flex justify-end items-center  bg-[#005ADE] '>
                    <button className='bg-yellow-600 text-white p-2 rounded-md mr-5'>
                        Shop now
                    </button>
                </div>
            </div>
        </>
    )
}

export default DiscountBanner