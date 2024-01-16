import React from 'react'

function Newsletter() {
    return (
        <>
            <div className='md:m-5 m-2 text-xs md:text-lg'>
            <div className=" p-5 bg-gray-200 gap-2 w-full flex flex-col justify-center items-center">
                <div className='w-full text-center mb-2'>
                <p className='font-bold' >Subscribe on our newsletter</p>
                <p>Get daily news on upcoming offers from many suppliers all over the world</p>
                </div>
                <div className="flex gap-1 ">
                    <div className='border-2 border-gray-400 p-1'>
                        <input type="text" placeholder='Email' className=' focus:outline-none' />
                    </div>
                    <button className='bg-blue-600 px-2 py-1 rounded-md text-white'>Subscribe</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Newsletter 