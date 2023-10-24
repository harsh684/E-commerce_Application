import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import './CartItems.css'

const CartItems = () => {
    const {all_product,cartItems,addToCart,removeFromCart, getTotalCartAmount}= useContext(ShopContext)
  return (
    <div className='cartitems my-5 md:my-24 md:mx-40'>
      <div className="cartitems-format-main grid items-center md:py-5 text-slate-500 text-sm md:text-lg font-semibold">
        <p>Products</p>
        <p className='mx-2'>Title</p>
        <p>Price</p>
        <p className='mx-1 md:mx-0'>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 bg-zinc-100 border-0' />
      {all_product.map((e)=>{
        if(cartItems && cartItems[e.id] && cartItems[e.id] > 0){
            return (
            <div>
                <div className="cartItems-format cartitems-format-main md:items-center grid md:gap-[15px] py-2 md:py-5 text-slate-800">
                    <img className='w-full mx-4 md:w-2/4 md:mx-3' src={e.image} alt="" />
                    <p className='text-sm ms-10 md:ms-0 md:text-base md:pe-5'>{e.name}</p>
                    <p className='text-sm ms-2 md:ms-0 md:text-base md:mx-1'>${e.new_price}</p>
                    <div className='flex gap-1 md:gap-0 items-center'><span onClick={()=>{removeFromCart(e.id)}} className='text-sm md:text-lg font-semibold cursor-pointer'>-</span><button className='cartitems-quantity border text-sm md:text-md h-fit md:w-12 md:h-8 md:mx-1'>{cartItems[e.id]}</button><span onClick={()=>{addToCart(e.id)}} className='text-sm md:text-lg font-semibold cursor-pointer'>+</span></div>
                    <p className='text-sm mx-2 md:mx-0 md:text-base'>${e.new_price*cartItems[e.id]}</p>
                    <img className='cursor-pointer mx-3 md:mx-5' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
            <hr />
          </div>
          )
        }
        return null;
      })}
      <div className="cartitems-down my-3 flex flex-col md:flex-row md:my-24">
        <div className="cartitems-total flex-1 flex flex-col mx-3 md:mx-0 md:me-52 gap-2 md:gap-10">
            <h1 className='md:text-2xl font-semibold'>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item text-sm md:text-base flex justify-between md:py-4">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item text-sm md:text-base flex justify-between md:py-4">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item text-sm flex justify-between md:py-4 md:text-lg font-semibold">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <Link to='/checkout'><button className='w-full h-10 my-1 md:my-0 md:w-56 md:h-14 outline-none border-0 bg-red-500 text-white md:text-md cursor-pointer'>PROCEED TO CHECKOUT</button></Link>
        </div>
        <div className="cartitems-promocode flex-1 text-sm my-4 mx-3 md:my-0 md:mx-0 md:text-base font-medium">
            <p className='text-slate-500'>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox flex items-center justify-between w-11/12 h-8 bg-slate-100 md:w-[504px] md:h-16 mt-3 md:mt-3 md:ps-5">
                <input className='bg-transparent outline-none px-3 md:px-0' type="text" placeholder='Promo code' />
                <button className='bg-black h-full w-20 md:basis-2/5 md:h-14 md:text-md text-white cursor-pointer'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
