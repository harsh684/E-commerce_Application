import React from 'react'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox mx-3 my-8 md:my-28 md:mx-36'>
       <div className="descriptionbox-navigator flex">
        <div className="descriptionbox-nax-box flex items-center justify-center md:text-lg px-2 py-1 md:px-8 md:py-4 font-semibold border border-solid border-zinc-200">Description</div>
        <div className="descriptionbox-nax-box fade flex items-center justify-center md:text-lg px-2 py-1 md:px-8 md:py-4 font-semibold border border-solid border-zinc-200 bg-purple-50">Reviews(122)</div>
       </div>
       <div className="descriptionbox-description p-3 md:p-12 md:pb-18 border border-solid border-zinc-200">
            <p>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where buisness and individuals can showcase their products, interact with customers, and conducttransactions without the need for a physical presence. E-commerce websites have gained immense popularity due to theie convenience, accesibility, and the global reach they offer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
