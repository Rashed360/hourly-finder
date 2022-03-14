import React from 'react'
import { Link } from 'react-router-dom'
import LeafletMap from '../../commonComponents/map/LeafletMap'

const JobDetails = ({ job, recruiter, test }) => {
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
			<div className='recruiter-company-cover' style={{ backgroundImage: `url(${test.image})` }}>
				<div className='company-profile' style={{ backgroundImage: `url(${recruiter.company_logo})` }}></div>
			</div>
			<div className='jobs-details-information'>
				<div className='single-job-title'>
					<h2>{test.title}</h2>
					<p>
						<Link to={`/recruiter/${recruiter.id}`} className='company'>
							{recruiter.company_name}
						</Link>
						,{' '}
						<Link to='' className='location'>
							{job.location}
						</Link>
					</p>
				</div>
				<div className='single-job-basic-info'>
					<div className='row d-flex justify-content-around'>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>vancey</p>
								<h5>{test.vacancy}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>LEVEL</p>
								<h5>{jobLevel(test.level)}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>EMPOWERMENT</p>
								<h5>{jobType(test.type)}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>SALARY TYPE</p>
								<h5>{test.salary} per Hour</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>DURATION</p>
								<h5>{test.duration}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>STARTING DATE</p>
								<h5>{test.starting}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>WORK LOCATION</p>
								<h5>{job.location}</h5>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='basic-info'>
								<p>LANGUAGE</p>
								<h5>Bangla</h5>
							</div>
						</div>
					</div>
				</div>
				<div className='single-job-details'>
					<h3>Overview</h3>
					<p>{test.overview}</p>
				</div>
				<div className='single-job-details'>
					<h3>Duties and Responsibilities</h3>
					<p>{test.todo}</p>
				</div>
				<div className='single-job-details'>
					<h3>Skill Requirements</h3>
					<div className='require-skills'>
						<nav>
							<ul>
								{job.required_skills.map((skill, index) => (
									<li key={index}>{skill}</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
				<div className='single-job-details'>
					<h3>Location & Maps</h3>
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
