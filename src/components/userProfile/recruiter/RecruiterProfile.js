import UserDetailsInfo from '../common/UserDetailsInfo'
import ProfileSideBar from '../common/ProfileSideBar'

const RecruiterProfile = ({ user }) => {
	return (
		<div className='row'>
			<div className='col-lg-4'>
				<ProfileSideBar user={user.user} recruiter={user.recruiter} />
			</div>
			<div className='col-lg-8'>
				<UserDetailsInfo user={user.user} recruiter={user.recruiter} />
			</div>
		</div>
	)
}

export default RecruiterProfile
