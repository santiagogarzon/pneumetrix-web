import React from 'react'
import Services from '../components/Home/HomeServices'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'

const right = "/img/about/right.jpg"
const rightImage = "/img/service/right-image.jpg"
const testimonial = "/img/testimonial/bg.jpg"
const portfolio1 = "/img/portfolio/1.jpg"
const portfolio2 = "/img/portfolio/2.jpg"
const portfolio3 = "/img/portfolio/3.jpg"
const portfolio4 = "/img/portfolio/4.jpg"
const map = "/img/blog/map.png"
const blog1 = "/img/blog/1.jpg"
const blog2 = "/img/blog/2.jpg"
const blog3 = "/img/blog/3.jpg"


export default function Index() {
	return (
		<>
			<Title title='Home Alpha' />
			<Layout className={"transdark"}>
				<Title title='Home Delta' />

				<Slider />
				{/* <!-- Principles Modern --> */}
				<div className="fn_cs_principles_modern">
					<div className="container">
						<div className="inner">
							<div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
							<ul className="fn_cs_miniboxes">
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Honesty</h3>
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">01</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Passion</h3>
											<p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">02</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Quality Work</h3>
											<p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">03</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- /Principles Modern --> */}


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
									{/* <div className="r_inner" id="scene">
										<div className="layer border" data-depth="0.3">
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5">
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9">
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div> */}
									<div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
										<div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" data-bg-img="img/about/right.jpg" style={{ "backgroundImage": "url(img/about/right.jpg)" }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About Shortcode --> */}

				</div>
				{/* <!-- /About Section --> */}


				<Services />



				{/* <!-- Service Section --> */}
				<div className="service_section">

					{/* <!-- About with Rating Shortcode --> */}
					<div className="fn_cs_about_with_rating">
						<div className="container">
							<div className="awr_inner">
								<div className="left_part">
									<div className="title_holder">
										<h3>Why choose our services?</h3>
										<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
										<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
									</div>
									<div className="signature">
										<Certificate className="fn__svg" />
										<p>We have a<br />ISO Certificate.</p>
									</div>
								</div>
								<div className="right_part">
									<div className="r_inner">
										<div className="top_section">
											<div className="badge_holder">
												<div className="badge_left">
													<div className="b_title">
														<h3>World&apos;s Leading Industry<br />Corporation</h3>
													</div>
													<div className="b_desc"><span className="year">47</span><span className="text">Years of Experience</span></div>
												</div>
												<div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
											</div>
											<div className="rating_holder">
												<div className="r_header"></div>
												<div className="r_footer"></div>
												<Link href="#"><a></a></Link>
												<Stars className="fn__svg" />
												<h3 className="rating_number">9.7</h3>
												<h3 className="rating_text">Customer Rating</h3>
											</div>
										</div>
										<div className="bottom_section">
											<div className="list">
												<ul>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Best talent in the industry business.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>One of the most expirienced company.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>We have completed over 3000 projects.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Most dedicated and passionate team.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Company has over 2000 workers.</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About with Rating Shortcode --> */}

				</div>
				{/* <!-- /Service Section --> */}


				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>We will Make Your Dream Come True</h3>
								<p>We are focused on sustainable business that delivers the best possible project results.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Our Responsibility</a></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Call to Action --> */}

				{/* <!-- Testimonial Section --> */}
				<div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

					<div className="overlay"></div>

					{/* <!-- Single Testimonial Shortcode --> */}
					<div className="fn_cs_single_testimonial">
						<div className="container">
							<div className="inner">
								<Quotes className="fn__svg"/>
								<div className="content_holder">
									<p>Hiday Motors needed to build a brand new 28,000 sf facility that would both meet our needs and comply with GMs standards - which seemed daunting, to say the least. Industify alleviated all of our concerns and communicated with us every step of the way. We have received dozens of compliments from our customers, and our employees love the new store!</p>
									<h3>Steve Lehman</h3>
									<h5>CEO of Hiday Motors.</h5>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Single Testimonial Shortcode --> */}

				</div>
				{/* <!-- /Testimonial Section --> */}


				{/* <!-- Project Sticky Full --> */}
				<div className="fn_cs_project_sticky_full">
					<div className="inner">
						<div className="left_part">
							<div className="fn_cs_sticky_section">
								<h3>Our latest projects.</h3>
								<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
								<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
								<Link href="/portfolio"><a>View All Projects</a></Link>
							</div>
						</div>

						<div className="right_part">
							<div className="fn_cs_sticky_section">
								<ul>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio1})` }}></div>
												<Link href="/portfolio-single-1"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-1"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-1"><a>
														<span className="text">More Details</span>
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
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio2})` }}></div>
												<Link href="/portfolio-single-2"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-2"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-2"><a>
														<span className="text">More Details</span>
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
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio3})` }}></div>
												<Link href="/portfolio-single-3"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-3"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-3"><a>
														<span className="text">More Details</span>
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
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio4})` }}></div>
												<Link href="/portfolio-single-4"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-4"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-4"><a>
														<span className="text">More Details</span>
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
				{/* <!-- /Project Sticky Full --> */}


				{/* <!-- Blog Section --> */}
				<div className="blog_section">

					<div className="overlay" style={{ "backgroundImage": `url(${map})` }}></div>

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
											<div className="img_holder" style={{ "backgroundImage": `url(${blog1})` }}>
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
											<div className="img_holder" style={{ "backgroundImage": `url(${blog2})` }}>
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
											<div className="img_holder" style={{ "backgroundImage": `url(${blog3})` }}>
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

			</Layout>

		</>
	)
}
