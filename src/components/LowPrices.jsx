import React from 'react'
import mushroomImg from '../assets/img/png/mushroom_img.png'
import bottlesWithPlants from '../assets/img/png/bottlesWithPlants.png'
import icon1 from '../assets/img/svg/icon-1.svg'
import icon2 from '../assets/img/svg/icon-2.svg'
import icon3 from '../assets/img/svg/icon-3.svg'
import icon4 from '../assets/img/svg/icon-4.svg'
import icon5 from '../assets/img/svg/icon-5.svg'
import icon6 from '../assets/img/svg/icon-6.svg'
import icon7 from '../assets/img/svg/icon-7.svg'
const LowPrices = () => {
    return (
        <section className='mt-[70px] sm:mt-[150px] lg:mt-[206px] lg:pb-[170px]'>
            <div className="container mx-auto px-3 relative">
                <div className="our_range_bg flex flex-wrap flex-col-reverse py-[40px] sm:py-[59px] backdrop-blur-[9px] rounded-[10px]">
                    <div className='px-3 lg:pl-11'>
                        <h6 className='text-white text-[25px] sm:text-[47px] font-bold ff_philosopher'>High <span className='pink_text_gredient'>Thoughts</span>, Low <span className='pink_text_gredient'>Prices</span></h6>
                        <p className='text-base font-normal ff_montserrat text-[#FFFFFF] mt-[14px]'>We pride ourselves on supplying premium, top-shelf weed without the
                            <span className='lg:block'>top-shelf markups. Some dispensaries will charge an arm and a leg for</span>
                            <span className='lg:block'>the newest “flavors”, but we believe in fair, affordable prices for good</span>
                            products at every level of quality and breed.</p>
                        <a className='text-[14px] sm:text-[20px] font-bold ff_montserrat text-white py-[14px] px-[34px] inline-block rounded-full mt-[40px] sm:mt-[60px] bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6]' href="#">GIVE PURPLE PANDA A GO</a>
                    </div>
                    <img className='w-[80%] mx-auto lg:mx-0 lg:w-[411px] lg:h-[444px] lg:absolute right-0 lg:bottom-0' src={mushroomImg} alt="mushroomImg" />
                    <div className='bg-[#9F00FF] h-[331px] w-[170px] blur-[121px] absolute right-[15%] -z-10'></div>
                </div>
            </div>
            <div className="container mx-auto px-3">
                <div className='flex flex-wrap mt-[70px] sm:mt-[150px] lg:mt-[211px]'>
                    <div className='w-full lg:w-1/3 relative'>
                        <img className='w-full' src={bottlesWithPlants} alt="bottlesWithPlants" />
                        <div className="bg-[#9F00FF] hidden md:flex w-[170px] h-[270px] blur-[121px] absolute top-[10%] right-[30%] -z-10"></div>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-1/3 lg:pl-16 mt-7 lg:mt-0'>
                        <div className="flex items-center">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon1} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Same Day Delivery</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon2} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Discreet packaging</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon3} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Premium Marijuana Buds</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon4} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Collect Rewards</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-1/3 lg:pl-10 sm:mt-7 lg:mt-0'>
                        <div className="flex items-center mt-4 sm:mt-0">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon5} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Canada Wide Mail Orders</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon6} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>19+</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <img className='cursor-pointer hover:scale-90 ease-in-out duration-300' src={icon7} alt="icon-1" />
                            <p className='text-base font-semibold ff_montserrat text-white ms-3'>Secure Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LowPrices