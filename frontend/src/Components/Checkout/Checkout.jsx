import {React, useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {getTotalCartAmount}= useContext(ShopContext)
  return (
    <div className='bg-zinc-100 flex justify-center'>
      <div className='bg-white w-10/12 md:w-5/12 my-10 md:my-20 px-2 md:px-12 rounded-lg'>
      <div className='flex justify-between my-2 md:my-6 text-sm md:text-lg font-semibold'>
            <h2>Cart Total</h2>
            <p>${getTotalCartAmount()}</p>
        </div>
        <hr className='mb-1 md:mb-6' />
        <h1 className='text-center font-semibold md:text-3xl'>Enter Payment Details</h1>
        <form className='flex flex-col justify-center px-2 md:px-0 py-2 md:py-6 gap-2 md:gap-3'>
            <input className='h-8 md:h-12 border px-3 text-sm md:text-lg' type="text" placeholder='Enter address' />
            <input className='h-8 md:h-12 border px-3 text-sm md:text-lg' type="email" placeholder='Enter Email' />
            <input className='h-8 md:h-12 border px-3 text-sm md:text-lg' type="number" placeholder='Enter mobile number' />
            <input className='h-8 md:h-12 border px-3 text-sm md:text-lg' type="number" placeholder='Enter card number' />
            <input className='h-8 md:h-12 border px-3 text-sm md:text-lg' type="number" placeholder='Enter Pin Code' />
            <Link className='flex md:justify-end' to='/'><button className='w-full my-2 h-8 md:h-14 md:w-60 bg-black text-white'>Place Order</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Checkout
