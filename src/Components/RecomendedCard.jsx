import React from 'react'
import Shart from '../../public/images/shart.jpeg'
function RecomendedCard() {
  return (
  <>
  <div className=' shadow-lg text-xs flex flex-col justify-center items-center border-2 border-x-gray-200 p-1'>
    <img src={Shart} alt="" className=' w-32 h-32' />
    <div className=' text-center'>
        <p className='  font-bold'>$10.30</p>
        <p className='sm:w-40 w-32  text-gray-500'>T-shirts with multiple colors, for men</p>
    </div>
  </div>
  </>
  )
}

export default RecomendedCard