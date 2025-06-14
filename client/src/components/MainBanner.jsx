import React from 'react'
import { Link } from 'react-router-dom';
import banner from "../assets/exotic-fruits-tropical-palm-leaves-260nw-1111522055.jpg"
import small_banner from "../assets/exotic-fruits-tropical-palm-leaves-260nw-1111522055(4).jpg"
import { FaArrowRight } from "react-icons/fa";


const MainBanner = () => {
  return (
    <div className='relative'>
       <img src={banner} alt='banner' className='w-full hidden md:block rounded rotate-180' />
       <img src={small_banner} alt='banner' className='w-full md:hidden rounded' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 '>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You Can Trust, Savings You will Love! </h1>
      
      <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>Shop Now
        {/* <img className='md:hidden transition group-focus:translate-x-1' src=''/> */}
        <FaArrowRight className='md:hidden transition group-focus:translate-x-1' />
        </Link>
      
        <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>Explore Deals
        {/* <img className='transition group-focus:translate-x-1' src=''/> */}
        <FaArrowRight className='transition group-focus:translate-x-1' />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner