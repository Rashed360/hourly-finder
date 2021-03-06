import { useSelector } from "react-redux"

const DashboradRightBar = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <div className='dashboard-right-bar'>
      <div className='dashboard-right-content'>
        <h3 className='right-bar-title'>Complete Your Profile</h3>
        <div className='event-wrapper'>
          <div className='event-item'>
            <div className='event-icon'>
              <div className='event-icon-wrap'>01</div>
            </div>
            <div className='event-title'>
              Add <span>an profile picture to your account</span>
            </div>
          </div>
          <div className='event-item'>
            <div className='event-icon'>
              <div className='event-icon-wrap'>02</div>
            </div>
            <div className='event-title'>
              Add <span>your {user?.user_type === 2 ? "Organization's Details" : "Skills"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard-right-content'>
        <h3 className='right-bar-title'>Upcoming events</h3>
        {user?.user_type === 2 ? (
          ""
        ) : (
          <div className='event-wrapper'>
            <div className='event-item'>
              <div className='event-icon'>
                <div className='event-icon-wrap'>01</div>
              </div>
              <div className='event-title'>
                Selection date for the job
                <span>“Complete House Painting Service”</span>
              </div>
            </div>
            <div className='event-item'>
              <div className='event-icon'>
                <div className='event-icon-wrap'>02</div>
              </div>
              <div className='event-title'>
                Starting date for the job
                <span> “Complete House Painting Service”</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboradRightBar
