import React from 'react'
import Home3Slider from '../components/Home3/Home3Slider'
import Home3Testimonial from '../components/Home3/Home3Testimonial'
import Layout from '../layout/layout'
import Title from '../layout/title'
import { Arrow_r } from '../public/svg/icon'
import { Design, Drawing, Learning, TowerCrane } from '../public/svg/service/IconService'
import Link from 'next/link'
import CounterUp from '../components/Home3/CounterUp'


const sixfoldGallery1 = "img/sixfold-gallery/1.jpg"
const sixfoldGallery2 = "img/sixfold-gallery/2.jpg"
const sixfoldGallery3 = "img/sixfold-gallery/3.jpg"
const sixfoldGallery4 = "img/sixfold-gallery/4.jpg"
const sixfoldGallery5 = "img/sixfold-gallery/5.jpg"
const sixfoldGallery6 = "img/sixfold-gallery/6.jpg"



export default function Index3() {
	return (
		<>
		<Title title='Home Delta' />
			<Layout className={"nobglight"}>
				<Home3Slider/>

				{/* <!-- Service Classic (with video button) --> */}
				<div className="fn_cs_services_classic video_enable">
					<div className="container max1500">

						<div className="button_inner">
							<span className="rounded"></span>
							<Link  href="https://www.youtube.com/watch?v=cnzFPq_8428"><a className="popup-youtube"></a></Link>
						</div>
						<div className="video_holder">
							<span className="video_bg"></span>
						</div>

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
										<span className="more_details ixon">
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
				{/* <!-- /Service Classic (with video button) --> */}


				{/* <!-- Description Shortcode --> */}
				<div className="fn_cs_description" data-margin-bottom="33">
					<div className="container max1500">
						<div className="desc_holder max500">
							<p>We are construction partners who are passionate about what we do and our partners success. We pride ourselves on being solution providers.</p>
						</div>
					</div>
				</div>
				{/* <!-- /Description Shortcode --> */}

				{/* <!-- Button Shortcode --> */}
				<div className="fn_cs_button">
					<div className="container max1500">
						<div className="inner max500">
							<Link href="/services"><a>Full Services List</a></Link>
						</div>
					</div>
				</div>
				{/* <!-- /Button Shortcode --> */}

				<div className="space" style={{"padding-bottom":"570px"}}></div>

				<div className="section_1">
					{/* <!-- Sixfold Gallery Shortcode --> */}
					<div className="fn_cs_sixfold_gallery">
						<div className="inner">
							<ul>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery1})` }}></div>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery2})` }}></div>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery3})` }}></div>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery4})` }}></div>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery5})` }}></div>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_in">
											<img src="img/thumb/550-372.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${sixfoldGallery6})` }}></div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- /Sixfold Gallery Shortcode --> */}

					{/* <!-- Description Shortcode --> */}
					<div className="fn_cs_description" data-margin-bottom="43">
						<div className="container max1500">
							<div className="desc_holder">
								<p>It’s about time for a live page builder, with no limits of design. A page builder that delivers high-end page designs and advanced capabilities, never before seen on WordPress. These floods develop as a result of rainfall events that are at or near the yearly maximum.</p>
							</div>
						</div>
					</div>
					{/* <!-- /Description Shortcode --> */}

					{/* <!-- Button Shortcode --> */}
					<div className="fn_cs_button full" data-margin-bottom="56">
						<div className="container max1500">
							<div className="inner">
								<Link href="/gallery"><a>Visit Our Gallery</a></Link>
							</div>
						</div>
					</div>
					{/* <!-- /Button Shortcode --> */}

					{/* <!-- Counter with Caption Shortcode --> */}
					<div className="fn_cs_counter_with_caption" data-column="4">
						<div className="container">
							<div className="inner">
								<ul>
									<li>
										<div className="item">
											<h3><span className="fn_cs_counter" data-separator="" data-from="0" data-to="3" data-speed="3000" data-decimals="0"><CounterUp count={3} time={0.3} /></span><span className="suffix">k+</span></h3>
											<p>Projects Completed</p>
										</div>
									</li>
									<li>
										<div className="item">
											<h3><span className="fn_cs_counter" data-separator="" data-from="0" data-to="9.5" data-speed="3000" data-decimals="1"><CounterUp count={9.5} time={0.5}/></span><span className="suffix"></span></h3>
											<p>Rating on Industry</p>
										</div>
									</li>
									<li>
										<div className="item">
											<h3><span className="fn_cs_counter" data-separator="" data-from="0" data-to="300" data-speed="3000" data-decimals="0"><CounterUp count={300} time={3} /></span><span className="suffix">+</span></h3>
											<p>Company Awards</p>
										</div>
									</li>
									<li>
										<div className="item">
											<h3><span className="fn_cs_counter" data-separator="" data-from="0" data-to="950" data-speed="3000" data-decimals="0"><CounterUp count={950} time={3}/></span><span className="suffix">k+</span></h3>
											<p>Working Hours</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Counter with Caption Shortcode --> */}


					<div className="space" style={{"padding-bottom":"165px"}}></div>

				</div>


				<div className="section_2">

					<div className="title__holder" data-margin-bottom="96">
						<div className="container max1500">
							<h3>What our clients saying about us?</h3>
						</div>
					</div>

					<Home3Testimonial />

				</div>

				<div className="section_3">

					<div className="title__holder" data-margin-bottom="120">
						<div className="container max1500">
							<h3>What our clients saying about us?</h3>
						</div>
					</div>

					<div className="container max1500">
						{/* <!-- Project Elegant List --> */}
						<div className="fn_cs_project_elegant_list" data-layout="beta">
							<div className="items first_line">
								<div className="left_part">
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/910-740.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/1.jpg)" }}><Link href="/portfolio-single-1"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Gas and Oil</p>
												<h3><Link href="/portfolio-single-1"><a>Industify Gas and Oil Organization</a></Link></h3>
											</div>
										</div>
									</div>
								</div>
								<div className="right_part">
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/420-300.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/2.jpg)" }}><Link href="/portfolio-single-2"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Machinery</p>
												<h3><Link href="/portfolio-single-2"><a>Odeon Industrial Machinery</a></Link></h3>
											</div>
										</div>
									</div>
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/420-300.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/3.jpg" }}><Link href="/portfolio-single-3"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Car Industry</p>
												<h3><Link href="/portfolio-single-3"><a>Chaban Car Industry</a></Link></h3>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="items second_line">
								<div className="item_wrapper">
									<div className="item">
										<div className="img_holder">
											<img src="img/thumb/420-300.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/4.jpg" }}><Link href="/portfolio-single-4"><a></a></Link></div>
										</div>
										<div className="title_holder">
											<p>Aerospace</p>
											<h3><Link href="/portfolio-single-4"><a>Arturo-Merino-Benítez</a></Link></h3>
										</div>
									</div>
								</div>
								<div className="item_wrapper">
									<div className="item">
										<div className="img_holder">
											<img src="img/thumb/420-300.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/5.jpg" }}><Link href="/portfolio-single-5"><a></a></Link></div>
										</div>
										<div className="title_holder">
											<p>Construction</p>
											<h3><Link href="/portfolio-single-5"><a>Femern Tunnel, Germany-Denmark</a></Link></h3>
										</div>
									</div>
								</div>
								<div className="item_wrapper">
									<div className="item">
										<div className="img_holder">
											<img src="img/thumb/420-300.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/6.jpg" }}><Link href="/portfolio-single-6"><a></a></Link></div>
										</div>
										<div className="title_holder">
											<p>Construction</p>
											<h3><Link href="/portfolio-single-6"><a>Meliá Hotel La Défense</a></Link></h3>
										</div>
									</div>
								</div>
							</div>
							<div className="items first_line fn_reversed">
								<div className="left_part">
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/910-740.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/7.jpg)" }}><Link href="/portfolio-single-7"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Construction</p>
												<h3><Link href="/portfolio-single-7"><a>MLC Tower</a></Link></h3>
											</div>
										</div>
									</div>
								</div>
								<div className="right_part">
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/420-300.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/8.jpg)" }}><Link href="/portfolio-single-8"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Construction</p>
												<h3><Link href="/portfolio-single-8"><a>Mandarin Oriental</a></Link></h3>
											</div>
										</div>
									</div>
									<div className="item_wrapper">
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/420-300.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": "url(img/project-elegant/9.jpg)" }}><Link href="/portfolio-single-9"><a></a></Link></div>
											</div>
											<div className="title_holder">
												<p>Construction</p>
												<h3><Link href="/portfolio-single-9"><a>The Peninsula</a></Link></h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Project Elegant List --> */}
					</div>

					{/* <!-- Description Shortcode --> */}
					<div className="fn_cs_description" data-margin-bottom="43">
						<div className="container max1500">
							<div className="desc_holder">
								<p>It’s about time for a live page builder, with no limits of design. A page builder that delivers high-end page designs and advanced capabilities, never before seen on WordPress. These floods develop as a result of rainfall events that are at or near the yearly maximum.</p>
							</div>
						</div>
					</div>
					{/* <!-- /Description Shortcode --> */}

					{/* <!-- Button Shortcode --> */}
					<div className="fn_cs_button full">
						<div className="container max1500">
							<div className="inner">
								<Link href="/portfolio"><a>See Our Portfolio</a></Link>
							</div>
						</div>
					</div>
					{/* <!-- /Button Shortcode --> */}

				</div>




				{/* <!-- Section 4 --> */}
				<div className="section_4">

					<div className="title__holder" data-margin-bottom="112">
						<div className="container">
							<h3>Companies who trust our services</h3>
						</div>
					</div>

					{/* <!-- Partners Gamma Shortcode --> */}
					<div className="fn_cs_personal_partners_gamma" data-margin-bottom="30">
						<div className="container max1500">
							<div className="partners_inner">
								<ul>
									<li>
										<div className="list_inner">
											<img src="img/partners/1.png" alt="" />
											<span className="shape"><span className="brand">wikoo.com</span></span>
											<Link href="http://wikoo.com/"><a className="full_link"></a></Link>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<img src="img/partners/2.png" alt="" />
											<span className="shape"><span className="brand">aduyu.com</span></span>
											<Link href="http://aduyu.com/"><a className="full_link"></a></Link>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<img src="img/partners/3.png" alt="" />
											<span className="shape"><span className="brand">design.com</span></span>
											<Link href="http://design.com/"><a className="full_link"></a></Link>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<img src="img/partners/4.png" alt="" />
											<span className="shape"><span className="brand">goldage.com</span></span>
											<Link href="http://goldage.com/"><a className="full_link"></a></Link>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<img src="img/partners/5.png" alt="" />
											<span className="shape"><span className="brand">yalgoo.com</span></span>
											<Link href="http://yalgoo.com/"><a className="full_link"></a></Link>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<img src="img/partners/6.png" alt="" />
											<span className="shape"><span className="brand">dalgate.com</span></span>
											<Link href="http://dalgate.com/"><a className="full_link"></a></Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Partners Gamma Shortcode --> */}


					<div className="container max1500">
						<div className="contact_alpha">
							<div className="contact_in">
								<div className="contact_left">
									<div className="left_in">
										<h3>Do you want to be in our clients list?</h3>
										<p>You have a very good chance right now. Don’t miss it out</p>
									</div>
								</div>
								<div className="contact_right">
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="TrendyCoderteam@gmail.com">


										{/* Don't remove below code in avoid to work contact form properly.
										You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										{/* <!-- --> */}

										<div className="items">
											<div className="item">
												<input id="name" type="text" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message"></textarea>
											</div>
											<div className="item">
												<Link href="#"><a id="send_message">Send Message</a></Link>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>


				</div>
				{/* <!-- /Section 4 --> */}



				{/* <!-- Section 5 --> */}
				<div className="section_5">

					<div className="title__holder" data-margin-bottom="112">
						<div className="container">
							<h3>Our company&apos;s latest news</h3>
						</div>
					</div>


					{/* <!-- Triple Blog Modern Shortcode --> */}
					<div className="fn_cs_triple_blog_modern fn_beta">
						<div className="container max1500">
							<div className="inner">
								<ul>
									<li>
										<div className="item">
											<div className="img_holder" style={{"backgroundImage": "url(/img/blog/1.jpg)"}}>
												<Link href="/blog-single-1"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="beta_t_holder">
												<p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder"><a target="_blank" rel="noreferrer">TrendyCoder</a></Link></span> / <span>August 28, 2018</span></p>
												<h3><Link href="/blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": "url(/img/blog/2.jpg)" }}>
												<Link href="/blog-single-2"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="beta_t_holder">
												<p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder"><a target="_blank" rel="noreferrer">TrendyCoder</a></Link></span> / <span>August 27, 2018</span></p>
												<h3><Link href="/blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": "url(/img/blog/3.jpg)" }}>
												<Link href="/blog-single-3"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="beta_t_holder">
												<p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder"><a target="_blank" rel="noreferrer">TrendyCoder</a></Link></span> / <span>August 26, 2018</span></p>
												<h3><Link href="https://industify.frenify.net/1/citb-appoints-peter-lauener-as-new-chairman/"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Triple Blog Modern Shortcode --> */}

				</div>
				{/* <!-- /Section 5 --> */}

			</Layout>

		</>
	)
}
