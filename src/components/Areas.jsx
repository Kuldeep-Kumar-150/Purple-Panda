import React from 'react'
import leafImg from '../assets/img/svg/leaf_img_2.svg'
const Areas = () => {
    return (
        <section className='mt-[82px] overflow-hidden'>
            <div className="container mx-auto px-3">
                <h5 className='text-[25px] sm:text-2xl font-semibold ff_montserrat text-white text-center'>We’re based in both the <span className='pink_text_gredient'>Greater Toronto Area</span>, with <span className='lg:block'>our delivery service covering:</span></h5>
                <p className='text-base font-normal ff_montserrat text-[#B5B3BB] text-center mt-4'>If you’re in any of these cities and need a little pick me up, you know where to go!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] mt-12">
                    <div className="relative">
                        <div className='our_range_bg flex hover:scale-95 duration-300 ease-in-out flex-col items-center rounded-[10px] border border-[#411A68] backdrop-blur-[9px] py-[30px] md:py-[72px]'>
                            <ul className='list-disc marker:text-[#C120F3]'>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat'>Mississauga</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Oakville</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Brampton</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Etobicoke</li>
                            </ul>
                        </div>
                        <img className='absolute right-[-40px] rotate-[60deg] w-[50%] bottom-[-10px] -z-10' src={leafImg} alt="leafImg" />
                    </div>
                    <div className="relative">
                        <div className='our_range_bg flex  hover:scale-95 duration-300 ease-in-out flex-col items-center rounded-[10px] border border-[#411A68] backdrop-blur-[9px] py-[30px] md:py-[72px]'>
                            <ul className='list-disc marker:text-[#C120F3]'>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat'>Mississauga</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Oakville</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Brampton</li>
                                <li className='text-white text-[23px] sm:text-[32px] font-normal ff_montserrat mt-4'>Etobicoke</li>
                            </ul>
                        </div>
                        <img className='absolute right-[-100px] w-[50%] top-[50%] translate-y-[-50%] -z-10' src={leafImg} alt="leafImg" />
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Areas