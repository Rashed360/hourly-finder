import { Link } from 'react-router-dom'
import org_logo from '../../../../assets/svgs/org.svg'
import Tags from '../../../commonComponents/tagElement/Tags'
import { DateTime } from 'luxon'

const JobBlock = ({ job }) => {
	const { title, slug, type, keyword, created } = job
	const { logo, name, location } = job.company

	const jobType = type => {
		switch (type) {
			case 1:
				return 'Hourly'
			case 2:
				return 'Full Time'
			case 3:
				return 'Part Time'
			case 4:
				return 'Remote'
			default:
				return 'Invalid'
		}
	}

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

	const formattedTime = timeSince(DateTime.fromISO(created)) + ' ago'

	return (
		<div className='job-card'>
			<div className='about-recruiter d-flex align-items-center'>
				<Link to=''>
					<img src={logo ? logo : org_logo} alt='logo' className='recruiter-logo' />
				</Link>
				<h5 className='recruiter-title'>
					<Link to=''>{name.slice(0, 14)}, </Link>
					<br />
					<span className='post_time'>{formattedTime}</span>
				</h5>
			</div>
			<div className='job-content'>
				<h3 className='job-title'>
					<Link to={`/job/${slug}`}>{title.slice(0, 40)}</Link>
				</h3>
				<div className='job-status'>
					<span className='job-type'>{jobType(type)}</span> in
					<span className='job-location'>
						<Link to=''> {location.slice(0, 15)}</Link>
					</span>
				</div>
				<Tags tags={keyword} />
			</div>
		</div>
	)
}

export default JobBlock
