import { useJobType } from '../../../hooks/useJobHook'
import { Link } from 'react-router-dom'
import Tags from '../../commonComponents/tagElement/Tags'

const ApplicationInfo = props => {
	const { title, image, salary, created, keyword, type } = props.job

	const jobType = useJobType(type)

	return (
		<div className='job-application-info'>
			<div className='info'>
				<div className='normal-logo'>
					<h3>HourlyFinder</h3>
				</div>
				<div className='job-application-title'>
					<h2>{title}</h2>
					<p>
						<span className='job_status'>{jobType}</span> in <span className='location'>{'location'}</span>
					</p>
				</div>
				<div className='application-company-profile d-flex align-items-center'>
					<Link to=''>
						<img src={image} alt='Recruiter Profile' className='img-fluid' />
					</Link>
					<div className='application-company-name'>
						<Link to=''>
							<h5>{'company_name'}</h5>
							<p>House and renovation</p>
						</Link>
					</div>
				</div>
				<p className='job-overview'>{'about_company'}</p>
				<div className='job-budget-time'>
					<h3>
						Rate: <span>{salary}</span> BDT
					</h3>
					<p className='post-time'>
						Posted <span>{created}</span>
					</p>
				</div>
				<Tags tags={keyword}></Tags>
			</div>
		</div>
	)
}

export default ApplicationInfo
