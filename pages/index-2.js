import React from 'react'
import DesktopHeader from '../layout/desktop-header'
import MobileHeader from '../layout/mobile-header'
import Title from '../layout/title';
import Link from 'next/link';
import { Arrow_r, PlayVideo, Stars } from '../public/svg/icon';
import { Design, Drawing, Learning, TowerCrane } from '../public/svg/service/IconService';

const headerBG = "img/hero.jpg";
const background1 = "img/about/rating_bg.jpg";
const portfolio_bg1 = "img/portfolio/1.jpg";
const portfolio_bg2 = "img/portfolio/2.jpg";
const portfolio_bg3 = "img/portfolio/3.jpg";
const blog_bg = "img/blog/map.png";
const blog_bg1 = "img/blog/1.jpg";
const blog_bg2 = "img/blog/2.jpg";
const blog_bg3 = "img/blog/3.jpg";


export default function Index3() {
    return (
        <>
            <Title title='Home Gama' />
            <div className="industify_fn_wrapper_all" data-nav-skin="nobglight">

                {/* <!-- Wrapper --> */}
                <div className="industify_fn_wrapper">

                    {/* <!-- Header --> */}
                    <DesktopHeader />
                    {/* <!-- /Header --> */}

                    {/* <!-- Mobile Menu --> */}
                    <MobileHeader />
                    {/* <!-- /Mobile Menu --> */}

                    {/* <!-- Preloader --> */}
                    {/* <Preloader/> */}
                    {/* <!-- /Preloader --> */}

                    {/* <!-- Hero Header --> */}
                    <div className="fn_cs_hero_header">
                        <div className="container">
                            <div className="content_holder max800">
                                <div className="title_holder">
                                    <h3>A Global Leader in Automotive Seating &amp; E-Systems.</h3>
                                    <p>Industify Corporation is ranked #07 on the Fortune 500 with world-class products designed, engineered and manufactured by a diverse team of talented employees. Our vision is to be consistently recognized as the supplier of choice, an employer of choice, the investment of choice and a company that supports the communities where we do business.</p>
                                </div>
                                <div className="btn_holder fn_cs_lightgallery">
                                    <Link href="/services"><a className="discover">Discover Industify</a></Link>
                                    <span className="video lightbox" data-src="https://youtu.be/3j3SQEUfREs">
                                        <span className="icon"></span>
                                        <span className="text">Watch Video</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg_holder">
                            <div className="o_img" style={{ background: `url(${headerBG})` }}></div>
                            <div className="o_color"></div>
                        </div>
                    </div>
                    {/* <!-- /Hero Header --> */}


                    {/* <!-- Introduce Shortcode --> */}
                    <div className="fn_cs_introduce_wrap fn_cs_lightgallery" data-url-show="yes" data-wing-switch="enable">
                        <div className="container">
                            <div className="fn_cs_introduce">

                                <span className="wing11"></span>
                                <span className="wing12"></span>
                                <span className="wing21"></span>
                                <span className="wing22"></span>
                                <span className="video lightbox" data-src="https://youtu.be/3j3SQEUfREs"><span></span></span>
                                <div className="o_color"></div>

                                <div className="content_holder">
                                    <div className="title_holder">
                                        <h5>Let Me Introduce</h5>
                                        <h3>Our Company</h3>
                                        <p>For over 47 years, the Industify family has been building relationships and projects that last. We build safe environments and eco-friendly solutions in the communities in which we work. Most importantly, we build strong relationships that allow us to build anything, anywhere.  No matter the job, we go beyond building.</p>
                                    </div>
                                    <div className="badge_holder">
                                        <div className="title">
                                            <h3>World&apos;s Leading Industry<br />Corporation</h3>
                                        </div>
                                        <div className="content"><span className="year">47</span><span>years of experience</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Introduce Shortcode --> */}


                    {/* <!-- Service Classic Shortcode --> */}
                    <div className="fn_cs_services_classic">
                        <div className="container">
                            <div className="list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-1"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
                                                <Learning className="fn__svg" />
                                            </span>
                                            <h3>Preconstruction Estimating</h3>
                                            <p>During this phase, we will work to provide a detailed analysis of the project and we will establish project expectations along with our clients.</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-2"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
                                                <Drawing className="fn__svg" />
                                            </span>
                                            <h3>General <br />Contracting</h3>
                                            <p>The client retains an architect or engineer to design the project and to prepare the necessary drawings and specifications for new project.</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-3"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
                                                <TowerCrane className="fn__svg" />
                                            </span>
                                            <h3>Construction Management</h3>
                                            <p>Under a Construction Management contract, the client secures the services of a construction manager to work with the design team.</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <Link href="/service-single-4"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                                            <span className="icon">
                                                <Design className="fn__svg" />
                                            </span>
                                            <h3>Design-Build</h3>
                                            <p>In this section, we let clients select a design-build arrangement when they want to work with one contract entity, instead of several contractors and consultants.</p>
                                            <span className="more_details">
                                                <Link href="#"><a>
                                                    More Details
                                                    <Arrow_r className="fn__svg" />
                                                </a></Link>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Service Classic Shortcode --> */}



                    {/* <!-- Info & Rating --> */}
                    <div className="fn_cs_info_rating">
                        <div className="container">
                            <div className="inner">
                                <div className="left_part">
                                    <div className="title_holder">
                                        <h3 className="l_title">World&apos;s Leading Industry Corporation</h3>
                                        <p className="l_desc">To further develop our corporate strengths we have established a corporate mandate to maintain strong core values that truly reflect the companys philosophy.</p>
                                    </div>
                                    <div className="l_video fn_cs_lightgallery">
                                        <span className="lightbox" data-src="https://youtu.be/3j3SQEUfREs">
                                            <span className="icon">
                                                <PlayVideo className="fn__svg" />
                                            </span>
                                            <span className="text">View Company Promo Video</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="middle_part">
                                    <div className="m_in">
                                        <div className="rating_holder">
                                            <div className="r_header"></div>
                                            <div className="r_footer"></div>
                                            <Link href="#"><a></a></Link>
                                            <Stars className="fn__svg" />
                                            <h3 className="rating_number">9.7</h3>
                                            <h3 className="rating_text">Customer Rating</h3>
                                        </div>
                                        <div className="tagline_holder">
                                            <div className="tl_inner"><span>Full reviews at trustpilot</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_part">
                                    <div className="o_img" style={{ backgroundImage: `url(${background1})` }}></div>
                                    <div className="o_color"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Info & Rating --> */}


                    {/* <!-- Principles --> */}
                    <div className="fn_cs_principles">
                        <div className="container">
                            <div className="inner">
                                <div className="left_part">
                                    <h3>Our Guiding Principles</h3>
                                    <p>For over 35 years, the Industify family has been building relationships and projects that last.  As a diversified construction management, design-build, and general contracting firm, Industify is 	recognized as one of Upstate New York&apos;s largest construction companies.</p>
                                    <p>Serving an impressive list of long-term clients, we are an organization of seasoned professionals with a tremendous breadth of construction experience and expertise across multiple industries.</p>
                                </div>
                                <div className="right_part">
                                    <ul className="masonry">
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Humility</h3>
                                                    <p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
                                                </div>
                                                <div className="number_holder">01</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Honesty</h3>
                                                    <p>Be sure of our facts and be honest and straightforward in all of our dealings with each other and our clients.</p>
                                                </div>
                                                <div className="number_holder">02</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Passion</h3>
                                                    <p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
                                                </div>
                                                <div className="number_holder">03</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Quality Work</h3>
                                                    <p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
                                                </div>
                                                <div className="number_holder">04</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Principles --> */}


                    {/* <!-- Project Sticky Modern Shortcode --> */}
                    <div className="fn_cs_project_sticky_modern" data-animation-type="alpha">
                        <div className="container">
                            <div className="inner">
                                <div className="left_part">
                                    <div className="fn_cs_sticky_section">
                                        <div className="left_part_in">
                                            <h3>Our latest Projects</h3>
                                            <p>It&apos;s a burning, never-ending desire to help our clients maximize their outcomes and exceed their strategic goals. Though our goal is a bit aspirational, our values are what drive us every day. </p>
                                            <Link href="/portfolio"><a>All Projects</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_part">
                                    <div className="fn_cs_sticky_section">
                                        <ul>
                                            <li>
                                                <div className="item">
                                                    <div className="img_holder">
                                                        <img src="img/thumb/560-375.jpg" alt="" />
                                                        <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg1})` }}><Link href="/portfolio-single-1"><a></a></Link></div>
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3><Link href="/portfolio-single-1"><a>Industify Gas and Oil Organization</a></Link></h3>
                                                        <p>
                                                            <Link href="/portfolio-single-1"><a>
                                                                <span className="text">View More</span>
                                                                <span className="arrow">
                                                                    <Arrow_r className="fn__svg" />
                                                                </span>
                                                            </a></Link>
                                                        </p>
                                                        <Link href="/portfolio-single-1"><a></a></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <div className="img_holder">
                                                        <img src="img/thumb/560-375.jpg" alt="" />
                                                        <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg2})` }}><Link href="/portfolio-single-2"><a></a></Link></div>
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3><Link href="/portfolio-single-2"><a>Chaban Car Industry</a></Link></h3>
                                                        <p>
                                                            <Link href="/portfolio-single-2"><a>
                                                                <span className="text">View More</span>
                                                                <span className="arrow">
                                                                    <Arrow_r className="fn__svg" />
                                                                </span>
                                                            </a></Link>
                                                        </p>
                                                        <Link href="/portfolio-single-2"><a></a></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <div className="img_holder">
                                                        <img src="img/thumb/560-375.jpg" alt="" />
                                                        <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg3})` }}><Link href="/portfolio-single-3"><a></a></Link></div>
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3><Link href="/portfolio-single-3"><a>Industify Gas and Oil Organization</a></Link></h3>
                                                        <p>
                                                            <Link href="/portfolio-single-3"><a>
                                                                <span className="text">View More</span>
                                                                <span className="arrow">
                                                                    <Arrow_r className="fn__svg" />
                                                                </span>
                                                            </a></Link>
                                                        </p>
                                                        <Link href="/portfolio-single-3"><a></a></Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Project Sticky Modern Shortcode --> */}




                    {/* <!-- Blog Section --> */}
                    <div className="blog_section">

                        <div className="overlay" style={{ backgroundImage: `url(${blog_bg})` }}></div>

                        {/* <!-- Main Title --> */}
                        <div className="fn_cs_main_title">
                            <div className="container">
                                <div className="title_holder">
                                    <h3>Thoughts &amp; Experiments</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Main Title --> */}

                        {/* <!-- Triple Blog Modern Shortcode --> */}
                        <div className="fn_cs_triple_blog_modern fn_alpha">
                            <div className="container">
                                <div className="inner">

                                    <ul>
                                        <li>
                                            <div className="item">
                                                <div className="img_holder" style={{ backgroundImage: `url(${blog_bg1})` }}>
                                                    <div className="time">
                                                        <span></span>
                                                        <h3>28</h3>
                                                        <h5>Aug</h5>
                                                        <h5>2018</h5>
                                                    </div>
                                                    <Link href="/blog-single-1"><a></a></Link>
                                                    <img src="img/thumb/370-250.jpg" alt="" />
                                                </div>
                                                <div className="title_holder">
                                                    <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                                                    <h3><Link href="/blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
                                                    <p className="t_footer"><Link href="/blog-single-1"><a>Read More</a></Link></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="img_holder" style={{ backgroundImage: `url(${blog_bg2})` }}>
                                                    <div className="time">
                                                        <span></span>
                                                        <h3>27</h3>
                                                        <h5>Aug</h5>
                                                        <h5>2018</h5>
                                                    </div>
                                                    <Link href="/blog-single-2"><a></a></Link>
                                                    <img src="img/thumb/370-250.jpg" alt="" />
                                                </div>
                                                <div className="title_holder">
                                                    <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                                                    <h3><Link href="/blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
                                                    <p className="t_footer"><Link href="/blog-single-2"><a>Read More</a></Link></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="img_holder" style={{ backgroundImage: `url(${blog_bg3})` }}>
                                                    <div className="time">
                                                        <span></span>
                                                        <h3>26</h3>
                                                        <h5>Aug</h5>
                                                        <h5>2018</h5>
                                                    </div>
                                                    <Link href="/blog-single-3"><a></a></Link>
                                                    <img src="img/thumb/370-250.jpg" alt="" />
                                                </div>
                                                <div className="title_holder">
                                                    <p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
                                                    <h3><Link href="/blog-single-3"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
                                                    <p className="t_footer"><Link href="/blog-single-3"><a>Read More</a></Link></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /Triple Blog Modern Shortcode --> */}

                    </div>
                    {/* <!-- /Blog Section --> */}

                    {/* <!-- Footer --> */}
                    <div data-html="includes/footer.html"></div>
                    {/* <!-- /Footer --> */}


                </div>
            </div>
        </>
    )
}
