import UserRating from "./UserRating"
const UserReviewItem = () => {
  return (
    <div className='review-item'>
      <div className='reviewer-profile'>
        <h5>Sajeeb Debnath</h5>
        <p>Senior Recruiter, Alpha Beta Inc.</p>
      </div>
      <UserRating rating={(1, 2, 3, 4)} />
      <div className='review-text'>
        <blockquote>
          “..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a scelerisque vestibulum
          scelerisque urna cras pulvinar. Eget nunc dolor aliquam feugiat..”
        </blockquote>
      </div>
    </div>
  )
}

export default UserReviewItem
