import React from 'react'
import SmallCard from './ProductSmallCard'
function RecomendedProduct() {
    return (
        <div className=' bg-white flex  p-5 flex-col gap-2 mt-5'>
            <p className=' font-bold'>
            Related products
            </p>
           <div className='  border-2 p-3 bg-gray-50 rounded-md border-gray-300 flex overflow-hidden justify-between'>
           <SmallCard />
           <SmallCard />
           <SmallCard />
           <SmallCard />
           </div>
        </div>
    )
}


export default RecomendedProduct