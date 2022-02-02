import { useState, useEffect } from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import SectionTitle from './sectionTitle/SectionTitle'
import JobBlock from './jobblock/JobBlock'
import CategoryBlock from './categoryblock/CategoryBlock'
import CityBlock from './cityBlock/CityBlock'
import FeedbackBlock from './feedbackBlock/Feedback'
import BlockSection from './blogSection/BlockSection'
import NewsLetterSection from './newsletterSection/NewsLetterSection'

const Home = () => {
	const [currentTagLine, setCurrentTagLine] = useState('hourly-based')

	useEffect(() => {
		const timer = setInterval(() => {
			const tagLines = ['hourly-based','part-time','full-time','remote','project-based']
			const randomTag = tagLines[Math.floor(Math.random() * tagLines.length)]
			setCurrentTagLine(randomTag)
		}, 3000)
		return () => clearInterval(timer)
	  },[currentTagLine])

	document.title = 'HourlyFinder | Home'
	return (
		<div>
			<div class='hero-area d-flex align-items-center'>
				<div class='container'>
					<div class='col-lg-6 offset-lg-1'>
						<div class='hero-content'>
							<div class='hero-text'>
								<h1>
									Find the most exciting <br/><span>{currentTagLine}</span> jobs nearby
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
											<FaMapMarkerAlt/>
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

			{/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
			<div class='most-recent-jobs section-padding'>
				<div class='container'>
					<SectionTitle title="Most Recent Jobs" subTitle="All Jobs" subLink="#" />
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

			{/* <!-- ==================== Browse Jobs  by Location Job Area Start ==================== --> */}
			<div class='browse-jobs-categories section-padding'>
				<div class='container'>
				    <SectionTitle title="Browse Job Categories" subTitle="More Category" subLink="#" />
					<div class='row pt-40'>
						<CategoryBlock name='Grocery Store Helper' />
						<CategoryBlock name='Resturant Service &amp; Hospitlity' />
						<CategoryBlock name='Home Service &amp; Cleaning' />
						<CategoryBlock name='Car Wash &amp; Cleaning' />
					</div>
				</div>
			</div>

			{/* <!-- ==================== Browse Jobs  by Cities Job Area Start ==================== --> */}
			<div class='browse-jobs-location section-padding'>
				<div class='container'>
					<SectionTitle title="Browse Jobs by Cities" subTitle="More Cities" subLink="#" />
					<div class='row pt-40'>
						<CityBlock name='Dhaka' />
						<CityBlock name='Chittagong' />
						<CityBlock name='Rajshahi' />
						<CityBlock name='Sylhet' />
					</div>
				</div>
			</div>

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

			{/* <!-- ==================== User Feedback Area Start ==================== --> */}
			<FeedbackBlock />

			{/* <!-- ==================== Latest Blog Post Area Start ==================== --> */}
			<BlockSection />
			{/* <!-- ==================== Newsletter Area Start ==================== --> */}
			<NewsLetterSection />
			{/* End 001 */}
		</div>
	)
}

export default Home
