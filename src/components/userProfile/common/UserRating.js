import { FaStar } from "react-icons/fa"

const UserRating = ({ rating }) => {
  return (
    <div className='rating'>
      {rating ? (
        <>
          {[1, 2, 3, 4].map((index) => {
            return (
              <span key={index}>
                <FaStar />
              </span>
            )
          })}
        </>
      ) : (
        "Not Rated"
      )}
    </div>
  )
}

export default UserRating
