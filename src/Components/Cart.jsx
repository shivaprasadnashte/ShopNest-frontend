import React from 'react'
import CartCard from './CartCard'
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { IoLogoPaypal } from "react-icons/io5";

function Cart() {
    return (
        <>
            <div className='flex justify-evenly '>
                <div className=' w-2/3 flex flex-col gap-3 '>
                    <p className='font-bold text-xl'> My cart (3)</p>
                    <div className=' bg-white p-5 border-2 border-gray-200 rounded-md shadow-lg'>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                        <div className=' flex justify-between p-5 bg-white'>
                            <div className='flex text-white bg-blue-600 p-1 rounded-md items-center gap-2'>
                                <FaArrowLeftLong />
                                <button>
                                    Back to shop
                                </button>
                            </div>
                            <button className=' border-blue-800  border-2 rounded-md text-blue-800 hover:bg-blue-600 hover:text-white p-1 '>
                                Remove all
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' h-full flex flex-col  '>
                    <div className=' bg-white h-32 gap-5 p-1 flex flex-col  justify-center mt-10 border-2 border-gray-400 shadow-lg rounded-md'>
                        <p className=' text-xl'>Have a coupon?</p>
                        <div className=' flex border-2 rounded-md border-gray-200 p-1 bg-white'>
                            <input type="text" placeholder='Add coupon' className=' focus:outline-none border-r-2 border-gray-200' />
                            <p className='px-2 text-blue-600  '>Apply</p>
                        </div>
                    </div>
                    <div className=' bg-white p-8 mt-10 flex flex-col gap-3 rounded-md shadow-lg'>
                        <div className=' flex flex-col gap-3 '>
                            <div className=' flex justify-between'>
                                <p>Subtotal:</p>
                                <p>$1403.97</p>
                            </div>
                            <div className=' flex justify-between'>
                                <p>Discount:</p>
                                <p>- $60.00</p>
                            </div>
                            <div className='border-b-2 border-gray-400 pb-5  flex justify-between'>
                                <p>Tax:</p>
                                <p>+ $14.00</p>
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <p>Total:</p>
                            <p>$1357.97</p>
                        </div>
                        <button className=' bg-green-600 text-white p-1 w-full rounded-md'>
                            Checkout
                        </button>
                        <div className='flex w-full justify-center gap-5'>
                            <SiVisa className=' text-3xl '/>
                            <IoLogoPaypal className=' text-xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart