import UserNoItems from "./UserNoItems"
import UserProfileTitle from "./UserProfileTitle"

const UserBio = ({ bio }) => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title='About User' />
        <div className='profile-bio'>
          <h5>Bio</h5>
          {bio !== "" ? (
            <>
              <p>{bio}</p>
            </>
          ) : (
            <UserNoItems text='Not Updated' />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserBio
