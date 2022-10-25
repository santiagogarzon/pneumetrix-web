import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'



export default function Blog() {
	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Blog' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>News &amp; Articles</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Blog</span></li>
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


								<ul className="industify_fn_postlist">

									<li>
										<div className="post has-post-thumbnail">
											<div className="time"><span></span><h3>28</h3><h5>Aug</h5><h5>2021</h5></div>
											<div className="img_holder">
												<Link href="blog-single-1"><a><img src="img/blog/1.jpg" alt="" /></a></Link>
												<span className="shape1"></span><span className="shape2"></span>
											</div>
											<div className="content_holder">
												<div className="info_holder">
													<p>
														<span className="t_author">By <Link href="https://frenify.com/"ink><a target="_blank" rel="noreferrer">Frenify</a></Link></span>
														<span className="t_category">In Australia</span>
													</p>
												</div>
												<div className="title">
													<h3><Link href="blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
												</div>
												<div className="excerpt_holder">
													<p>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte’s shares 2017</p>
												</div>
												<div className="read_holder">
													<p><Link href="blog-single-1"><a>Read More</a></Link></p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="post has-post-thumbnail">
											<div className="time"><span></span><h3>27</h3><h5>Aug</h5><h5>2021</h5></div>
											<div className="img_holder">
												<Link href="blog-single-2"><a><img src="img/blog/2.jpg" alt="" /></a></Link>
												<span className="shape1"></span><span className="shape2"></span>
											</div>
											<div className="content_holder">
												<div className="info_holder">
													<p>
														<span className="t_author">By <Link href="https://frenify.com/"><a target="_blank" rel="noreferrer">Frenify</a></Link></span>
														<span className="t_category">In Discussion</span>
													</p>
												</div>
												<div className="title">
													<h3><Link href="blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
												</div>
												<div className="excerpt_holder">
													<p>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte’s shares 2017</p>
												</div>
												<div className="read_holder">
													<p><Link href="blog-single-2"><a>Read More</a></Link></p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="post has-post-thumbnail">
											<div className="time"><span></span><h3>26</h3><h5>Aug</h5><h5>2021</h5></div>
											<div className="img_holder">
												<Link href="blog-single-3"><a><img src="img/blog/3.jpg" alt="" /></a></Link>
												<span className="shape1"></span><span className="shape2"></span>
											</div>
											<div className="content_holder">
												<div className="info_holder">
													<p>
														<span className="t_author">By <Link href="https://frenify.com/"><a target="_blank" rel="noreferrer">Frenify</a></Link></span>
														<span className="t_category">In Industry</span>
													</p>
												</div>
												<div className="title">
													<h3><Link href="blog-single-3"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
												</div>
												<div className="excerpt_holder">
													<p>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte’s shares 2017</p>
												</div>
												<div className="read_holder">
													<p><Link href="blog-single-3"><a>Read More</a></Link></p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="post">
											<div className="time"><span></span><h3>25</h3><h5>Aug</h5><h5>2021</h5></div>
											<div className="content_holder">
												<div className="info_holder">
													<p>
														<span className="t_author">By <Link href="https://frenify.com/"><a target="_blank" rel="noreferrer">Frenify</a></Link></span>
														<span className="t_category">In Planning</span>
													</p>
												</div>
												<div className="title">
													<h3><Link href="blog-single-4"><a>New Tower in the Centre of Warsaw</a></Link></h3>
												</div>
												<div className="excerpt_holder">
													<p>Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte’s shares 2017</p>
												</div>
												<div className="read_holder">
													<p><Link href="blog-single-4"><a>Read More</a></Link></p>
												</div>
											</div>
										</div>
									</li>

								</ul>


								<div className="clearfix"></div>

								<div className="industify_fn_pagination">
									<ul>
										<li className="active"><span className="current">1</span></li>
										<li><Link href="#"><a>2</a></Link></li>
										<li className="view"><p>Viewing page 1 of 2</p></li>
									</ul>
								</div>

							</div>
							{/* /Main Sidebar: Left */}

							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">

								{/* Get Sidebar */}
								<Sidebar/>
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
