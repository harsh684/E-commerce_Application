import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_img from '../Assets/hero_image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='md:hidden'>
            <OwlCarousel className='owl-theme' items={1} dots={false} autoplay={true} loop margin={10}>
                <div class='item'>
                    <img className='' src="https://cdn.dribbble.com/users/5998640/screenshots/14146983/media/bdc834ddd2ea846cceb5e54c0601de8a.jpg" alt="" />
                </div>
                <div class='item'>
                    <img className='' src="https://cdn.dribbble.com/users/5998640/screenshots/14146983/media/bdc834ddd2ea846cceb5e54c0601de8a.jpg" alt="" />
                </div>
                <div class='item'>
                    <img className='' src="https://cdn.dribbble.com/users/5998640/screenshots/14146983/media/bdc834ddd2ea846cceb5e54c0601de8a.jpg" alt="" />
                </div>
                <div class='item'>
                    <img className='' src="https://cdn.dribbble.com/users/5998640/screenshots/14146983/media/bdc834ddd2ea846cceb5e54c0601de8a.jpg" alt="" />
                </div>
            </OwlCarousel>
        </div>
        <div className='hero flex h-fit hidden md:flex'>
      <div className="hero-left h-fit md:mt-28 flex-1 flex flex-col justify-center md:gap-6 md:ps-[180px]">
        <h2 className='text-black md:text-2xl font-semibold'>New Arrivals Only</h2>
        <div>
            <div className='hero-hand-icon flex items-center md:gap-[20px]'>
                <p className='text-black md:text-7xl font-semibold'>new</p>
                <img className='w-[20px] md:w-[80px]' src={hand_icon} alt="" />
            </div>
            <p className='text-black md:text-7xl font-semibold md:pb-2'>collections</p>
            <p className='text-black md:text-7xl font-semibold'>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center md:gap-[15px] w-28 md:w-[310px] md:h-[70px] rounded-full cursor-pointer md:mt-[20px] bg-red-600 text-white md:text-xl font-medium">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex items-center justify-center">
        <img className='mx-auto w-1/2 md:w-10/12' src={hero_img} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero
