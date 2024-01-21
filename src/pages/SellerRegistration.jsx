import React from 'react'

function SellerRegistration() {
  return (
    <>
      <div className='w-full bg-[url(/images/bg1.jpg)] bg-cover md:h-screen'
       >
        <div className='w-full flex justify-center text-4xl font-bold text-white'>Shop <span className='text-blue-700'>Nest</span></div>
        <div>

          <div className='grid md:grid-cols-3 p-5 gap-5 justify-evenly '>

            <div>
              <p className='text-lg text-white'>Enter your name</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Name' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>Username</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Username' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>Create Passward</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Name' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>Confirm Passward</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Passward' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Busness Type </p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Busness Type' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>GST Number </p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='GST Number' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Store Name </p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Store name' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Store Address</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Address' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>State</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='State' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>City</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='City' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>Pin code</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Pin code' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>Mobile Number</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Mobile ' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>

            <div>
              <p className='text-lg text-white'>opening time</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='opening time ' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Closing time</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Closing time ' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Helpline Number</p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Helpline Number' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>
            </div>
            <div>
              <p className='text-lg text-white'>Email </p>
              <div className='border-2 border-gray-300 p-1 '>
                <input type="text" placeholder='Email' className='focus:outline-none placeholder:text-gray-500 bg-transparent text-white font-bold w-full h-full' />
              </div>

            </div>

            {/* <div>
                            <p className='text-lg text-white'> Profile Photo </p>
                            <div className=' p-1 '>
                                <input type="file" />
                            </div>
                        </div> */}



          </div>
        </div>
        <div className=' flex w-full justify-center '>
          <button className='hover:bg-gray-300 p-1 border-2 border-gray-300 rounded-md'>
            Register
          </button>
        </div>
      </div>
    </>
  )
}

export default SellerRegistration