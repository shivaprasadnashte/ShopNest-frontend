import React from "react";
import Img from "..//../public/images/hero.jpeg";
import { MdAccountCircle } from "react-icons/md";
function Hero() {
  return (
    <>
      <div className=" md:flex hidden border-2 border-gray-200 shadow-md m-5  p-2  lg:p-10 justify-between">
        <div className="  w-1/7 hidden md:flex text-xs lg:text-sm flex-col lg:gap-2">
          <div className=" hover:bg-gray-200 py-2 ">Automobiles</div>
          <div className="  hover:bg-gray-200 py-2  ">Clothes and wear</div>
          <div className="  hover:bg-gray-200 py-2  ">Home interiors</div>
          <div className="  hover:bg-gray-200 py-2  ">Computer and tech</div>
          <div className="  hover:bg-gray-200 py-2  ">Tools, equipments</div>
          <div className="  hover:bg-gray-200 py-2  ">Sports and outdoor</div>
          <div className="  hover:bg-gray-200 py-2  ">Animal and pets</div>
          <div className="  hover:bg-gray-200 py-2  ">Machinery tools</div>
          <div className="  hover:bg-gray-200 py-2  ">More category</div>
        </div>
        <div className=" md:w-2/3 md:mx-2  lg:m-0 bg-[url('/images/hero.jpeg')]  bg-cover ">
          <div className=" absolute  ">
            <div className=" flex md:p-5 lg:p-12 gap-3 flex-col relative">
              <div className=" text-2xl">Latest trending</div>
              <div className=" text-3xl font-bold">Electronic items</div>
              <button className=" bg-white rounded-md p-1 w-32">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className=" w-1/5 justify-between hidden md:flex md:flex-col">
          <div className=" bg-gray-100 p-3 mb-2 rounded-md shadow-md">
            <div className=" flex py-2 items-center">
              <div>
                <MdAccountCircle className=" text-5xl text-gray-500" />
              </div>
              <div className=" text-xs lg:text-xl">
                Hi, user let’s get stated
              </div>
            </div>
            <div className=" bg-blue-500 my-2 text-xs lg:text-sm text-white flex justify-center p-1 rounded-md">
              <button> Join now</button>
            </div>
            <div className=" bg-white p-1 my-2 rounded-md text-xs lg:text-sm flex justify-center border-2 border-gray-200">
              <button>Log in</button>
            </div>
          </div>
          <div className=" bg-[#F38332] rounded-md text-sm lg:text-2xl text-white p-2">
            Get US $10 off with a new supplier
          </div>
          <div className="  mt-4 bg-[#55BDC3] text-sm lg:text-2xl rounded-md text-white p-2">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>

      <div className=" md:hidden p-6 mt-5 bg-[url('/images/hero.jpeg')]  bg-cover "  >
        <div className=" flex md:p-5 lg:p-12 gap-3 flex-col relative">
          <div className=" text-lg">Latest trending</div>
          <div className=" text-xl font-bold">Electronic items</div>
          <button className=" bg-white rounded-md p-1 w-32">Learn more</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
