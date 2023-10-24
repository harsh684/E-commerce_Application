import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-3 py-4 md:py-6 md:my-0 md:gap-[50px] bg-slate-100'>
      <div className="footer-logo flex items-center gap-2 md:gap-5">
        <img className='w-3/12' src={footer_logo} alt="" />
        <p className='text-slate-700 md:text-4xl font-semibold'>SHOPPER</p>
      </div>
      <ul className='footer-links flex gap-3 md:gap-16 text-slate-600 md:text-lg font-medium'>
        <li className='text-sm md:text-lg cursor-pointer'>Company</li>
        <li className='text-sm md:text-lg cursor-pointer'>Products</li>
        <li className='text-sm md:text-lg cursor-pointer'>Offices</li>
        <li className='text-sm md:text-lg cursor-pointer'>About</li>
        <li className='text-sm md:text-lg cursor-pointer'>Contact</li>
      </ul>
      <div className="footer-social-icons flex gap-3 md:gap-[20px]">
        <div className="footer-icons-container p-1 md:p-[10px] shadow-md bg-white border border-solid border-fuchsia-200">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container p-1 md:p-[10px] shadow-md bg-white border border-solid border-fuchsia-200">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container p-1 md:p-[10px] shadow-md bg-white border border-solid border-fuchsia-200">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-2 md:gap-[30px] md:w-full md:mb-[30px] ">
        <hr className='w-4/5 border-0 rounded-2xl h-[1.5px] bg-slate-300' />
        <p className='text-xs md:text-sm'>Copyright @ 2023 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
