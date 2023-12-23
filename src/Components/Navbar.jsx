import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
function Navbar() {
    return (
      <>
       <div className=' px-5  py-3'>
         <div className='flex justify-between items-center'>
           <div className=' flex justify-center items-center gap-4'>
           <div className='text-2xl md:hidden block'>
                <GiHamburgerMenu />
            </div>
            <div className=' flex items-center'>
                <div className=' bg-[#0D6EFD] p-1 md:p-2 text-white text-xl rounded-md md:text-2xl  '> <IoBagOutline /></div>
                <div className=' text-[#8CB7F5] md:text-3xl text-2xl font-bold'> Brand</div>
            </div>
           </div>
            <div className='hidden md:flex justify-center px-6 w-full py-1 ' onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    alert('key pressed')
                }
            }}>
                <div className=' w-full  flex border-[1px] hover:border-[2px] max-w-3xl border-blue-400 rounded-l-lg'>
                    <input type="text" placeholder='Search' className=' w-full focus:outline-none lg:text-sm text-xs px-1  border-r-2 border-blue-400 rounded-l-lg ' />
                    <div className=' w-40 flex text-center justify-center items-center gap-1 md:text-sm text-xs'>All category <FaAngleDown /></div>
                </div>
                <div>
                    <button className=' bg-blue-400 text-white p-2 rounded-r-lg md:text-sm text-xs'>Search</button>
                </div>
            </div>
            <div className=' hidden gap-4 md:flex '>
                <div className=' text-center flex flex-col items-center'>
                    <IoPersonSharp className=' text-xl text-gray-500' />
                    <div className=' text-sm text-gray-500'>
                        Profile
                    </div>
                </div>
                <div className=' text-center flex flex-col items-center'>
                    <MdMessage  className=' text-xl text-gray-500'  />
                    <div className=' text-sm text-gray-500'>
                        Message
                    </div>
                </div>
                <div className=' text-center flex flex-col items-center'>
                    <FaHeart  className=' text-xl text-gray-500'  />
                    <div className=' text-sm text-gray-500'>
                        Orders
                    </div>
                </div>
                <div className=' text-center flex flex-col items-center'>
                    <FaShoppingCart  className=' text-xl text-gray-500'  />
                    <div className=' text-sm text-gray-500'>
                        cart
                    </div>
                </div>
            </div>
            <div className='  md:hidden flex gap-5 '>
                <div className=' text-center flex flex-col items-center'>
                    <BsPerson  className=' text-2xl'  />
                   
                </div>
                <div className=' text-center flex flex-col items-center'>
                    <FiShoppingCart  className=' text-2xl '  />
                   
                </div>                
            </div>
        </div>
       </div>
       
       <div className=' flex md:hidden border-2 gap-2 border-gray-300 mx-3 rounded-md items-center p-2'>
        <IoSearch className=' text-xl text-gray-500'/>
        <input type="text" placeholder='Search' />
       </div>
       </>
    )
}

export default Navbar