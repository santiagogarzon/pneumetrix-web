import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle3() {
	return (
		<>
			<Title title='Service Single 6' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Oil and Gas Industry</h3>
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
				{/* /Page Title  */}


				{/* Sidebar Page  */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left  */}
							<div className="industify_fn_leftsidebar">

								{/* Single Service  */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/6.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>Thanks to shale oil and gas, the world’s economy is no longer running out of energy-rich hydrocarbons. Rather, we’re now awash in a global bath of cheap oil and gas. What happened to cause this dramatic change in fortune? Simply put, North American Shale Oil and Gas Happened, using the combination of Hydraulic Fracturing and Horizontal Drilling technologies. </p>
										<p>The combined technologies, hydraulic fracturing and radial horizontal well drilling, provided unprecedented accessibility to the huge hydrocarbon-rich shale deposits of North America. Industify upstream oil &amp; gas technical services helped clients to evaluate potential production sites and shale crude reservoirs, and to optimize production while supporting asset integrity management programs. </p>
										<p>Starting in 2011, the massive growth of shale oil and gas production began in key regions such as West Texas and North Dakota, transforming the USA crude oil and natural gas markets in a profound and permanent way. Less expensive natural gas prices thanks to shale gas production has sparked a rapid restructuring of the power generation industry as power-plants reduce coal and turn to natural gas. Inexpensive feedstocks have fueled a massive expansion of the petrochemical industry and the construction of new Liquefied Natural Gas (LNG) export plants.</p>
										<p>The impact of shale oil on the domestic and then international crude oil market was no less dramatic during this time. The tsunami of new shale crude oil flooded the USA with inexpensive petroleum feedstocks and condensates. These new crudes found welcoming markets, benefiting Inland refiners at first, but soon followed by East Coast, Gulf Coast, and West Coast refineries. Limited pipeline networks in the new shale areas meant that “Crude-by-Truck” and especially “Crude-by-Rail” became viable options to get these new crude oils to market. “Crude-by-Water” has witnessed tremendous growth as barges, Jones Act Tankers, and limited international export tankers activity has ballooned in volume. </p>
										<p>Pipelines built after World War II to send imported crude oil north from the Gulf Coast to landlocked inland refiners were reversed for the first time in their long existence, sending domestic shale crude south to Texas and Louisiana refiners and beyond. New refineries were built for the first time in decades and old ones reopened, purpose-built to handle the new shale crudes.</p>
										<p>Imported crude oil from West Africa, the Middle East and Latin America were essentially replaced by the usage of domestic USA shale oil. Quiet places like the Bakken and Eagle Ford became household names and experienced rapid economic expansion and population growth, not unlike the California Gold Rush of 1849.</p>
									</div>

									{/* Check List Shortcode  */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>High-tech exploration and production methods</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Cold-climate operations</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Development of oil sands, heavy oil</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Gas processing, sulphur extraction</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Construction and operation of pipelines</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Specialized controls and computer applications</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
									{/* Check List Shortcode  */}

									{/* Call to Action Shortcode (with corner)  */}
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
									{/* /Call to Action Shortcode (with corner)  */}

									{/* Get Random Services  */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
									<div data-html="includes/random-service.html" data-index="6" data-count="2"></div>
									{/* /Get Random Services  */}

								</div>
								{/* /Single Service  */}


							</div>
							{/* /Main Sidebar: Left  */}


							{/* Main Sidebar: Right  */}
							<div className="industify_fn_rightsidebar">


								{/* Service List  */}
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
								{/* /Service List  */}

								{/* Get Sidebar  */}
								<Sidebar />
								{/* /Get Sidebar  */}


							</div>
							{/* Main Sidebar: Right  */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page  */}
			</Layout>

		</>
	)
}
