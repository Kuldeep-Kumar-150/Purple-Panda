import React from 'react'
import product_1 from '../assets/img/svg/product-1.svg'
import product_2 from '../assets/img/svg/product-2.svg'
import product_3 from '../assets/img/svg/product-3.svg'
import product_4 from '../assets/img/svg/product-4.svg'
import product_5 from '../assets/img/svg/product-5.svg'
import product_6 from '../assets/img/svg/product-6.svg'
import product_7 from '../assets/img/svg/product-7.svg'
import Slider from 'react-slick'
const Products = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1200,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1200,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1200,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1200,
                }
            }
        ]
    };
    return (
        <section>
            <div className="container mx-auto px-3">
                <Slider {...settings} className=' my-28 min-[1200px]:mb-0 lg:mt-28'>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_1} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Mushrooms</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_2} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Extracts</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_3} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Vapes & <span className='block'>Accessories</span></p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_4} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>CBD</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_5} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Edibles</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_6} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Cannabis</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img className='w-[139px] mx-auto hover:scale-90 duration-300 ease-in-out cursor-pointer' src={product_7} alt="product_1" />
                        <p className='ff_philosopher text-white font-bold text-2xl'>Bulk Orders</p>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Products