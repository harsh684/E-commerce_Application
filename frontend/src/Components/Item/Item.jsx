import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='item w-fit mx-5 shadow-xl md:shadow-none p-4 md:p-0 border md:border-0 rounded-xl md:mx-3 cursor-pointer'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='' src={props.image} alt=''/></Link>
      <p className='my-3'>{props.name}</p>
      <div className="item-prices flex gap-[20px] ">
        <div className="item-price-new text-slate-600 md:text-md font-semibold">
          ${props.new_price}
        </div>
        <div className="item-price-old text-slate-400 md:text-md font-semibold line-through">
          ${props.old_price}
        </div>
        <div className='ms-10 px-2 py-1 text-sm md:text-base md:ms-[40px] bg-red-500 text-white md:px-2 md:py-1'><button onClick={()=>{addToCart(props.id)}}>Add To Cart</button></div>
      </div>
    </div>
  )
}

export default Item
