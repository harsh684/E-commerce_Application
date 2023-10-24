import React from 'react'
import '../Offers/Offers.css'

const NewsLetter = () => {
  return (
    <div className='newsletter mx-auto mt-10 py-8 gap-5 md:w-10/12 text-center flex flex-col items-center justify-center md:gap-9 md:pt-14 md:my-40'>
      <h1 className='text-slate-700 px-16 md:px-0 text-xl md:text-5xl font-semibold'>Get Exclusive Offers On Your Email</h1>
      <p className='text-sm px-14 md:px-0 text-slate-600 font-medium md:text-lg'>Subscribe to out newsletter and stay updated</p>
      <div className='shadow-lg flex items-center justify-between bg-white rounded-full border border-slate-300 md:w-[730px] md:h-[60px]'>
        <input className='outline-none text-sm rounded-full ps-2 rounded-full md:rounded-none md:w-[500px] md:ms-[30px] md:text-lg' type="email" placeholder='Your Email Id' />
        <button className='text-sm p-1 bg-black text-white rounded-full md:w-[210px] md:h-[60px] md:text-lg pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
