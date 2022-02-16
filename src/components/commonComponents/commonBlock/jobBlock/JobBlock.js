import { Link } from 'react-router-dom'
import org_logo from '../../../../assets/svgs/org.svg'
import Tags from '../../../commonComponents/tagElement/Tags'

const JobBlock = ({ job }) => {
  return (
		<div className='job-card'>
			<div className='about-recruiter d-flex align-items-center'>
				<Link to={`/company/${job.company_id}`}>
					<img
						src={job.image? job.image : org_logo}
						alt='logo'
						className='recruiter-logo'
					/>
				</Link>
				<h5 className='recruiter-title'>
					<Link to={`/company/${job.company_id}`}>{job.company.slice(0,14)}, </Link><br/>
					<span className='post_time'>{job.time}</span>
				</h5>
			</div>
			<div className='job-content'>
				<h3 className='job-title'>
					<Link to={`/job/${job.id}`}>{job.name.slice(0,40)}</Link>
				</h3>
				<div className='job-status'>
					<span className='job-type'>{job.type}</span> in
					<span className='job-location'>
						<Link to={`/jobs/location/${job.location}`}> {job.location.slice(0,15)}</Link>
					</span>
				</div>
				<Tags tags={job.keyword} />
			</div>
		</div>
  )
}

export default JobBlock
