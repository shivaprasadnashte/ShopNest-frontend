import React from 'react'
import SavedlatterCard from './SavedlatterCard'

function SavedLatter() {
  return (
    <>
    <div className=' bg-white p-2'>
        <p className='font-bold text-lg'>Saved for later</p>
        <div className='flex p-4 justify-between bg-white'>
        <SavedlatterCard />
        <SavedlatterCard />
        <SavedlatterCard />
        <SavedlatterCard />
        <SavedlatterCard />
        </div>
    </div>
    </>
  )
}

export default SavedLatter