import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='h-24 w-full hidden my-4 md:block md:my-[20px] md:mx-auto md:h-full md:w-[76%]' src={props.banner} alt=''/>
      <img className='h-48 my-5 block md:hidden' src={props.mobBanner} alt="" />
      <div className="shopcategory-indexSort px-5 md:px-3 flex flex-col md:flex-row gap-1 md:gap-0 md:mx-[170px] md:justify-between md:items-center">
        <p className='text-sm md:text-lg md:px-0'>
          <span className='font-semibold'>
            Showing 1-12
          </span> out of 36 products
        </p>
        <div className="shopcategory-sort text-sm w-fit md:text-md flex md:mx-2 md:px-[10px] md:py-[5px] radius-xl border border-solid border-slate-400 cursor-pointer">
          Sort by <img className=' mx-1 w-fit my-auto h-full' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products my-6 md:my-[20px] md:mx-[170px] grid gap-y-8 md:gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center w-fit p-2 md:p-0 md:my-[150px] mx-auto md:w-[220px] md:h-[60px] rounded-full bg-slate-200 text-slate-500 text-sm md:text-lg font-medium">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
