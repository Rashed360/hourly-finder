import { Link } from 'react-router-dom'
import BlogSlider from './blogSliderSection/BlogSlider'

const Blogs = () => {
	return (
		<div>
			{/* <!-- ====================Blog Content Area Start ==================== --> */}
			<div className='all-blog-area mt-70'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='blog-contents'>
								<div className='row mb-40'>
									<div className='col-lg-12'>
										<div className='section-title'>
											<h3>Weekly Blogs for you</h3>
										</div>
									</div>
								</div>

								{/* Blog Slider Start  */}
								<BlogSlider></BlogSlider>
								{/* Blog Slider Start  */}

								<div className='row mt-70 '>
									<div className='col-lg-4'>
										<div className='blog-item'>
											<div className='blog-bg'></div>
											<div className='blog-content'>
												<div className='blog-author-time'>
													<p>
														By{' '}
														<span className='author'>
															<Link to=''>Sajeeb Debnath</Link>
														</span>
														, <span>25m ago</span>
													</p>
												</div>
												<div className='blog-text'>
													<h3>
														<Link to=''>How House Painting Services Works...</Link>
													</h3>
													<p>House pantings? Learn from professionals...</p>
												</div>
												<div className='blog-keyword'>
													<Link to='' className='blog-tag'>
														<div className='house'></div> House
													</Link>
													<Link to='' className='blog-tag'>
														<div className='painting'></div> Painting
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-lg-8 offset-lg-2'>
										<div className='pagination-wrapper'>
											<Link to='' className='page'>
												{' '}
												<span
													className='iconify'
													data-icon='codicon:arrow-left'
												></span>{' '}
												Prev
											</Link>
											<Link to=''>1</Link>
											<Link to=''>2</Link>
											<Link to='' className='active'>
												3
											</Link>
											<Link to=''>4</Link>
											<Link to='' className='page next'>
												Next{' '}
												<span
													className='iconify'
													data-icon='codicon:arrow-right'
												></span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='side-bar-right'>
								<div className='section-title mb-30'>
									<h3>Most Recent Jobs</h3>
								</div>
								<div className='job-cards'>
									<div className='job-card'>
										<div className='about-recruiter d-flex align-items-center'>
											<Link to=''>
												<img
													src='assets/images/homepage/recruiter-logo.png'
													alt='logo'
													className='recruiter-logo'
												/>
											</Link>
											<h5 className='recruiter-title'>
												<Link to=''>Founders,</Link>
												<span className='post_time'>8h ago</span>
											</h5>
										</div>
										<div className='job-content'>
											<h3 className='job-title'>
												<Link to=''>Complete House Paintings Services</Link>
											</h3>
											<div className='job-status'>
												<span className='job-type'>Hourly</span> in
												<span className='job-location'>
													<Link to=''>Banani</Link>
												</span>
											</div>
											<div className='job-keyword'>
												<Link to='' className='job-tag'>
													<div className='creative'></div> Creative
												</Link>
											</div>
										</div>
									</div>
									<div className='job-card'>
										<div className='about-recruiter d-flex align-items-center'>
											<Link to=''>
												<img
													src='assets/images/homepage/recruiter-logo.png'
													alt='logo'
													className='recruiter-logo'
												/>
											</Link>
											<h5 className='recruiter-title'>
												<Link to=''>Founders,</Link>
												<span className='post_time'>8h ago</span>
											</h5>
										</div>
										<div className='job-content'>
											<h3 className='job-title'>
												<Link to=''>Complete House Paintings Services</Link>
											</h3>
											<div className='job-status'>
												<span className='job-type'>Hourly</span> in
												<span className='job-location'>
													<Link to=''>Banani</Link>
												</span>
											</div>
											<div className='job-keyword'>
												<Link to='' className='job-tag'>
													<div className='creative'></div> Creative
												</Link>
											</div>
										</div>
									</div>
									<div className='job-card'>
										<div className='about-recruiter d-flex align-items-center'>
											<Link to=''>
												<img
													src='assets/images/homepage/recruiter-logo.png'
													alt='logo'
													className='recruiter-logo'
												/>
											</Link>
											<h5 className='recruiter-title'>
												<Link to=''>Founders,</Link>
												<span className='post_time'>8h ago</span>
											</h5>
										</div>
										<div className='job-content'>
											<h3 className='job-title'>
												<Link to=''>Complete House Paintings Services</Link>
											</h3>
											<div className='job-status'>
												<span className='job-type'>Hourly</span> in
												<span className='job-location'>
													<Link to=''>Banani</Link>
												</span>
											</div>
											<div className='job-keyword'>
												<Link to='' className='job-tag'>
													<div className='creative'></div> Creative
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className='section-title mb-30'>
									<h3>Advertizement</h3>
								</div>
								<div className='advertizement-bg'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ====================Blog Content Area End ==================== --> */}
		</div>
	)
}

export default Blogs
