import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AddProduct() {
  return (
    <>
      <Navbar />
      <div className=' w-full flex bg-gray-100 justify-center'>
        <div className=' sm:w-1/2 p-2 flex flex-col gap-2 '>
         <div className=' w-full justify-center flex text-xl font-bold'>  <p>ADD YOUR PRODUCT</p></div>
          <div className=' flex flex-col gap1'>
            <p>Enter name of your product</p>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='Name' className=' focus:outline-none w-full p-1' />
            </div>
          </div>
          <div className=' flex flex-col gap1'>
            <p>Discribe your product</p>
            <div className=' border-2 border-gray-300'>
              <textarea type="text" placeholder='description......' className=' h-full focus:outline-none w-full p-1' />
            </div>
          </div>
          <div className=' flex flex-col gap1'>
            <p>Enter your product price</p>
            <div className=' border-2 border-gray-300'>
              <input type="number" placeholder='Price' className=' focus:outline-none w-full p-1' />
            </div>
          </div>

          <div className=' flex flex-col gap1'>
            <p>Choose category</p>
            <div className=' border-2 border-gray-300'>
              <select className=' focus:outline-none bg-white w-full p-1'>
                <option value="volvo">Electronics</option>
                <option value="saab">Clothes</option>
                <option value="opel">Shoes</option>
                <option value="audi">Automobiles</option>
                <option value="volvo">Home interiors</option>
                <option value="saab">Computer and tech</option>
                <option value="opel">Tools, equipments</option>
                <option value="audi">Sports and outdoor</option>
                <option value="volvo">Animal and pets</option>
                <option value="saab">Machinery tools</option>
                <option value="opel">More category</option>
              </select>
            </div>
          </div>

          <div className=' flex flex-col gap1'>
            <p>Enter your product stock</p>
            <div className=' border-2 border-gray-300'>
              <input type="number" placeholder='Stock' className=' focus:outline-none w-full p-1' />
            </div>
          </div>

          <div className=' flex flex-col gap-3 gap1'>
            <p>Enter featuress of your product</p>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='feature 1' className=' focus:outline-none w-full p-1' />
            </div>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='features 2' className=' focus:outline-none w-full p-1' />
            </div>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='features 3' className=' focus:outline-none w-full p-1' />
            </div>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='features 4' className=' focus:outline-none w-full p-1' />
            </div>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='features 5' className=' focus:outline-none w-full p-1' />
            </div>
          </div>

          <div className=' flex flex-col gap1'>
            <p>Enter your product offer</p>
            <div className=' border-2 border-gray-300'>
              <input type="text" placeholder='offer' className=' focus:outline-none w-full p-1' />
            </div>
          </div>

          <div className=' flex flex-col gap1'>
            <p>Enter your product discount</p>
            <div className=' border-2 border-gray-300'>
              <input type="number" placeholder='Discount' className=' focus:outline-none w-full p-1' />
            </div>
          </div>

          <div className=' flex flex-col gap1'>
            <p>Enter your product photos</p>
            <div className=' border-2 p-2 border-gray-300'>
              <div>
                <p>Photo 1</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
              <div>
                <p>Photo 2</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
              <div>
                <p>Photo 3</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
              <div>
                <p>Photo 4</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
              <div>
                <p>Photo 5</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
              <div>
                <p>Photo 6</p>
                <input type="file" placeholder='Discount' className=' focus:outline-none w-full p-1' />
              </div>
            </div>
          </div>
          <div className='w-full justify-center flex'>
            <button className=' border-gray-200 border-2 bg-green-300 w-32 hover:bg-green-600 p-1 rounded-md'>
              Add Product
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddProduct