import { useJobType, useJobLevel } from '../../../hooks/useJobHook'
import { Link } from 'react-router-dom'
import LeafletMap from '../../commonComponents/map/LeafletMap'

const JobDetails = props => {
	const {
		title,
		image,
		slug,
		salary,
		duration,
		created,
		edited,
		language,
		vacancy,
		level,
		starting,
		latlng,
		overview,
		todo,
		skill,
		keyword,
		type,
	} = props.data.job
	const { bio, phone, designation } = props.data.recruiter
	const { name, moto, description, logo, location } = props.data.company
	const { email, username, first_name, last_name } = props.data.user
	const imagePath = process.env.REACT_APP_BACKEND_SERVER

	const jobType = useJobType(type)
	const jobLevel = useJobLevel(level)
	const mapData = latlng.split(',')

	return (
		<div className='apply-left'>
			<div className='recruiter-company-cover' style={{ backgroundImage: `url(${imagePath + image})` }}>
				<div className='company-profile' style={{ backgroundImage: `url(${imagePath + logo})` }}></div>
			</div>
			<div className='jobs-details-information'>
				<div className='single-job-title'>
					<h2>{title}</h2>
					<p>
						<Link to={`/user/${username}`} className='company'>
							{name}
						</Link>
						,{' '}
						<Link to={`/location/${location}`} className='location'>
							{location}
						</Link>
					</p>
				</div>
				<div className='single-job-basic-info'>
					<div className='row d-flex justify-content-around'>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>vancey</p>
								<h5>{vacancy}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>LEVEL</p>
								<h5>{jobLevel}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>EMPOWERMENT</p>
								<h5>{jobType}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>SALARY</p>
								<h5>{salary} BDT</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>DURATION</p>
								<h5>{duration}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>STARTING DATE</p>
								<h5>{starting}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>WORK LOCATION</p>
								<h5>{location}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>LANGUAGE</p>
								<h5>{language}</h5>
							</div>
						</div>
					</div>
				</div>
				<div className='single-job-details'>
					<h3>Overview</h3>
					<p>{overview}</p>
				</div>
				<div className='single-job-details'>
					<h3>Duties and Responsibilities</h3>
					<p>{todo}</p>
				</div>
				<div className='single-job-details'>
					<h3>Skill Requirements</h3>
					<div className='require-skills'>
						<nav>
							<ul>
								<li>{skill}</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className='single-job-details'>
					<h3>Location &amp; Maps</h3>
					<p>1.2 Km away from your location.</p>
				</div>
				<div className='leaflet-map'>
					<LeafletMap mark={[23.754925, 90.376495]} title={jobType + ' at '+ name} desc={title} />
				</div>
			</div>
		</div>
	)
}

export default JobDetails
