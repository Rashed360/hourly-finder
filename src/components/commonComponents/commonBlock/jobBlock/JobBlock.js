import { Link } from 'react-router-dom'
import org_logo from '../../../../assets/svgs/org.svg'
import Tags from '../../../commonComponents/tagElement/Tags'
import { DateTime } from 'luxon'

const JobBlock = ({ job }) => {
	const timeSince = date => {
		var seconds = Math.floor((new Date() - date) / 1000)

		var interval = seconds / 31536000

		if (interval > 1) {
			return Math.floor(interval) + ' years'
		}
		interval = seconds / 2592000
		if (interval > 1) {
			return Math.floor(interval) + ' months'
		}
		interval = seconds / 86400
		if (interval > 1) {
			return Math.floor(interval) + ' days'
		}
		interval = seconds / 3600
		if (interval > 1) {
			return Math.floor(interval) + ' hours'
		}
		interval = seconds / 60
		if (interval > 1) {
			return Math.floor(interval) + ' minutes'
		}
		return Math.floor(seconds) + ' seconds'
	}

	const formatted = timeSince(DateTime.fromISO(job.created))

	return (
		<div className='job-card'>
			<div className='about-recruiter d-flex align-items-center'>
				<Link to={`/company/`}>
					<img src={job.company.logo ? job.company.logo : org_logo} alt='logo' className='recruiter-logo' />
				</Link>
				<h5 className='recruiter-title'>
					<Link to={`/company/`}>{job.company.name.slice(0, 14)}, </Link>
					<br />
					<span className='post_time'>{formatted} ago</span>
				</h5>
			</div>
			<div className='job-content'>
				<h3 className='job-title'>
					<Link to={`/job/1`}>{job.title.slice(0, 40)}</Link>
				</h3>
				<div className='job-status'>
					<span className='job-type'>{job.type}</span> in
					<span className='job-location'>
						<Link to={'/jobs/location/${job.location}'}> {job.company.location.slice(0, 15)}</Link>
					</span>
				</div>
				<Tags tags={job.keyword} />
			</div>
		</div>
	)
}

export default JobBlock
