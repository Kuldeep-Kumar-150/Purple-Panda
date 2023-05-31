import React, { useState, useEffect } from 'react'
import navGiftImg from '../assets/img/svg/nav_gift_img.svg'
import pageLogo from '../assets/img/svg/page_logo.svg'
import searchIcon from '../assets/img/svg/search_icon.svg'
import cartIcon from '../assets/img/svg/cart_icon.svg'
import closebtnImg from '../assets/img/svg/cross_icon.svg'
const MyNav = () => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "visible"
        }
    }, [nav])

    return (
        <section>
            <div className="bg-[#2E015B]">
                <div className="container mx-auto px-3">
                    <div className="flex flex-col md:flex-row items-center py-3 justify-center">
                        <img src={navGiftImg} alt="nav-image" />
                        <p className='ff_montserrat text-center font-light text-base text-white text-opacity-90 ms-[10px]'><span className='text-base font-extrabold text-white'>Black Friday</span> savings are here ,save up to 10% off on coupon code</p>
                        <a className='text-base font-extrabold ff_montserrat pink_text_gredient md:ms-[18px]' href="#">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-3">
                <div className="flex items-center justify-between py-4">
                    <a href="#"><img className='w-[50px] sm:w-auto' src={pageLogo} alt="page-logo" /></a>
                    <div className='flex items-center'>
                        <ul className='m-0 p-0 hidden lg:flex items-center gap-9'>
                            <li><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">HOME</a></li>
                            <li><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">SHOP</a></li>
                            <li><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">ABOUT</a></li>
                            <li><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">CONTACT</a></li>
                            <li><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">FAQ</a></li>
                        </ul>
                        <form autocomplete="off" className='ms-5 hidden sm:flex'>
                            <label className='bg-[#212121] py-[6px] px-3 flex items-center justify-between sm:w-[177px] border border-[#565656] rounded-[16px]' htmlFor="search">
                                <input className='bg-transparent outline-none border-0 text-[12px] font-normal text-white ff_montserat' placeholder='Search here..' id='search' type="text" />
                                <img src={searchIcon} alt="I" />
                            </label>
                        </form>
                        <img className='cursor-pointer mr-9 ml-6' src={cartIcon} alt="cartIcon" />
                        <a className='bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] hidden lg:flex ff_montserrat font-bold text-[20px] text-white px-[34px] py-[14px]' href="#">SIGN IN</a>
                        <div onClick={() => setNav(true)} className='flex flex-col gap-2 cursor-pointer lg:hidden'>
                            <span className='bg-[#C220F2] h-1 w-10 rounded'></span>
                            <span className='bg-[#C220F2] h-1 w-10 rounded'></span>
                            <span className='bg-[#C220F2] h-1 w-10 rounded'></span>
                        </div>
                    </div>
                    <div className={nav === true ? "left-0 top-0 w-[100vw] min-h-[100vh] z-10 flex items-center flex-col text-center justify-center absolute lg:hidden bg-[#C120F3] overflow-hidden ease-in-out duration-500" : "ease-in-out duration-500 bg-[#C120F3] lg:hidden flex text-center items-center flex-col justify-center absolute left-0 w-0 overflow-hidden min-h-[100vh] top-0 z-10"}>
                        <ul>
                            <li onClick={() => setNav(false)} className='absolute top-10 right-10'><img width={40} src={closebtnImg} alt="closebtnImg" /></li>
                            <li onClick={() => setNav(false)} className='my-3'><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">HOME</a></li>
                            <li onClick={() => setNav(false)} className='my-3'><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">SHOP</a></li>
                            <li onClick={() => setNav(false)} className='my-3'><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">ABOUT</a></li>
                            <li onClick={() => setNav(false)} className='my-3'><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">CONTACT</a></li>
                            <li onClick={() => setNav(false)} className='my-3'><a className='text-white text-base font-normal ff_montserrat hover:font-bold duration-300 ease-in-out' href="#">FAQ</a></li>
                            <li onClick={() => setNav(false)} className='my-3'>
                                <a className='bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] inline-block rounded-[40px] ff_montserrat font-bold text-[20px] text-white px-[34px] py-[14px]' href="#">SIGN IN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyNav