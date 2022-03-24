const JobSideBarSkeleton = () => {
	return (
		<div className='apply-sidebar'>
			<div className='sk-flash'>
				<div className='application-budget-information sidebar-padding'>
					<div className='title-sk'></div>
					<div className='content-sk'></div>
					<div className='content-sk'></div>
					<div className='content-sk'></div>
					<div className='content-sk mt-30'></div>
					<div className='content-sk'></div>
				</div>
				<div className='about-recruiter-profile sidebar-padding'>
					<div className='job-title-sk'></div>
					<div className='recruiter-profile-name'>
						<div className='profile-info d-flex align-items-center'>
							<div className='image-sk'></div>
							<div className='profile-name ms-3'>
								<div className='title-sk' style={{ width: '170px' }}></div>
								<div className='content-sk'></div>
							</div>
						</div>
					</div>
					<div className='contact-details'>
						<div className='content-sk'></div>
						<div className='content-sk mt-20'></div>
						<div className='content-sk mt-20'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobSideBarSkeleton
