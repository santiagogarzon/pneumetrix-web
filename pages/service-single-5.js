import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from "next/link"



export default function ServiceSingle3() {
	return (
		<>
			<Title title='Service Single 5' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Energy &amp; Commodities</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Service Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Housewares &amp; Home Decor</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}


				{/* Sidebar Page */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">

								{/* Single Service */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/5.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>Today’s energy and commodities industries power and feed the world economy. The efficient and effective operation of these projects is vital to sustained energy growth and environmental support. By utilizing Industify’s global energy and commodity testing, inspection, and certification services, businesses can design, develop, manufacture and run more successful and valuable products and processes.</p>
										<p>Industify’s range of energy expertise works to support clients operating in businesses as diverse as oil and gas, petroleum refining and distribution, petrochemicals, power generation, nuclear power, solar, biofuels, tidal, wave and wind power. This affords us a high-level, cross-sectional view of energy industry topics and trends that affect current and future business development, providing insight and opportunities that may otherwise go undetected. Our global network also provides logistical, testing, inspection, certification and consulting expertise to assist clients in running their operations more efficiently and safely while protecting expensive assets, products and infrastructure.</p>
										<p>Commodities are the raw materials which the modern world depends upon for manufactured materials, products and food. We help producers, distributors and processors of these raw materials benefit from optimising their quality control, loss control and financial risk reduction. Products and processes are all enhanced by partnering with Industify, leading to a more successful product and path for all involved.</p>
									</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Agriculture</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Biofuels</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Coal &amp; Solid Fuels</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Minerals</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Nuclear</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Oil &amp; Gas</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Power Equipment</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Power Generation</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Solar</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Wind, Wave &amp; Tidal</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
									{/* Check List Shortcode */}

									{/* Call to Action Shortcode (with corner) */}
									<div className="fn_cs_call_to_action corner">
										<div className="container">
											<div className="cta_holder">
												<div className="title_holder">
													<h3>Industify LLC</h3>
													<p>We build your dream house. Contact us for detailed information.</p>
												</div>
												<div className="link_holder">
													<a href="contact.html">Our Responsibility</a>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner) */}

									{/* Get Random Services */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
									<div data-html="includes/random-service.html" data-index="5" data-count="2"></div>
									{/* /Get Random Services */}

								</div>
								{/* /Single Service */}


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">


								{/* Service List */}
								<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
											<li><Link href="/service-single-9"><a>Aerospace and Defense</a></Link></li>
											<li><Link href="/service-single-8"><a>Automative Manufacturing</a></Link></li>
											<li><Link href="/service-single-7"><a>Chemical Industry</a></Link></li>
											<li><Link href="/service-single-6"><a>Oil and Gas Industry</a></Link></li>
											<li><Link href="/service-single-5"><a>Energy &amp; Commodities</a></Link></li>
											<li><Link href="/service-single-4"><a>Medical Devices</a></Link></li>
											<li className="active"><Link href="/service-single-3"><a>Housewares &amp; Home Decor</a></Link></li>
											<li><Link href="/service-single-2"><a>Textiles &amp; Apparel</a></Link></li>
											<li><Link href="/service-single-1"><a>Construction &amp; Engineering</a></Link></li>
										</ul>
									</div>
								</div>
								{/* /Service List */}

								{/* Get Sidebar */}
								<Sidebar />
								{/* /Get Sidebar */}


							</div>
							{/* Main Sidebar: Right */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page */}
			</Layout>

		</>
	)
}
