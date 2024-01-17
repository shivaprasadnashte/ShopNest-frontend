import React from 'react'
import RecomendedCard from './RecomendedCard'
function Recomended() {
  return (
    <div className=' m-5'>
      <p className=' font-bold my-2 text-xl' >Recommended items</p>
      <div className='gap-5 md:grid-cols-4 grid-cols-2 lg:grid-cols-5 grid'>
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />

      </div>
    </div>
  )
}

export default Recomended