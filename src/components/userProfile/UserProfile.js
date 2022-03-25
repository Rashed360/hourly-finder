import UserDetailsInfo from './userDetailsInfo/UserDetailsInfo'
import ProfileSideBar from './userSideBar/ProfileSideBar'

const UserProfile = () => {
	return (
		<div className='profile-view-area mt-70'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'>
						<ProfileSideBar />
					</div>
					<div className='col-lg-8'>
						<UserDetailsInfo />
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
