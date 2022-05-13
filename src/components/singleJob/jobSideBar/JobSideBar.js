import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const JobSideBar = props => {
	const { slug, salary } = props.data.job
	const { picture, designation } = props.data.recruiter
	const { moto, description, logo, location } = props.data.company
	const { email, username, first_name, last_name } = props.data.user
	const imagePath = process.env.REACT_APP_BACKEND_SERVER

	return (
		<div className='apply-sidebar'>
			<div className='application-budget-information sidebar-padding'>
				<p>Client Budget</p>
				<h4 className='budget'>Tk. {salary}</h4>
				<Link to={`/apply/${slug}`} className='btn btn-main'>
					Apply Now
				</Link>
				<Link to='' className='btn btn-alt'>
					Save to wishlist
				</Link>
			</div>
			<div className='about-recruiter-profile sidebar-padding'>
				<h4>About the recruiter</h4>
				<div className='recruiter-profile-name'>
					<div className='profile-info d-flex align-items-center'>
						<Link to={`/user/${username}`}>
							<img src={imagePath + picture} alt='Recruiter Profile' className='img-fluid' />
						</Link>
						<div className='profile-name'>
							<Link to={`/user/${username}`}>
								<h5>{first_name + ' ' + last_name}</h5>
							</Link>
							<p>Recruiter</p>
						</div>
					</div>
				</div>
				<div className='contact-details'>
					<nav>
						<ul>
							<li>
								<FaEnvelope />
								{email}
							</li>
							<li>
								<FaMapMarkerAlt />
								{location}
							</li>
							<li>
								<FaBriefcase />
								{designation}
							</li>
						</ul>
					</nav>
				</div>
				<div className='profile-gallery'>
					<p>{moto}</p>
					<Link to={`/user/${username}`} className='more-info'>
						More info on the recruiter
					</Link>
					<div className='gallery'>
						<img src={imagePath + logo} alt='gallery' className='img-fluid' />
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobSideBar
