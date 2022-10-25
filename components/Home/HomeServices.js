import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Arrow_r } from '../../public/svg/icon';

// Import images
const service1 = "/img/service/single/1.jpg"
const service2 = "/img/service/single/2.jpg"
const service3 = "/img/service/single/3.jpg"
const service4 = "/img/service/single/4.jpg"
const service5 = "/img/service/single/5.jpg"
const service6 = "/img/service/single/6.jpg"

const services = [
    {
        link:"/service-single-1",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/1.jpg",
        title:"Construction Engineering"

    },
    {
        link:"/service-single-2",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/2.jpg",
        title:"Textiles &amp; Apparel"

    },
    {
        link:"/service-single-3",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/3.jpg",
        title:"Housewares  Home Decor"

    },
    {
        link:"/service-single-4",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/4.jpg",
        title:"Medical Devices"

    },
    {
        link:"/service-single-5",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/5.jpg",
        title:"Energy Commodities"

    },
    {
        link:"/service-single-6",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/6.jpg",
        title:"Oil and Gas Industry"

    },
]

SwiperCore.use([Navigation]);
export default function HomeServices() {
    return (
        <>
            {/* <!-- Service Query Shortcode --> */}
            <div className="fn_cs_service_query" data-mobile="disable" data-column-count="4">
                <div className="top_bar">
                    <div className="t_inner">
                        <h3>Our Industries</h3>
                        <span>The automotive industry is the technological trendsetter among manufacturing industries.</span>
                        <div className="owl_control">
                            <div className="fn_prev"></div>
                            <div className="fn_next"></div>
                        </div>
                    </div>
                </div>
                <div className="service_part">
                    <div className="owl-carousel">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2}
                            autoplaydisableoninteraction={false}
                            loop={true}
                            // pagination={{ clickable: true }}
                            className="custom-class"
                            navigation={{
                                prevEl: ".fn_prev",
                                nextEl: ".fn_next",
                            }}
                            breakpoints={{

                                // when window width is >= 768px

                                768: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                },
                                1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 4,
                                }
                            }}
                        >
                             {services.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="item">
                                    <Link href={item.link}><a className="full_link" ></a></Link>
                                    <div className="img_holder">
                                        <img src={item.img} alt="" />
                                        <div className="abs_img" style={{ "backgroundImage": `url(${item.bg})` }}></div>
                                    </div>
                                    <div className="title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="view_more">
                                        <span className="more_link">
                                            <span className="text">View More</span>
                                            <span className="arrow"><Arrow_r className="fn__svg" /></span>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                             ))}

                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <!-- /Service Query Shortcode --> */}

        </>
    )
}
