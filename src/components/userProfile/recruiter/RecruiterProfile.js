import ProfileSideBar from "../common/ProfileSideBar"
import UserBio from "../common/UserBio"
import UserPreviousJob from "../common/UserPreviousJob"
import UserProfileHeading from "../common/UserProfileHeading"

const RecruiterProfile = ({ user }) => {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <ProfileSideBar user={user.user} recruiter={user.recruiter} />
      </div>
      <div className='col-lg-8'>
        <div className='profile-view-information'>
          <UserProfileHeading type='Recruiter' />
          <UserBio bio={user.recruiter?.bio} />
          <UserPreviousJob title='Previous Posted Jobs' />
        </div>
      </div>
    </div>
  )
}

export default RecruiterProfile
