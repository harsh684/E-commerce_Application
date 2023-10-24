import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center md:gap-6 md:h-[90vh]'>
        <h1 className='mt-5 text-black md:text-4xl font-semibold'>POPULAR IN WOMEN</h1>
        <hr className='w-20 h-1 h- md:w-[180px] md:h-[6px] rounded-lg bg-black'/>
        <div className='md:mx-28'>
            <div className='popular-item mt-8 flex flex-col md:flex-row gap-5'>
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Popular
