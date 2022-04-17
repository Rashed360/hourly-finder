import UserDetailsInfo from '../common/UserDetailsInfo'
import ProfileSideBar from '../common/ProfileSideBar'

const SeekerProfile = ({ user }) => {
	return (
		<div className='row'>
			<div className='col-lg-4'>
				<ProfileSideBar user={user.user} seeker={user.seeker} />
			</div>
			<div className='col-lg-8'>
				<UserDetailsInfo user={user.user} seeker={user.seeker} />
			</div>
		</div>
	)
}

export default SeekerProfile
