import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const slider3 = [
    { src: "/img/slider/1.jpg" },
    { src: "/img/slider/2.jpg" },
    { src: "/img/slider/4.jpg" },
    { src: "/img/slider/1.jpg" },
    { src: "/img/slider/5.jpg" }
]


// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

export default function Home3Slider() {
    return (
        <>
            {/* <!-- Kenburnsy Slider --> */}
            <div className="fn_cs_kenburnsy_wrap">
                <div className="fn_cs_kenburnsy" data-interval="7000">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={1}
                        autoplaydisableoninteraction={false}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="custom-class"
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                    >
                        {slider3.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.src}/>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
            {/* <!-- /Kenburnsy Slider --> */}
        </>
    )
}
