import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product}= props
    return (
    <div className=' breadcrums hidden md:flex items-center md:gap-1.5 md:text-lg font-semibold text-slate-700 md:my-14 md:mx-36 uppercase'>
      HOME <img className='h-1/2 md:my-auto' src={arrow_icon} alt="" /> SHOP <img className='h-1/2 md:my-auto md:mx-1' src={arrow_icon} alt="" /> {product.category} <img className='h-1/2 md:my-auto md:mx-1' src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
