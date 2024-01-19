import React from 'react'

function QuoteBanner() {
    return (
        <>


            <div className=' hidden md:block '>
                <div className="  bg-[url('/images/cover.jpeg')] bg-cover h-80 w-full flex justify-evenly ">
                    <div className=' w-1/2 text-white p-10'>
                        <p className="text-2xl font-bold lg:w-1/2">An easy way to send requests to all suppliers</p>
                        <p className=' lg:w-1/2 text-xs underline'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className='  lg:w-1/2 flex justify-center items-center '>
                        <div className=' bg-white w-2/3  flex flex-col gap-3 '>
                            <p className=' text-lg font-bold m-2'>Send quote to suppliers</p>
                            <div className=' border-2 mx-3 border-gray-300 p-1'>
                                <input type="text" placeholder=' What item you need?' className='focus:outline-none w-full' />
                            </div>
                            <div className=' border-2  mx-3 border-gray-300 p-1'>
                                <textarea type="text" placeholder='Type more details' className=' w-full focus:outline-none' />
                            </div>
                            <div className=' flex gap-2 mx-3 '>
                                <div className=' w-1/2 border-2 border-gray-300 p-1'>
                                    <input type="number" placeholder='Quantity' className=' w-full focus:outline-none' />
                                </div>
                                <div className=' w-1/2 border-2 border-gray-300 p-1'>
                                    <input type="number" placeholder='Pcs' className=' w-full focus:outline-none' />
                                </div>
                            </div>
                            <button className=' m-3 bg-blue-600 w-40  rounded-md py-1 text-white'>Send inquiry</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" my-3 md:hidden h-40 m- text-white bg-[url('/images/cover.jpeg')] bg-cover ">
                <p className=' p-5 font-bold text-lg'>An easy way to send requests to all suppliers</p>
                <button className=' mx-3 bg-blue-600 w-40  rounded-md py-1 text-white'>Send inquiry</button>
            </div>

        </>
    )
}

export default QuoteBanner