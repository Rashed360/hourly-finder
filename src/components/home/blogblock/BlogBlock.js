import React from 'react'

const BlogBlock = () => {
	return (
		<div class='col-lg-3'>
			<div class='blog-item'>
				<div class='blog-bg'></div>
				<div class='blog-content'>
					<div class='blog-author-time'>
						<p>
							By{' '}
							<span class='author'>
								<a href=''>Sajeeb Debnath</a>
							</span>
							, <span>25m ago</span>
						</p>
					</div>
					<div class='blog-text'>
						<h3>
							<a href=''>How House Painting Services Works...</a>
						</h3>
						<p>House pantings? Learn from professionals...</p>
					</div>
					<div class='blog-keyword'>
						<a href='' class='blog-tag'>
							<div class='house'></div> House
						</a>
						<a href='' class='blog-tag'>
							<div class='painting'></div> Painting
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogBlock
