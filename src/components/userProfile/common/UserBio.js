import UserProfileTitle from "./UserProfileTitle"

const UserBio = ({ bio }) => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title='About User' />
        <div className='profile-bio'>
          <h5>Bio</h5>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserBio
