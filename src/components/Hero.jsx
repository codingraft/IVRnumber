import React from 'react'
import "./style.css";
import Hero1 from '../images/hero1.svg'
import Hero2 from '../images/hero2.svg'
import Hero3 from '../images/hero3.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero_slider">
                <Swiper
                    loop={true}
                    // spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="hero_img">
                            <img src={Hero1} alt="" />

                            {/* <div className="hero_content">
                                <p className="hero_top">
                                    Let's Discuss
                                </p>
                                <h1 className="hero_heading">IVR Number</h1>
                                <p className="cont">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla animi aliquid illum fuga, aut doloremque nisi unde est iste.</p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero_img">
                            <img src={Hero2} alt="" />
                            {/* <div className="hero_content">
                                <p className="hero_top">
                                    Let's Discuss
                                </p>
                                <h1 className="hero_heading">IVR Number</h1>
                                <p className="cont">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla animi aliquid illum fuga, aut doloremque nisi unde est iste.</p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero_img">
                            <img src={Hero3} alt="" />
                            {/* <div className="hero_content">
                                <p className="hero_top">
                                    Let's Discuss
                                </p>
                                <h1 className="hero_heading">IVR Number</h1>
                                <p className="cont">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla animi aliquid illum fuga, aut doloremque nisi unde est iste.</p>
                            </div> */}
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Hero