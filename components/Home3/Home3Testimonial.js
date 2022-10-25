import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FiveStars, Quote } from '../../public/svg/icon';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function Home3Testimonial() {

    const testimonial = [
        {
            review: "They really nailed it. This is one of the best themes I have seen in a long time. Very nice design with lots of customization available. Many of my clients have chosen this theme for their portfolio sites.",
            reviewer: "Albert Walkers",
            profession: "SEO of Gogomedia",
            thumb: { "backgroundImage": "url(img/clients/1.jpg)" }

        },
        {
            review: "This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price. I&apos;m very pleased with this purchase.",
            reviewer: "Jhon Doe",
            profession: "Photographer",
            thumb: { "backgroundImage": "url(img/clients/2.jpg)" }

        },
        {
            review: "Had a problem with the layout after Installation- found no approach. The support reacted quickly and competently. And solved the problem between Elemetator and a WordPress update. Great!",
            reviewer: "Alex Gordon",
            profession: "Customer",
            thumb: { "backgroundImage": "url(img/clients/3.jpg)" }

        },
        {
            review: "I definitely recommend the theme. It works perfectly! You can import the preferred demos, while still having the ability to customize them to your needs. Very happy with Vivaco!",
            reviewer: "Luje Moss",
            profession: "Vivaco Customer",
            thumb: { "backgroundImage": "url(img/clients/4.jpg)" }

        },
        {
            review: "This is an excellent plugin. The developers were quick to respond to an integration issue. Solved within 24 hours.",
            reviewer: "Bobby Cox",
            profession: "Bookmify Customer",
            thumb: { "backgroundImage": "url(img/clients/5.jpg)" }

        },
    ]
    return (
        <>
            {/* <!-- Testimonial Slider with rating --> */}
            <div className="fn_cs_personal_reviews slider_beta">
                <div className="container max1500">
                    <div className="r_list">

                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper
                                    spaceBetween={70}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={false}
                                    loop={true}
                                    className="custom-class"
                                    navigation={{
                                        prevEl: ".myprev-button",
                                        nextEl: ".mynext-button",
                                    }}
                                    breakpoints={{

                                        // when window width is >= 768px
        
                                        768: {
                                            // when window width is >= 992px
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            // when window width is >= 992px
                                            slidesPerView: 3,
                                        }
                                    }}
                                    autoplay={{
                                        "delay": 3000,
                                        "disableOnInteraction": true
                                    }}
                                    
                                >
                                    {testimonial.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="r_item fn_vision">
                                                <div className="r_item_in">
                                                    <div className="r_quote">
                                                        <Quote className="fn__svg" />
                                                    </div>
                                                    <div className="r_review">
                                                        <div className="fn_cs_review__stars" data-stars="5">
                                                            <div className="review_in">
                                                                <div className="rating_absolute">
                                                                    <FiveStars className="fn__svg" />
                                                                </div>
                                                                <div className="rating_relative">
                                                                    <div>
                                                                        <FiveStars className="fn__svg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="r_desc">
                                                        <p>{item.review}</p>
                                                    </div>
                                                    <div className="r_reviewer">
                                                        <div className="abs_img" style={item.thumb}></div>
                                                        <div className="title_holder">
                                                            <h3>{item.reviewer}</h3>
                                                            <h5>{item.profession}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                            <div className="fn_cs_swiper__progress fill">
                                <div className="my_pagination_in">
                                    <span className="current"></span>
                                    <span className="total"></span>
                                </div>
                            </div>

                            <div className="fn_cs_swiper__navigation">
                                <div className="mynext-button"></div>
                                <div className="myprev-button"></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Testimonial Slider with rating --> */}
        </>
    )
}
