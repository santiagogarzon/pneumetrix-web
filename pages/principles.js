import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'



export default function Principles() {
	return (
		<>
		<Title title='Principles' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Principles</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Principles</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title  */}

				{/* Principles  */}
				<div className="industify_fn_principles">
					<div className="container">
						<div className="principles">
							<ul>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>01.</h2>
											<h3>Honesty</h3>
										</div>
										<div className="item_right">
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<p>Vestibulum ac pellentesque dui. Phasellus accumsan enim ex, eu pulvinar nibh sodales sed. Nunc massa urna, varius pellentesque pulvinar quis, laoreet faucibus lectus. Integer vulputate leo a cursus laoreet. Curabitur a mi vitae velit faucibus viverra eget at enim.</p>
											<p>Fusce interdum eget enim ac venenatis. Curabitur sem massa, placerat a metus in, laoreet tincidunt eros. Sed neque lorem, tincidunt non dapibus quis, pharetra porttitor mauris.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>02.</h2>
											<h3>Passion</h3>
										</div>
										<div className="item_right">
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<p>Vestibulum ac pellentesque dui. Phasellus accumsan enim ex, eu pulvinar nibh sodales sed. Nunc massa urna, varius pellentesque pulvinar quis, laoreet faucibus lectus. Integer vulputate leo a cursus laoreet. Curabitur a mi vitae velit faucibus viverra eget at enim.</p>
											<p>Fusce interdum eget enim ac venenatis. Curabitur sem massa, placerat a metus in, laoreet tincidunt eros. Sed neque lorem, tincidunt non dapibus quis, pharetra porttitor mauris.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>03.</h2>
											<h3>Quality Work</h3>
										</div>
										<div className="item_right">
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<p>Vestibulum ac pellentesque dui. Phasellus accumsan enim ex, eu pulvinar nibh sodales sed. Nunc massa urna, varius pellentesque pulvinar quis, laoreet faucibus lectus. Integer vulputate leo a cursus laoreet. Curabitur a mi vitae velit faucibus viverra eget at enim.</p>
											<p>Fusce interdum eget enim ac venenatis. Curabitur sem massa, placerat a metus in, laoreet tincidunt eros. Sed neque lorem, tincidunt non dapibus quis, pharetra porttitor mauris.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>04.</h2>
											<h3>Honesty</h3>
										</div>
										<div className="item_right">
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<p>Vestibulum ac pellentesque dui. Phasellus accumsan enim ex, eu pulvinar nibh sodales sed. Nunc massa urna, varius pellentesque pulvinar quis, laoreet faucibus lectus. Integer vulputate leo a cursus laoreet. Curabitur a mi vitae velit faucibus viverra eget at enim.</p>
											<p>Fusce interdum eget enim ac venenatis. Curabitur sem massa, placerat a metus in, laoreet tincidunt eros. Sed neque lorem, tincidunt non dapibus quis, pharetra porttitor mauris.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>05.</h2>
											<h3>Humility</h3>
										</div>
										<div className="item_right">
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<p>Vestibulum ac pellentesque dui. Phasellus accumsan enim ex, eu pulvinar nibh sodales sed. Nunc massa urna, varius pellentesque pulvinar quis, laoreet faucibus lectus. Integer vulputate leo a cursus laoreet. Curabitur a mi vitae velit faucibus viverra eget at enim.</p>
											<p>Fusce interdum eget enim ac venenatis. Curabitur sem massa, placerat a metus in, laoreet tincidunt eros. Sed neque lorem, tincidunt non dapibus quis, pharetra porttitor mauris.</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* /Principles  */}
			</Layout>

		</>
	)
}
