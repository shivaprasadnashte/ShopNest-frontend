import React, { useState } from 'react'
import { SiWindows } from "react-icons/si";
import { ImMenu } from "react-icons/im";
import { TiTick } from "react-icons/ti";
function SearchTop() {
    const [click, setClick] = useState(false);
    const [changecard, setChangeCard]=useState(false);
    return (
        <>
            <div className='hidden md:flex justify-between pr-2 border-2 w lg:w-full border-gray-300 bg-white  h-12 items-center pl-2'>
                <div>
                    12,911 items in Mobile accessory
                </div>
               <div className=' flex justify-between  w-1/3 lg:w-1/4'>
               <div className='flex items-center gap-2'>
                    <div className='   text-center items-center text-white w-4'
                        onClick={
                            () => {
                                setClick(!click)
                            }
                        }>
                        <TiTick className={click ? "bg-blue-600" : "bg-white border-2 border-gray-400"} />
                    </div>
                    <p>Verified only</p>
                </div>
                <div className=' flex gap-5 text-xl'>
                    <SiWindows onClick={
                        ()=>{
                            setChangeCard(!changecard)
                            
                        }
                    }/>
                    <ImMenu
                    onClick={
                        ()=>{
                            setChangeCard(!changecard)
                        }
                    }/>
                </div>
               </div>
            </div>

        </>
    )
}

export default SearchTop