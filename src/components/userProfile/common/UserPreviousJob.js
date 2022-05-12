import PreviousWork from "./PreviousWork"
import UserNoItems from "./UserNoItems"
import UserProfileTitle from "./UserProfileTitle"

const UserPreviousJob = ({ title, jobs }) => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title={title} />
        <div className='previous-works-list'>
          {jobs ? (
            <>
              {[1, 2].map((index) => {
                return <PreviousWork key={index} />
              })}
            </>
          ) : (
            <UserNoItems text='User have not any Previous Works' />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserPreviousJob
