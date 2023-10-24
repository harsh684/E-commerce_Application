import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newcollection flex flex-col items-center md:gap-6 md:mb-20'>
      <h1 className='mt-5 text-black text-lg md:text-4xl font-semibold'>NEW COLELCTIONS</h1>
      <hr className="w-20 h-1 md:w-[180px] md:h-[6px] rounded-lg bg-black" />
    <div className="collections mt-7 md:mx-28 grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 md:gap-5 md:mt-8">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
    </div>
  )
}

export default NewCollections
