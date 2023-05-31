import React from 'react'
import leafImg1 from '../assets/img/svg/leaf_img_1.svg'
import leafImg2 from '../assets/img/svg/leaf_img_2.svg'
const OurRange = () => {
    return (
        <section className='md:mt-28 mb-8'>
            <div className="container mx-auto px-3 mt-12 relative">
                <img className='absolute w-44 h-[291px] left-4 bottom-0' src={leafImg1} alt="leafImg1" />
                <img className='absolute w-56 h-[291px] top-[-30px] right-0' src={leafImg2} alt="leafImg2" />
                <div className="our_range_bg backdrop-blur border border-[#411A68] py-5 md:pt-16 md:pb-20 rounded-[10px] px-3">
                    <h3 className=' text-5xl font-bold ff_philosopher text-white text-center'>Our <span className='pink_text_gredient'>Range</span></h3>
                    <p className='text-white text-center ff_montserrat text-base font-normal mt-6 md:mt-12'>We have a variety of different recreational and medicinal items in our range, including <span className='lg:block'>cannabis, vapes, edibles, magic mushrooms, extracts, and CBD products, to help you</span> unwind, have fun, and even do some valuable soul searching.</p>
                    <p className='text-white text-center ff_montserrat text-base font-normal sm:mt-8'>Whether you’re looking to order edibles online or browse for your new favorite strain,<span className='lg:block'> Purple Panda has got you covered.</span></p>
                </div>
            </div>
        </section>
    )
}

export default OurRange