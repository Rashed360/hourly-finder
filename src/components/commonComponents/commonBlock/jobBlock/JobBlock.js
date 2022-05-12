import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import org_logo from '../../../../assets/svgs/org.svg'
import { useJobType, useTimeSince } from 'hooks/useJobHook'
import Tags from '../../../commonComponents/tagElement/Tags'

const JobBlock = ({ job }) => {
	const { title, slug, type, keyword, created } = job
	const { logo, name, location } = job.company
	const { username } = job.recruiter.user

	const jobType = useJobType(type)
	const timeSince = useTimeSince(DateTime.fromISO(created))

	return (
		<div className='job-card'>
			<div className='about-recruiter d-flex align-items-center'>
				<Link to={`/user/${username}`}>
					<img src={logo ? logo : org_logo} alt='logo' className='recruiter-logo' />
				</Link>
				<h5 className='recruiter-title'>
					<Link to={`/user/${username}`}>{name.slice(0, 14)}, </Link>
					<br />
					<span className='post_time'>{timeSince}</span>
				</h5>
			</div>
			<div className='job-content'>
				<h3 className='job-title'>
					<Link to={`/job/${slug}`}>
						<abbr title={title}>{title.slice(0, 40)}</abbr>
					</Link>
				</h3>
				<div className='job-status'>
					<span className='job-type'>{jobType}</span> in
					<span className='job-location'>
						<Link to={`/location/${location.split(',')[0]}`}> {location}</Link>
					</span>
				</div>
				<Tags tags={keyword} limit tagName='jobs' />
			</div>
		</div>
	)
}

export default JobBlock
