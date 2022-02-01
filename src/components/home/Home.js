import './Home.css'
import JobBlock from './jobblock/JobBlock'
import CategoryBlock from './categoryblock/CategoryBlock'
import CityBlock from './cityBlock/CityBlock'
import BlogBlock from './blogblock/BlogBlock'

const Home = () => {
	document.title = 'HourlyFinder | Home'
	return (
		<div>
			<div class='hero-area d-flex align-items-center'>
				<div class='container'>
					<div class='col-lg-6 offset-lg-1'>
						<div class='hero-content'>
							<div class='hero-text'>
								<h1>
									Find the most exciting <span>hourly-based</span> jobs nearby{' '}
								</h1>
								<p>
									Hourly Finder is a platform to find hourly jobs nearby from
									your location and make some extra cash along side your
									study/job.
								</p>
							</div>
							<div class='hero-search-bar'>
								<div class='search-bar'>
									<form action='' class='search-form'>
										<input
											type='text'
											placeholder='Where do you live ?'
											class='search-field'
										/>
										<a href=''>
											<span class='iconify' data-icon='ci:location'></span>
										</a>
										<input
											type='submit'
											value='Get Started'
											class='btn get-started'
										/>
									</form>
									<div class='tag'>
										<span>
											<a href=''>Job on your location</a>
										</span>
										<span>
											<a href=''>How it works?</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Hero Area End ==================== --> */}

			{/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
			<div class='most-recent-jobs section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>Most Recent Jobs</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>All Jobs</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<JobBlock
							name='Complete House Paintings Services'
							company='Founders'
							image='/images/homepage/recruiter-logo.png'
							time='8h ago'
							type='Hourly'
							location='Banani'
							keyword='Creative'
						/>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Most Recent Job Area End ==================== --> */}

			{/* <!-- ==================== Browse Jobs  by Location Job Area Start ==================== --> */}
			<div class='browse-jobs-categories section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>Browse Job Categories</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>More Category</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<CategoryBlock name='Grocery Store Helper' />
						<CategoryBlock name='Resturant Service &amp; Hospitlity' />
						<CategoryBlock name='Home Service &amp; Cleaning' />
						<CategoryBlock name='Car Wash &amp; Cleaning' />
					</div>
				</div>
			</div>
			{/* <!-- ==================== Browse Jobs  by Location Job Area End ==================== --> */}

			{/* <!-- ==================== Browse Jobs  by Cities Job Area Start ==================== --> */}
			<div class='browse-jobs-location section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>Browse Jobs by Cities</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>More Cities</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<CityBlock name='Dhaka' />
						<CityBlock name='Chittagong' />
						<CityBlock name='Rajshahi' />
						<CityBlock name='Sylhet' />
					</div>
				</div>
			</div>
			{/* <!-- ==================== Browse Jobs  by Cities Job Area End ==================== --> */}

			{/* <!-- ==================== How Works Job Area Start ==================== --> */}
			<div class='how-works-site section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>How it works?</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>Learn more</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<div class='col-lg-5 offset-lg-1'>
							<div class='how-works-content'>
								<h2>Find hourly-based jobs </h2>
								<h3>Via Live Location search...</h3>
								<p>
									We use live location to map out jobs close to your home. We
									use live location to map out jobs close to your home. We use
									live location to map out jobs close to your home.
								</p>
								<div class='btn see-more'>See More</div>
							</div>
						</div>
						<div class='col-lg-5'>
							<div id='jobMap'></div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== How Works Job Area End ==================== --> */}

			{/* <!-- ==================== User Feedback Area Start ==================== --> */}
			<div class='user-feedback-area section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>User Feedback</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>See more</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<div class='col-lg-4 user-feedback owl-carousel'>
							<div class='feedback-wrapper'>
								<div class='user-info'>
									<div class='user-avatar'>
										<img src='/images/homepage/users/user-1.jpg' alt='User' />
									</div>
									<h4>Sajeeb Debnath</h4>
									<p>Full Stack Developer</p>
								</div>
								<div class='user-feedback'>
									<blockquote>
										“..user friendly and very easy to find jobs that suits me..”
									</blockquote>
								</div>
							</div>
							<div class='feedback-wrapper'>
								<div class='user-info'>
									<div class='user-avatar'>
										<img src='/images/homepage/users/user-3.jpg' alt='User' />
									</div>
									<h4>Saimul Siddque Shakil</h4>
									<p>Full Stack Developer</p>
								</div>
								<div class='user-feedback'>
									<blockquote>
										“..user friendly and very easy to find jobs that suits me..”
									</blockquote>
								</div>
							</div>
							<div class='feedback-wrapper'>
								<div class='user-info'>
									<div class='user-avatar'>
										<img src='/images/homepage/users/user-2.jpg' alt='User' />
									</div>
									<h4>Rashed Ahmed</h4>
									<p>Web Developer</p>
								</div>
								<div class='user-feedback'>
									<blockquote>
										“..user friendly and very easy to find jobs that suits me..”
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== User Feedback Area End ==================== --> */}

			{/* <!-- ==================== Latest Blog Post Area Start ==================== --> */}
			<div class='latest-blog-area section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='section-title'>
								<h3>Latest Blog Posts</h3>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='link-title'>
								<a href=''>All Blogs</a>
							</div>
						</div>
					</div>
					<div class='row pt-40'>
						<BlogBlock />
						<BlogBlock />
						<BlogBlock />
						<BlogBlock />
					</div>
				</div>
			</div>
			{/* <!-- ==================== Latest Blog Post Area End ==================== --> */}

			{/* <!-- ==================== Newsletter Area Start ==================== --> */}
			<div class='newsletter-area section-padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6 offset-lg-3'>
							<div class='newsletter-content'>
								<h4>Subscribe to receive our weekly blog</h4>
								<form action='' class='newsletter-form'>
									<input
										type='text'
										placeholder='Your Email Address'
										class='newsletter-email'
									/>
									<span class='iconify' data-icon='codicon:mail'></span>
									<input
										type='submit'
										value='Subscribe'
										class='btn newsletter'
									/>
								</form>
								<p>Don’t worry we dont spam!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End 001 */}
		</div>
	)
}

export default Home
