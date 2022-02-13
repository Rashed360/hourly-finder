import React from 'react'
import UserDetailsInfo from './userDetailsInfo/UserDetailsInfo'
import ProfileSideBar from './userSideBar/ProfileSideBar'

const UserProfile = () => {
  return (
    // <!-- ==================== Job Seeker Profile Area Start ==================== -->
    <div className="profile-view-area mt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ProfileSideBar></ProfileSideBar>
          </div>
          <div className="col-lg-8">
            <UserDetailsInfo></UserDetailsInfo>
          </div>
        </div>
      </div>
    </div>
    // <!-- ==================== Job Seeker Profile Area End ==================== -->
  )
}

export default UserProfile
