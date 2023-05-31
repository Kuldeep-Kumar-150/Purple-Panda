import React from 'react'
import expressDeliveryImg from '../assets/img/png/express_delivery_bgimg.png'
const ExpressDelivery = () => {
    return (
        <section className='relative py-12 md:py-24'>
            <div className='bg-[#9F00FF] hidden md:flex blur-[134px] h-52 w-52 absolute right-0 -top-16 -z-10'></div>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <img className='w-full' src={expressDeliveryImg} alt="expressDeliveryImg" />
                    </div>
                    <div>
                        <div className='bg-[#1A1626] bg-opacity-50 rounded-[10px] p-5 md:py-14 md:px-[34px] about_us_border relative lg:mt-5'>
                            <h4 className='text-[30px] sm:text-5xl font-bold text-white ff_philosopher leading-9 sm:leading-[50px]'><span className='pink_text_gredient'>Express</span> Cannabis Delivery</h4>
                            <p className='text-[14px] sm:text-base font-normal ff_montserrat text-white mt-[14px]'>
                                One of the ways that we set ourselves apart from your average dispensary is through our express delivery service. We’ve all been there – work has finished early and you’ve gotten home, but your jar is empty and the nearest dispensary is miles away. With our service, you could have a box of premium pre-rolls, a bag of bodacious buds, or a package of enticing edibles at your door in just three hours!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpressDelivery