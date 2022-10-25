import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'
import PhotoGallery from '../components/Gallery/PhotoGallery'


export default function Portfolio1() {
	return (
		<>
		<Title title='Portfolio Single 1' />
			<Layout>
				<div className="industify_fn_portfolio_single">

					{/* Justified Images */}
					<div className="fn_cs_justified_wrap">
						<PhotoGallery/>
					</div>
					{/* /Justified Images */}

					{/* Portfolio Content */}
					<div className="industify_fn_psingle_content">
						<div className="container">
							<div className="content_in">

								<div className="content_part">

									<h3>Industify Gas and Oil Organization</h3>

									<p>We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide. Through our global network of state-of-the-art facilities and industry-leading technical expertise we provide innovative and bespoke Assurance, Testing, Inspection and Certification services to customers.</p>

									<p>We provide a systemic approach to supporting our customers’ Quality Assurance efforts in each of the areas of their operations including R&amp;D, raw materials sourcing, components suppliers, manufacturing, transportation, distribution and retail channels, and consumer management.</p>

									<p>Matao is an industry leader with more than 43,000 employees in 1,000 locations in over 100 countries. We deliver Total Quality Assurance expertise 24 hours a day, 7 days a week with our industry-winning processes and customer-centric culture.</p>

									<p>Whether your business is local or global, we can help to ensure that your products meet quality, health, environmental, safety, and social accountability standards for virtually any market around the world. We hold extensive global accreditations, recognitions, and agreements, and our knowledge of and expertise in overcoming regulatory, market, and supply chain hurdles is unrivalled.</p>

									<h4>Heavy equipment and industrial machines are more complex than ever. In an increasingly competitive market, companies must ensure innovation and manage complexity</h4>

									<p>The 433-metre structure has a 126-metre central span that lifts to a height of 53 metres in just 11 minutes to allow ships to enter. The bridge showcases VINCI Construction’s wide-ranging expertise in foundations, mechanical engineering, marine works and civil engineering.</p>

									<blockquote>To connect the historic centre of Bordeaux on the left bank of the river with the business and residential neighbourhoods on the right bank without preventing cruise ships from reaching the Port de la Lune dock, the city opted to build a lift bridge.</blockquote>

									<div className="share_box">
										<div className="industify_fn_share_icons">
											<label>Share:</label>
											<ul>
												<li><Link href="http://www.facebook.com/sharer.php?u=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-facebook"></i></a></Link></li>
												<li><Link href="https://twitter.com/share?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-twitter"></i></a></Link></li>
												<li><Link href="https://plus.google.com/share?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-gplus"></i></a></Link></li>
												<li><Link href="http://pinterest.com/pin/create/button/?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html&amp;"><a target="_blank" rel="noreferrer"><i className="xcon-pinterest"></i></a></Link></li>
												<li><Link href="https://www.vk.com/sharer.php?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-vkontakte"></i></a></Link></li>
											</ul>
										</div>
									</div>

								</div>

								<div className="helpful_part">

									<div className="hp_inner">
										<ul>
											<li>
												<p>Category</p>
												<span>Gas and Oil</span>
											</li>
											<li>
												<p>Value</p>
												<span>$2,900,000,000</span>
											</li>
											<li>
												<p>Client</p>
												<span>Servitas</span>
											</li>
											<li>
												<p>Architect</p>
												<span>PGAL Architects</span>
											</li>
											<li>
												<p>Location</p>
												<span>Design Builder</span>
											</li>
											<li>
												<p>Completion Date</p>
												<span>August 2017</span>
											</li>
											<li>
												<p>Square Footage</p>
												<span>2,200,000</span>
											</li>
										</ul>
									</div>
								</div>


							</div>
						</div>
					</div>
					{/* /Portfolio Content */}

				</div>

			</Layout>

		</>
	)
}
