import { Link } from 'react-router-dom'
import Tags from '../../../commonComponents/tagElement/Tags'

const JobBlock = ({ job }) => {
  return (
	<div class='col-lg-3'>
		<div class='job-card'>
			<div class='about-recruiter d-flex align-items-center'>
				<Link to={`/company/${job.company_id}`}>
					<img
						src={job.image}
						alt='logo'
						class='recruiter-logo'
					/>
				</Link>
				<h5 class='recruiter-title'>
					<Link to={`/company/${job.company_id}`}>{job.company}, </Link><br/>
					<span class='post_time'>{job.time}</span>
				</h5>
			</div>
			<div class='job-content'>
				<h3 class='job-title'>
					<Link to={`/jobs/${job.id}`}>{job.name}</Link>
				</h3>
				<div class='job-status'>
					<span class='job-type'>{job.type}</span> in
					<span class='job-location'>
						<Link to={`/jobs/location/${job.location}`}> {job.location}</Link>
					</span>
				</div>
				<Tags tags={job.keyword} />
			</div>
		</div>
	</div>
  )
}

export default JobBlock
