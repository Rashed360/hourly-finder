import { Link } from 'react-router-dom'
import Tags from '../../../commonComponents/tagElement/Tags'

const JobBlock = ({ job }) => {
  return (
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
					<Link to={`/company/${job.company_id}`}>{job.company.slice(0,14)}, </Link><br/>
					<span class='post_time'>{job.time}</span>
				</h5>
			</div>
			<div class='job-content'>
				<h3 class='job-title'>
					<Link to={`/job/${job.id}`}>{job.name.slice(0,40)}</Link>
				</h3>
				<div class='job-status'>
					<span class='job-type'>{job.type}</span> in
					<span class='job-location'>
						<Link to={`/jobs/location/${job.location}`}> {job.location.slice(0,15)}</Link>
					</span>
				</div>
				<Tags tags={job.keyword} />
			</div>
		</div>
  )
}

export default JobBlock
