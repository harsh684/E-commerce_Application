import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers my-10 ps-4 md:w-10/12 md:h-[60vh] flex m-auto md:mb-40 md:px-[140px]'>
      <div className='offers-left flex flex-1 md:gap-5 flex-col justify-center'>
        <h1 className='text-sm md:text-6xl font-bold'>Exclusive</h1>
        <h1 className='text-sm md:text-6xl font-bold'>Offers For You</h1>
        <p className='text-xl font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-28 h-6 text-sm md:text-base md:w-72 md:h-14 rounded-full border-0 text-white bg-red-600 font-medium md:mt-5 pointer'>Check Now</button>
      </div>
      <div className="offers-right flex-1 flex items-center justify-end pt-5">
        <img className=' md:w-6/12' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
