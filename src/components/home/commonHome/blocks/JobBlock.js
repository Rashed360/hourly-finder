import Tags from '../../../commonComponents/tagElement/Tags'

const JobBlock = ({ job }) => {
  return (
	<div class='col-lg-3'>
		<div class='job-card'>
			<div class='about-recruiter d-flex align-items-center'>
				<a href=''>
					<img
						src={job.image}
						alt='logo'
						class='recruiter-logo'
					/>
				</a>
				<h5 class='recruiter-title'>
					<a href=''>{job.company}, </a>
					<span class='post_time'>{job.time}</span>
				</h5>
			</div>
			<div class='job-content'>
				<h3 class='job-title'>
					<a href=''>{job.name}</a>
				</h3>
				<div class='job-status'>
					<span class='job-type'>{job.type}</span> in
					<span class='job-location'>
						<a href=''> {job.location}</a>
					</span>
				</div>
				<Tags tags={job.keyword} />
			</div>
		</div>
	</div>
  )
}

export default JobBlock
