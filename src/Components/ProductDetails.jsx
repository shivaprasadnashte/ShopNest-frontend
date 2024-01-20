import React from 'react'
import { useState } from 'react'
import Bigcard2 from './BigCard2'
function ProductDetails() {
    const [description, setDescription] = useState(true)
    const [reviews, setReviews] = useState(false)
    const [shipping, setShipping] = useState(false)
    const [aboutSeller, setAboutSeller] = useState(false)


    return (
        <>
            <div className='mt-5 flex justify-between'>
                <div className='flex gap-5 flex-col w-3/5 border-2 bg-white rounded-md border-gray-300 p-2'>
                    <div className='flex gap-5 border-b-2 border-b-gray-300'>
                        <div className={description ? 'border-b-4 border-blue-600 p-1' : ' border-2 border-white p-1'}
                            onClick={
                                () => {
                                    setDescription(true)
                                    setReviews(false)
                                    setShipping(false)
                                    setAboutSeller(false)
                                }

                            }>Description</div>
                        <div className={reviews ? 'border-b-4 border-blue-600 p-1' : ' border-2 border-white p-1'}
                            onClick={
                                () => {
                                    setDescription(false)
                                    setReviews(true)
                                    setShipping(false)
                                    setAboutSeller(false)
                                }

                            }>Reviews</div>

                        <div className={shipping ? 'border-b-4 border-blue-600 p-1' : ' border-2 border-white p-1'}
                            onClick={
                                () => {
                                    setDescription(false)
                                    setReviews(false)
                                    setShipping(true)
                                    setAboutSeller(false)
                                }

                            }>Shipping</div>

                        <div className={aboutSeller ? 'border-b-4 border-blue-600 p-1' : ' border-2 border-white p-1'}
                            onClick={
                                () => {
                                    setDescription(false)
                                    setReviews(false)
                                    setShipping(false)
                                    setAboutSeller(true)
                                }
                            }>About seller</div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                        </p>
                        <div>
                            <table>
                                <tr className=''>
                                    <td>Model</td>
                                    <td>|</td>
                                    <td>#8786867</td>
                                </tr>
                                <tr className=''>
                                    <td>Style</td>
                                    <td>|</td>
                                    <td>#Classic style</td>
                                </tr>
                                <tr className=''>
                                    <td>Certificate </td>
                                    <td>|</td>
                                    <td>#ISO-898921212</td>
                                </tr>
                                <tr className=''>
                                    <td>Size</td>
                                    <td>|</td>
                                    <td>34mm x 450mm x 19mm</td>
                                </tr>
                                <tr className=''>
                                    <td>Memory</td>
                                    <td>|</td>
                                    <td>36GB RAM</td>
                                </tr>
                                <tr>

                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold'>Some great feature name here</p>
                        <li>  Lorem ipsum dolor sit amet, consectetur  </li>
                        <li>Lorem ipsum dolor sit amet, consectetur </li>
                        <li>Lorem ipsum dolor sit amet, consectetur </li>

                    </div>
                </div>

                <div className='w-1/3 flex border-2 bg-white rounded-md border-gray-300 p-2 flex-col  gap-2'>
                    <p className='font-bold'>  You may like </p>
                    <div className='flex flex-col gap-1'>
                        <Bigcard2 />
                        <Bigcard2 />
                        <Bigcard2 />
                        <Bigcard2 />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails