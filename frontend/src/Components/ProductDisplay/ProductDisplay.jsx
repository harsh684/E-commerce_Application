import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay flex flex-col md:flex-row m-2 md:mx-[140px] md:mb-24'>
      <div className="productdisplay-left flex md:gap-[17px]">
        <div className="productdisplay-img-list hidden md:flex flex-col md:gap-[16px]">
          <img className='md:h-[135.5px] md:w-[250px]' src={product.image} alt="" />
          <img className='md:h-[135.5px] md:w-[250px]' src={product.image} alt="" />
          <img className='md:h-[135.5px] md:w-[250px]' src={product.image} alt="" />
          <img className='md:h-[135.5px] md:w-[250px]' src={product.image} alt="" />
        </div>
        <div className="productdisplay-img rounded-md md:rounded-0">
         <img className='productdisplay-main-img md:w-[1100px] md:h-[590px]' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right mt-3 md:mt-0 mx-1 md:mx-[70px] flex flex-col">
        <h1 className='text-lg md:text-3xl text-slate-700 font-semibold'>{product.name}</h1>
        <div className="productdisplay-right-star flex items-center text-sm my-2 md:mt-[13px] md:gap-1 md:text-lg">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex md:my-5 gap-2 md:gap-7 md:text-lg font-semibold">
          <div className="productdisplay-right-price-old text-slate-400 line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-red-600">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description text-sm md:text-lg my-2 md:my-0">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
          <h1 className='text-slate-500 md:text-xl mb-2 md:mb-0 md:mt-9 font-semibold'>Select Size</h1>
          <div className="productdisplay-right-sizes flex mb-3 md:my-7 gap-3 md:gap-5">
            <div className='py-1 px-3 md:py-3 md:px-5 bg-neutral-50 rounded border border-solid border-slate-300 cursor-pointer'>S</div>
            <div className='py-1 px-3 md:py-3 md:px-5 bg-neutral-50 rounded border border-solid border-slate-300 cursor-pointer'>M</div>
            <div className='py-1 px-3 md:py-3 md:px-5 bg-neutral-50 rounded border border-solid border-slate-300 cursor-pointer'>L</div>
            <div className='py-1 px-3 md:py-3 md:px-5 bg-neutral-50 rounded border border-solid border-slate-300 cursor-pointer'>XL</div>
            <div className='py-1 px-3 md:py-3 md:px-5 bg-neutral-50 rounded border border-solid border-slate-300 cursor-pointer'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='my-3 md:my-0 me-2 md:me-2 py-2 md:mb-10 md:py-4 md:px-[40px] md:w-[200px] md:text-lg text-white bg-red-500 rounded-md cursor-pointer'>ADD TO CART</button>
        <p className='productdisplay-right-category'><span className='font-semibold'>Category : </span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span className='font-semibold'>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
