import React from 'react'
import pandaImg from '../assets/img/png/panda_img.png'
import pandgif from '../assets/img/svg/panda_gif_1.gif'
const MyHero = () => {
    return (
        <header className=' lg:flex lg:flex-col lg:items-center lg:justify-center flex-grow'>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className='text-center lg:text-start mt-10'>
                        <h1 className='text-[40px] sm:text-[60px] mt-5  md:text-[80px] lg:text-[75px] min-[1200px]:text-[80px] leading-[50px] sm:leading-[70px] md:leading-[84px] text-white ff_philosopher font-bold'>Setting a <span className='pink_text_gredient'>‘High’</span> Standard</h1>
                        <p className='text-base font-normal ff_montserrat text-white mt-[14px] leading-[24px]'>We at Purple Panda are passionate about becoming the best online weed dispensary Canada has ever seen. We believe in good products, fair pricing, and top-notch customer service</p>
                        <a className='bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] inline-block mt-5 sm:mt-[53px] rounded-[40px] ff_montserrat font-bold text-[20px] text-white px-[34px] py-[14px]' href="#">SIGN IN</a>
                    </div>
                    <div className='relative'>
                        <img className='w-full' src={pandaImg} alt="pandaImg" />
                        <img className='absolute rounded-bl-[350px] w-[192px] top-[90px] left-[-30px]' src={pandgif} alt="pandgif" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MyHero