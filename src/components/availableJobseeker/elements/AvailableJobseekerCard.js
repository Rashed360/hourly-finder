import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AvailableJobseekerCard = ({ seeker_data }) => {
	const { picture, bio, expertise, user } = seeker_data
	const { username, first_name, last_name } = user

	return (
		<div className='avaible-jobseeker-card'>
			<div className='avaiable-jobseeker-card-content'>
				<div className='avaiable-jobseeker-profile'>
					<div
						className='avaiable-jobseeker-dp'
						style={{
							backgroundImage: `url(${picture})`,
						}}
					></div>
					<div className='avaiable-jobseeker-info'>
						<h4 className='name'>{first_name + ' ' + last_name}</h4>
						<p className='designation'>{expertise !== '' ? expertise : 'No Skills'}</p>
						<div className='avaiabele-status'>Avaialable for Work</div>
					</div>
				</div>
				<div className='about-avaiable-jobseeker'>
					<p>{bio !== '' ? bio : 'Job-seeker has no bio.'}</p>
				</div>
			</div>
			<div className='avaiable-jobseeker-card-footer'>
				<div className='avaiable-jobseeker-rating'>
					<div className='rating'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaRegStar />
						<FaRegStar />
					</div>
					<span>3.0</span>
				</div>
				<Link to={`/user/${username}`} className='btn jobseeker-profile'>
					View Profile
				</Link>
			</div>
		</div>
	)
}

export default AvailableJobseekerCard
