import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'



export default function Protected() {
	return (
		<>
		<Title title='Protected' />
			<Layout>
				{/* Protected Page  */}
				<div className="industify_fn_password_protected">
					<div className="container">
						<div className="message_holder max550">
							<h1>Protected</h1>
							<h3>This page was protected</h3>
							<p>This content is password protected. To view it please enter your password below:</p>
							<div className="submit_holder">
								<form method="get">
									<div><input name="post_password" type="password" placeholder="Password" autoComplete="off" /></div>
									<div><input type="submit" name="Submit" value="Authenticate" /></div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* /Protected Page  */}
			</Layout>

		</>
	)
}
