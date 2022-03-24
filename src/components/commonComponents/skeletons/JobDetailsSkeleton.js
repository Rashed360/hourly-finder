const JobDetailsSkeleton = () => {
	return (
		<div className='apply-left'>
			<div className='recruiter-company-cover'>
				<div className='company-profile'></div>
			</div>
			<div className='jobs-details-information'>
				<div className='single-job-title mb-50'>
					<div className='job-title-sk'></div>
					<div className='inline-sk'></div> <div className='inline-sk'></div>
				</div>
				<div className='single-job-basic-info mb-50'>
					<div className='row d-flex justify-content-around'>
						{[1, 2, 3, 4].map(i => (
							<div className='col-lg-3' key={i}>
								<div className='basic-info'>
									<div className='title-sk'></div>
									<div className='content-sk'></div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='mb-50'>
					{[1, 2, 3, 4].map(i => (
						<div key={i} className='single-job-details'>
							<div className='title-sk'></div>
							<div className='content-sk'></div>
							<div className='content-sk'></div>
							<div className='content-sk'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default JobDetailsSkeleton
