import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/slider/1.jpg"
const slider2 = "/img/slider/4.jpg"
const slider3 = "/img/slider/3.jpg"
const slider4 = "/img/slider/4.jpg"
const slider5 = "/img/slider/5.jpg"


export default function HomeSlider() {
    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    autoplaydisableoninteraction={false}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >

                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Energy &amp; Commodities</span></h3>
                                        <div className="desc"><span>Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Construction</span></p>
                                        <h3><span>New Construction</span></h3>
                                        <div className="desc"><span>Industify was the first company to develop methods and equipment for the successful deep compaction of soil in the 1930s</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Modern</span></p>
                                        <h3><span>Small Projects &amp; Maintenance</span></h3>
                                        <div className="desc"><span>In addition to our large, ground up projects, we accommodate small to modest sized projects for our customers.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Technology</span></p>
                                        <h3><span>Leed &amp; Green Building</span></h3>
                                        <div className="desc"><span>Here at Industify, we take the same approach to green building that we take to every other aspect of our business.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Construction</span></p>
                                        <h3><span>Design Build</span></h3>
                                        <div className="desc"><span>Industify Industry Services has both the experience and expertise to successfully complete your project using the highly effective design-build approach.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
