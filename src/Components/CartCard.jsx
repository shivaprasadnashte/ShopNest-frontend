import React from 'react'
import Shart from '../../public/images/shart.jpeg'
function CartCard() {
    return (
        <div className='bg-white flex gap-2 w-full justify-between p-3 items-center border-2 border-gray-300'>
            <div>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="." className=' w-24 h-24' />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-xl'>T-shirts with multiple colors, for men and lady</p>
                <p className='text-xs'>Size: medium, Color: blue,  Material: Plastic
                    Seller: Artel Market</p>
                <div className=' flex gap-2'>
                    <button className='border-2 text-red-600 border-gray-400 rounded-md p-1 hover:bg-red-500 hover:text-white'>
                        Remove
                    </button>
                    <button className='border-2 border-gray-400 rounded-md text-blue-700 p-1 hover:bg-blue-600 hover:text-white'>
                        Save for letter
                    </button>
                </div>
            </div>
            <div className=' flex flex-col gap-2'>
                <p className='font-bold text-xl'>$78.99</p>
                <div className='border-2 border-gray-400'><input type="number" placeholder='Qty: 9' className=' w-20 p-1 focus:outline-none' /></div>
            </div>
        </div>
    )
}

export default CartCard