import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
const [menu,setMenu]= useState("shop");
const {getTotalCartItems} =useContext(ShopContext);

  return (
    <div className='navbar flex flex-col md:flex-row justify-around shadow-slate-500 shadow-sm'>
      <div className="flex justify-between items-center my-3">
        <div className='nav-logo flex items-center justify-center md:justify-start gap-[10px]'>
          <img className='w-1/6 md:w-full' src={logo} alt=""/>
          <p className='font-semibold text-xl md:text-3xl'>SHOPPER</p>
        </div>
        <div className="nav-login-cart flex items-center gap-1 md:hidden">
          <Link to='/signup'><button className='text-md text-slate-500 px-2 bg-white font-medium  outline-none border border-solid border-slate-500 rounded-full active:bg-neutral-100'>Login</button></Link>
          <Link className='me-[-22px]' to='/cart'><img className='w-6/12' src={cart_icon} alt='cart-icon'/></Link>
        <div className="nav-cart-count w-[18px] h-[18px] flex justify-center items-center mt-[-18px] rounded-md bg-red-500 text-white">{getTotalCartItems()}</div>
      </div>
      </div>
      <ul className='nav-menu flex items-center justify-center md:justify-normal my-2 gap-[50px] text-slate-500 text-md md:text-xl font-medium'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr className='border-none w-4/5 h-[3px] rounded bg-red-600' />:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr className='border-none w-4/5 h-[3px] rounded bg-red-600' />:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr className='border-none w-4/5 h-[3px] rounded bg-red-600' />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr className='border-none w-4/5 h-[3px] rounded bg-red-600' />:<></>}</li>
      </ul>
      <div className="nav-login-cart items-center gap-5 hidden md:flex">
        <Link to='/signup'><button className='text-lg text-slate-500 bg-white font-medium w-[147px] h-[40px] outline-none border border-solid border-slate-500 rounded-full active:bg-neutral-100'>Login</button></Link>
        <Link to='/cart'><img className='w-10/12' src={cart_icon} alt='cart-icon'/></Link>
        <div className="nav-cart-count w-[20px] h-[20px] flex justify-center items-center mt-[-32px] ms-[-35px] rounded-md bg-red-500 text-white">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
