import app from '../images/applogo.png'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from 'swiper/modules'
import BtnSlider from "./Example2";

export default function Example() {
    return (
        <div className="container">
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                Navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev'
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 6,
                        spaceBetween: 400,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <BtnSlider title="change slider" />
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
                <SwiperSlide><img src={app} className="w-100" /></SwiperSlide>
            </Swiper>
        </div >
    );
}


