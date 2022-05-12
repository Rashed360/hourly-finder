import UserRating from "./UserRating"

const UserProfileHeading = ({ type }) => {
  return (
    <div className='row'>
      <div className='col-lg-6'>
        <h4 className='profile-category'>{type}</h4>
      </div>
      <div className='col-lg-6'>
        <div className='overall-rating'>
          <h4>Overall ratings:</h4>
          <UserRating rating={(1, 2, 3, 4)} />
        </div>
      </div>
    </div>
  )
}

export default UserProfileHeading
