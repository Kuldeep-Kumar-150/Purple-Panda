import React from 'react'
import waveImg from '../assets/img/svg/wave_orders.svg'
import clipboard from '../assets/img/svg/01.svg'
import cart from '../assets/img/svg/02.svg'
import pay from '../assets/img/svg/03.svg'
const Orders = () => {
    return (
        <section className='orders_bg_img bg-cover bg-no-repeat ml-2 pt-[87px] pb-[96px] relative'>
            <img className='absolute top-0 right-0 w-[95%]' src={waveImg} alt="waveImg" />
            <div className="container mx-auto px-3">
                <h3 className='text-center font-bold text-white text-[30px] sm:text-5xl ff_philosopher'>Canada Wide <span className='pink_text_gredient'>Mail Orders</span></h3>
                <p className='text-[15px] sm:text-base font-normal ff_montserrat text-[#CBBDD7] text-center mt-3'>Purple Panda offers discreet mail orders to all provinces in Canada, we have new list of products everyday to serve your <span className='lg:block'>needs whether its recreational or medinical use. We ship the next business day from Monday-Thursdays, EMT payment is</span> required for all mail orders</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] mt-24">
                    <div className="our_range_bg px-9 border-[1.2px] border-[#411A68] rounded-[28px] backdrop-blur-[6.5px] relative group">
                        <div className="bg-[#15082F] h-[155px] w-[155px] rounded-full flex items-center justify-center absolute top-[-50%] translate-y-[60%] left-[50%] translate-x-[-50%]">
                            <div className='bg-white h-[114px] w-[114px] rounded-full flex items-center justify-center duration-300 ease-in-out group-hover:scale-90'>
                                <p className='text-[35px] font-semibold ff_montserrat text-[#A020F0]'>01</p>
                            </div>
                        </div>
                        <div className="bg-[#9A00FB] w-[291px] h-[186px] blur-[250px] absolute left-4 bottom-0"></div>
                        <img className='mt-[117px]' src={clipboard} alt="clipboard" />
                        <p className='text-base font-normal ff_montserrat text-[#BEB5C8] mt-[18px] mb-[51px]'>Register for an account first, then head on other to our shop selection</p>
                    </div>
                    <div className="our_range_bg mt-20 sm:mt-0 px-9 border-[1.2px] border-[#411A68] rounded-[28px] backdrop-blur-[6.5px] relative group">
                        <div className="bg-[#15082F] h-[155px] w-[155px] rounded-full flex items-center justify-center absolute top-[-50%] translate-y-[60%] left-[50%] translate-x-[-50%]">
                            <div className='bg-white h-[114px] w-[114px] rounded-full flex items-center justify-center duration-300 ease-in-out group-hover:scale-90'>
                                <p className='text-[35px] font-semibold ff_montserrat text-[#A020F0]'>02</p>
                            </div>
                        </div>
                        <div className="bg-[#9A00FB] w-[291px] h-[186px] blur-[250px] absolute left-4 bottom-0"></div>
                        <img className='mt-[117px]' src={cart} alt="cart" />
                        <p className='text-base font-normal ff_montserrat text-[#BEB5C8] mt-[18px] mb-[51px]'>Register for an account first, then head on other to our shop selection</p>
                    </div>
                    <div className="our_range_bg mt-20 lg:mt-0 px-9 border-[1.2px] border-[#411A68] rounded-[28px] backdrop-blur-[6.5px] relative group">
                        <div className="bg-[#15082F] h-[155px] w-[155px] rounded-full flex items-center justify-center absolute top-[-50%] translate-y-[60%] left-[50%] translate-x-[-50%]">
                            <div className='bg-white h-[114px] w-[114px] rounded-full flex items-center justify-center duration-300 ease-in-out group-hover:scale-90'>
                                <p className='text-[35px] font-semibold ff_montserrat text-[#A020F0]'>03</p>
                            </div>
                        </div>
                        <div className="bg-[#9A00FB] w-[291px] h-[186px] blur-[250px] absolute left-4 bottom-0"></div>
                        <img className='mt-[117px]' src={pay} alt="pay" />
                        <p className='text-base font-normal ff_montserrat text-[#BEB5C8] mt-[18px] mb-[51px]'>Register for an account first, then head on other to our shop selection</p>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Orders