import React from 'react'

const Cannabis = () => {
    return (
        <section className='aboutus_bg_img bg-no-repeat bg-cover min-h-screen pt-16 pb-14'>
            <div className="container mx-auto px-3">
                <div className="flex">
                    <div className='w-full lg:w-[60%] our_range_bg backdrop-blur-[9px] rounded-[10px] pl-12 pr-6 pt-[42px] pb-20'>
                        <h4 className='text-[32px] font-semibold ff_montserrat text-white'>Strain <span className='pink_text_gredient'>Families</span></h4>
                        <p className='text-base font-normal ff_montserrat text-white mt-1'>We stock the three main families of cannabis at Purple Panda, each of which has its own qualities.</p>
                        <div className="flex">
                            <p className='text-2xl font-semibold ff_montserrat text-white'>Indica:</p>
                            <p className='text-base font-normal ff_montserrat text-white pl-[25px] leading-6'>These are your bedtime buds, great for relaxing at the end of the day and for treating stress and anxiety.</p>
                        </div>
                        <div className="flex">
                            <p className='text-2xl font-semibold ff_montserrat text-white'>Sativa:</p>
                            <p className='text-base font-normal ff_montserrat text-white pl-[25px] leading-6'>Smoke up some Sativa for a boost of energy and creativity, perfect for a sunny summer’s day with friends!</p>
                        </div>
                        <div className="flex">
                            <p className='text-2xl font-semibold ff_montserrat text-white'>Hybrid:</p>
                            <p className='text-base font-normal ff_montserrat text-white pl-[20px] leading-6'>Get the best of both worlds with our Hybrid range, bringing together the sensations and flavors of Indica and Sativa for something totally unique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cannabis