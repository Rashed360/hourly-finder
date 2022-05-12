import UserNoItems from "./UserNoItems"
import UserProfileTitle from "./UserProfileTitle"
import UserReviewItem from "./UserReviewItem"

const UserReviews = ({ reviews }) => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title='Reviews' />
      </div>
      <div className='col-lg-12'>
        <div className='review-list'>
          <div className='row'>
            {reviews ? (
              <div className='col-lg-6'>
                <UserReviewItem />
              </div>
            ) : (
              <div className='col-lg-12'>
                <UserNoItems text='User have not any Reviews till now.' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReviews
