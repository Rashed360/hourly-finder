import { Link } from 'react-router-dom'
import AllBlog from './allBlogSection/AllBlog'

const Blogs = () => {
	return (
		<div>
			{/* <!-- ====================Blog Content Area Start ==================== --> */}
			<div className='all-blog-area mt-70'>
				<div className='container'>
					<div className='row'>
					{/* <!-- ====================All Blog Start ==================== --> */}
						<AllBlog></AllBlog>	
					{/* <!-- ===================All Blog End ==================== --> */}	
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
