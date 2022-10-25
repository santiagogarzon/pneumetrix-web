import React from 'react'
import Layout from '../layout/layout'
import PhotoGallery from '../components/Gallery/PhotoGallery'
import Title from '../layout/title'



export default function Gallery() {
	return (
		<>
			<Layout>
				{/* Gallery Page */}
				<Title title='Gallery' />
				<div className="fn_cs_gallery_grid fn_cs_lightgallery" data-cols="4">
					<div className="inner">
						<PhotoGallery/>
					</div>
				</div>
				{/* /Gallery Page */}

			</Layout>

		</>
	)
}
