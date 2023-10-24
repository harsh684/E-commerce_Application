import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center pt-5 md:gap-2 md:h-[90vh]'>
        <h1 className='text-xl md:text-4xl font-semibold'>Related Products</h1>
        <hr className='w-16 md:w-40 h-1 rounded-full bg-slate-700' />
        <div className="relatedproducts-item my-5 md:my-12 md:mx-36 grid grid-cold-1 gap-y-5 gap-x-2 md:grid-cols-3 lg:grid-cols-4">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
