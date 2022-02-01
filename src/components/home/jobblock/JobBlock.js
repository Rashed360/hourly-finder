const JobBlock = ({ name, company, time, type, location, keyword, image }) => {
	return (
		<div class='col-lg-3'>
			<div class='job-card'>
				<div class='about-recruiter d-flex align-items-center'>
					<a href=''>
						<img
							src={image}
							alt='logo'
							class='recruiter-logo'
						/>
					</a>
					<h5 class='recruiter-title'>
						<a href=''>{company}, </a>
						<span class='post_time'>{time}</span>
					</h5>
				</div>
				<div class='job-content'>
					<h3 class='job-title'>
						<a href=''>{name}</a>
					</h3>
					<div class='job-status'>
						<span class='job-type'>{type}</span> in
						<span class='job-location'>
							<a href=''> {location}</a>
						</span>
					</div>
					<div class='job-keyword'>
						<a href='' class='job-tag'>
							<div class='creative'></div>
							{keyword}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobBlock
