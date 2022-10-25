import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DesktopHeader from '../layout/desktop-header'
import Footer from '../layout/footer'
import MobileHeader from '../layout/mobile-header'
import Preloader from '../layout/preloader'
import Title from '../layout/title'
import { Checked, Stars, PlayVideo, Arrow_r } from '../public/svg/icon'
import { TowerCrane, Drawing, Learning } from '../public/svg/service/IconService'
import Link from 'next/link'

export default function Index1() {
  return (
    <>
      <Title title='Home Beta' />
      {/* <!-- Wrapper All --> */}
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
              <div className="content_holder max450">
                <div className="title_holder">
                  <h3>Know About Mission <span>Statement</span></h3>
                  <p>We are committed to providing the highest level of professionalism, service response, personalised solutions, competitive prices, professional and qualified, integrated design and quality workmanship.</p>
                </div>
                <div className="btn_holder fn_cs_lightgallery">
                  <Link href="/services"><a className="discover">Discover our Website</a></Link>
                  <span className="video lightbox" data-src="https://youtu.be/3j3SQEUfREs">
                    <span className="icon"></span>
                    <span className="text">Watch Video</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg_holder">
              <div className="o_img" style={{ "backgroundImage": "url(/img/hero.jpg)" }}></div>
              <div className="o_color"></div>
            </div>
          </div>
          {/* <!-- /Hero Header --> */}

          {/* <!-- Info List --> */}
          <div className="fn_cs_info_list full" data-cols="3">
            <div className="container">
              <div className="list">
                <ul>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>We Have ISO Certificate</h3>
                      <p>An ISO 1900:2007</p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>We Provide High Services</h3>
                      <p>That you have expected</p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <span className="icon">
                        <Checked className="fn__svg"/>
                      </span>
                      <h3>Most Expirienced Company</h3>
                      <p>In the constrution business</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /Info List --> */}

          {/* <!-- About Section --> */}
          <div className="about_section">

            {/* <!-- About Shortcode --> */}
            <div className="fn_cs_about">
              <div className="container">
                <div className="a_inner">
                  <div className="leftpart">
                    <div className="title_holder">
                      <h3 className="title">We are Industify</h3>
                      <p>Industify is a pioneer in design-build specializing in engineering, architecture and construction services to both domestic and international customers. Founded in 1960, Industify is a family-owned company headquartered in Lexington, Ky. with offices across the U.S., Canada and Japan.</p>
                      <p>To provide exceptional services to the insurance industry and thier clients, the property owner. We are committed to providing the highest level of professionalism, service response, and quality workmanship.</p>
                    </div>
                    <div className="sign_holder">
                      <h3 className="name">Alan Michaelis</h3>
                      <p className="occ">Chief Executive</p>
                    </div>
                  </div>
                  <div className="rightpart">
                    <div className="r_inner" id="scene">
                      <div className="layer border" data-depth="0.3">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <img src="/img/thumb/500-560.jpg" alt="" />
                      </div>
                      <div className="img_holder layer" data-depth="0.5">
                        <img src="/img/thumb/500-560.jpg" alt="" />
                        <div className="abs_img" style={{ "backgroundImage": "url(/img/about/right.jpg)" }}></div>
                      </div>
                      <div className="dots layer" data-switch="disable" data-depth="0.9">
                        <img src="/img/thumb/500-560.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /About Shortcode --> */}

          </div>
          {/* <!-- /About Section --> */}


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
                      <PlayVideo className="fn__svg"/>
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
                      <Stars className="fn__svg"/>
                      <h3 className="rating_number">9.7</h3>
                      <h3 className="rating_text">Customer Rating</h3>
                    </div>
                    <div className="tagline_holder" style={{ "height": "310.969px" }}>
                      <div className="tl_inner"><span>Full reviews at trustpilot</span></div>
                    </div>
                  </div>
                </div>
                <div className="right_part">
                  <div className="o_img" style={{ "backgroundImage": "url(/img/about/rating_bg.jpg)" }}></div>
                  <div className="o_color"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Info & Rating --> */}

          {/* <!-- Service Section #2 --> */}
          <div className="service_section_2">

            {/* <!-- Main Title --> */}
            <div className="fn_cs_main_title">
              <div className="container">
                <div className="title_holder">
                  <h3>Our Helpful &amp; Services</h3>
                </div>
              </div>
            </div>
            {/* <!-- /Main Title --> */}



            {/* <!-- Services Shortcode --> */}
            <div className="fn_cs_services">
              <div className="container">
                <div className="list">
                  <ul>
                    <li>
                      <div className="item">
                        <Link href="/service-single-9"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <Learning className="fn__svg" />
                        </span>
                        <h3>Aerospace and  <br />Defense</h3>
                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link href="/service-single-8"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <Drawing className="fn__svg" />
                          {/* <img className="fn__svg" src="/svg/service/drawing.svg" alt="svg" /> */}
                        </span>
                        <h3>Automative Manufacturing</h3>
                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <Link href="/service-single-7"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
                        <span className="icon">
                          <span></span>
                          <TowerCrane className="fn__svg" />
                          {/* <img className="fn__svg" src="/svg/service/tower-crane.svg" alt="svg" /> */}
                        </span>
                        <h3>Chemical <br />Industry</h3>
                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /Services Shortcode --> */}

          </div>
          {/* <!-- /Service Section #2 --> */}





          {/* <!-- Call to Action --> */}
          <div className="fn_cs_call_to_action">
            <div className="container">
              <div className="cta_holder">
                <div className="title_holder">
                  <h3>We will Make Your Dream Come True</h3>
                  <p>We are focused on sustainable business that delivers the best possible project results.</p>
                </div>
                <div className="link_holder">
                  <Link href="https://industify.frenify.net/1/contact/"><a>Our Responsibility</a></Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Call to Action --> */}



          {/* <!-- Project Sticky Shortcode --> */}
          <div className="fn_cs_project_sticky">
            <div className="container">
              <div className="inner">
                <div className="left_part">
                  <div className="fn_cs_sticky_section">
                    <h3>Our latest <span>Projects</span></h3>
                    <p>To provide exceptional services to the insurance industry and thier clients, the property owner. We are committed to providing the highest level of professionalism, service response, and quality workmanship.</p>
                    <Link href="portfolio.html"><a>
                      <span className="text">View All Projects</span>
                      <span className="arrow">
                        <Arrow_r className="fn__svg" />
                      </span>
                      <span className="arrow_hover">
                        <Arrow_r className="fn__svg" />
                      </span>
                    </a></Link>
                  </div>
                </div>
                <div className="right_part">
                  <div className="fn_cs_sticky_section">
                    <ul>
                      <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="/img/thumb/560-375.jpg" alt="" />
                            <div className="abs_img" style={{ "backgroundImage": "url(/img/portfolio/1.jpg)" }}>
                              <Link href="/portfolio-single-1"><a></a></Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-1"><a>Industify Gas and Oil Organization</a></Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-1"><a>
                                <span className="text">View More</span>
                                <span className="arrow">
                                  <Arrow_r className="fn__svg" />
                                </span>
                              </a></Link>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="/img/thumb/560-375.jpg" alt="" />
                            <div className="abs_img" style={{ "backgroundImage": "url(/img/portfolio/2.jpg)" }}>
                              <Link href="/portfolio-single-2"><a></a></Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-2"><a>Odeon Industrial Machinery</a></Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-2"><a>
                                <span className="text">View More</span>
                                <span className="arrow">
                                  <Arrow_r className="fn__svg" />
                                </span>
                              </a></Link>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <div className="img_holder">
                            <img src="/img/thumb/560-375.jpg" alt="" />
                            <div className="abs_img" style={{ "backgroundImage": "url(/img/portfolio/3.jpg)" }}>
                              <Link href="/portfolio-single-3"><a></a></Link>
                            </div>
                          </div>
                          <div className="title_holder">
                            <h3>
                              <Link href="/portfolio-single-3"><a>Chaban Car Industry</a></Link>
                            </h3>
                            <p>
                              <Link href="/portfolio-single-3"><a>
                                <span className="text">View More</span>
                                <span className="arrow">
                                  <Arrow_r className="fn__svg" />
                                </span>
                              </a></Link>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Project Sticky Shortcode --> */}


          {/* <!-- Support Section --> */}
          <div className="support_section_2">
            {/* <!-- Support Shortcode --> */}
            <div className="fn_cs_support_block" data-icon-type="none">
              <div className="container">
                <div className="support_block">
                  <div className="content">
                    <div className="desc">
                      <p>Don&apos;t hesitate and lets get started! Contact us for a free quote on your next home improvement project.</p>
                    </div>
                    <div className="bottom_section">
                      <div className="link_block"><Link href="https://industify.frenify.net/1/contact/"><a>Request an Estimate</a></Link></div>
                      <div className="tfree_block">
                        <p>Toll Free: 1-800-987-6543 </p>
                      </div>
                    </div>
                  </div>
                  <div className="img_wrap">
                    <span></span>
                    <img src="/img/about/support.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Support Shortcode --> */}
          </div>
          {/* <!-- /Support Section --> */}

          {/* <!-- Blog Section --> */}
          <div className="blog_section">

            <div className="overlay" style={{ "backgroundImage": "url(/img/blog/map.png)" }}></div>

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
                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/1.jpg)" }}>
                          <div className="time">
                            <span></span>
                            <h3>28</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-1"><a></a></Link>
                          <img src="/img/thumb/370-250.jpg" alt="" />
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
                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/2.jpg)" }}>
                          <div className="time">
                            <span></span>
                            <h3>27</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-2"><a></a></Link>
                          <img src="/img/thumb/370-250.jpg" alt="" />
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
                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/3.jpg)" }}>
                          <div className="time">
                            <span></span>
                            <h3>26</h3>
                            <h5>Aug</h5>
                            <h5>2018</h5>
                          </div>
                          <Link href="/blog-single-3"><a></a></Link>
                          <img src="/img/thumb/370-250.jpg" alt="" />
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

          {/* Site Footer Start */}
          <Footer />
          {/* Site Footer End */}



        </div>
        {/* <!-- /Wrapper --> */}


      </div>
    </>

  )
}
