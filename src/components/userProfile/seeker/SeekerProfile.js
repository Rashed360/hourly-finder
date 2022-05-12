import ProfileSideBar from "../common/ProfileSideBar"
import UserBio from "../common/UserBio"
import UserPreviousJob from "../common/UserPreviousJob"
import UserProfileHeading from "../common/UserProfileHeading"
import UserReviews from "../common/UserReviews"
import UserSkills from "../common/UserSkills"

const SeekerProfile = ({ user }) => {
  console.log("seeker", user.seeker)

  return (
    <div className='row'>
      <div className='col-lg-4'>
        <ProfileSideBar user={user.user} seeker={user.seeker} />
      </div>
      <div className='col-lg-8'>
        <div className='profile-view-information'>
          <UserProfileHeading type='Job Seeker' />
          <UserBio bio={user.seeker?.bio} />
          <UserSkills skills={user.seeker?.expertise} />
          <UserPreviousJob title='Previous Works' />
          <UserReviews />
        </div>
      </div>
    </div>
  )
}

export default SeekerProfile
