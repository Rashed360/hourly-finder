import React from 'react'
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
		company,
		recruiter,
		type,
	} = props.job

	const jobLevel = level => {
		switch (level) {
			case 1:
				return 'Novice'
			case 2:
				return 'Beginer'
			case 3:
				return 'Intermediate'
			case 4:
				return 'Advanced'
			case 5:
				return 'Expert'
			default:
				return 'Invalid'
		}
	}
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
	return (
		<div className='apply-left'>
			<div className='recruiter-company-cover' style={{ backgroundImage: `url(${image})` }}>
				<div
					className='company-profile'
					style={{ backgroundImage: `url('/images/singlejobpage/profile/logo.jpg')` }}
				></div>
			</div>
			<div className='jobs-details-information'>
				<div className='single-job-title'>
					<h2>{title}</h2>
					<p>
						<Link to={`/user/${recruiter}`} className='company'>
							{company + 'company_name'}
						</Link>
						,{' '}
						<Link to='' className='location'>
							{'location'}
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
								<h5>{jobLevel(level)}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>EMPOWERMENT</p>
								<h5>{jobType(type)}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>SALARY TYPE</p>
								<h5>{salary} per Hour</h5>
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
								<h5>{'location'}</h5>
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
					<LeafletMap />
				</div>
			</div>
		</div>
	)
}

export default JobDetails
