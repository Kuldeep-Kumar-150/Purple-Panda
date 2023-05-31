import React from 'react'
import gridImg1 from '../assets/img/png/grid_img_1.png'
import gridImg2 from '../assets/img/png/grid_img_2.png'
import gridImg3 from '../assets/img/png/grid_img_3.png'
import gridImg4 from '../assets/img/png/grid_img_4.png'
import gridImg5 from '../assets/img/png/grid_img_5.png'
const AboutUs = () => {
    return (
        <section className='aboutus_bg_img bg-no-repeat bg-cover pt-12 sm:pt-[122px] pb-[52px]'>
            <div className="container mx-auto px-3">
                <div className="flex flex-col-reverse  lg:grid lg:grid-cols-2">
                    <div className='bg-[#1A1626] bg-opacity-50 rounded-[10px] p-5 md:py-14 md:pl-[70px] md:pr-14 about_us_border relative mt-5'>
                        <h2 className='text-5xl font-normal text-white ff_philosopher'>About <span className='pink_text_gredient'>Us</span></h2>
                        <p className='text-[14px] sm:text-base font-normal ff_montserrat text-white mt-4'>Purple Panda is a Canadian online cannabis dispensary with a passion for good
                            weed and even better customer service. We all remember the days of waiting for scary strangers on street corners, but thankfully those days
                            are
                            over. Now, we’re proud of how we provide an easy, convenient, and user-friendly experience to our clients.
                            <span className='lg:block'>We specialize in high-quality cannabis for both recreational and medical purposes, while also making sure that
                                you’re getting the best bud for your buck! Along with all the different strains of cannabis that we stock, you can also get your fill of
                                edibles, vapes, CBD, extracts, and even buy magic mushrooms online from our store.</span>
                        </p>
                        <a className='inline-block text-white ff_montserrat font-bold text-xl py-[14px] px-[34px] bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-full mt-[60px]' href="#">READ MORE</a>
                    </div>
                    <div className='grid gap-[13px] lg:pl-8'>
                        <div className='grid_img_1'><img className='hover:scale-[105%] ease-in-out duration-300 h-full lg:h-[90%] lg:mt-5 w-full' src={gridImg1}
                            alt="grid-images" /></div>
                        <div className='grid_img_2'><img className='hover:scale-[105%] ease-in-out duration-300 h-full w-full' src={gridImg2} alt="grid-images" /></div>
                        <div className='grid_img_3'><img className='hover:scale-[105%] ease-in-out duration-300 h-full w-full' src={gridImg3} alt="grid-images" /></div>
                        <div className='grid_img_4'><img className='hover:scale-[105%] ease-in-out duration-300 h-full w-full' src={gridImg4} alt="grid-images"
                        /></div>
                        <div className='grid_img_5'><img className='hover:scale-[105%] ease-in-out duration-300 h-full w-full' src={gridImg5} alt="grid-images" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs