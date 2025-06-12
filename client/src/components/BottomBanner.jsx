import React from 'react'
import Bottom_Banner from '../assets/Untitled design (1).png'
import bottom_banner_small from '../assets/bottom_small_banner.png'
import { features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={Bottom_Banner} alt='banner' className='w-full rounded hidden md:block ' />
      <img src={bottom_banner_small} alt='banner' className='w-full rounded md:hidden ' />
      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>Why we are the Best?</h1>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center gap-4 mt-2'>
              <div className="bg-primary p-2 rounded inline-flex items-center justify-center">
                <feature.icon className="md:w-7 h-7 rounded text-secondary " />
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                <p className='text-gray-600 text-xs md:text-sm'>{feature.description}</p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BottomBanner