import React from 'react'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Sidebar from '../layout/sidebar'
import Link from 'next/link'


export default function BlogSingle2() {
	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Blog Single 2' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>How to turn Victorian gasholders apartments</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/blog"><a title="Blog">Blog Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">How to turn Victorian gasholders apartments</span></li>
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

								{/* Single Blog */}
								<div className="industify_fn_blog_single">

									<div className="img_holder">
										<img src="img/blog/2.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<h5>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering.</h5>
										<ul>
											<li>Acquisition of 100% of Seymour Whyte’s shares</li>
											<li>2017 revenue of A$433 million</li>
											<li>VINCI Construction expansion in the Pacific area</li>
										</ul>
										<p>On 23 October 2017, VINCI Construction finalised the acquisition of the Seymour Whyte company based in Queensland. The acquisition was finalised followed purchase of 100% of the shares of the company previously listed on the Sydney stock exchange.</p>
										<p>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering, earthworks and utilities, notably for the construction of roads, bridges and water and pipeline infrastructure.</p>
										<blockquote>“Seymour Whyte is a company that resembles us, with a strong entrepreneurial culture. This acquisition will enable us to expand synergies with VINCI Construction’s existing expertise in Australia and more broadly in the Pacific area,” said Jérôme Stubler, Chairman and Chief Executive Officer of VINCI Construction.</blockquote>
										<p>
											<img className="alignleft" src="img/widget/1.jpg" alt="" />
											This acquisition, added to that of HEB Construction in New Zealand in 2015, strengthens VINCI Construction’s operations in the Pacific area, where it generated 2016 revenue of €549 million, employs 2,000 people and delivers wide-ranging expertise in the highway construction, civil engineering, soil reinforcement and oil &amp; gas sectors.
										</p>
										<p>Over the past decade, Seymour Whyte Constructions has completed more than 80 infrastructure projects in Queensland and New South Wales, including modernisation of the Ipswich motorway, the access roads to the Sydney airport and, more recently, renovation of a section of the Bruce Highway motorway.</p>
										<p>With more than 90 years of experience, Spiecapag is one of the world’s leading oil pipeline, gas pipeline and associated systems companies. Recent project references include participation in the huge PNG LNG project in Papua New Guinea in 2014. Spiecapag also played a notable role in the Incahuasi project in Bolivia at the end of 2015, and is currently involved in the Trans Adriatic Pipeline project in Greece and Albania. Spiecapag is part of the Entrepose Group, which designs, builds and operates onshore, offshore and underground production, transport and storage infrastructure for the oil &amp; gas and other energy industries.</p>
										<p>This acquisition, added to that of HEB Construction in New Zealand in 2015, strengthens VINCI Construction’s operations in the Pacific area, where it generated 2016 revenue of €549 million, employs 2,000 people and delivers wide-ranging expertise in the highway construction, civil engineering, soil reinforcement and oil &amp; gas sectors, construction, civil engineering, soil reinforcement and oil &amp; gas sectors. This acquisition, added to that of HEB Construction in New Zealand in 2015, strengthens VINCI Construction’s operations in the Pacific area, where it generated 2016 revenue of €549 million, employs 2,000 people and delivers wide-ranging expertise in the highway construction, civil engineering, soil reinforcement and oil &amp; gas sectors.</p>
									</div>

									<div className="industify_fn_tags">
										<label>Tags:</label>
										<Link href="#"><a>2017</a></Link>
										<Link href="#"><a>Australia</a></Link>
										<Link href="#"><a>Construction</a></Link>
										<Link href="#"><a>New Contract</a></Link>
										<Link href="#"><a>Upgrade</a></Link>
									</div>

								</div>
								{/* /Single Blog */}


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">

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
