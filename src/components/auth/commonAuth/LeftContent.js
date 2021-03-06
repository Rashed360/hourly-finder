import { Link } from 'react-router-dom'

const LeftContent = ({ page }) => {
  const statusInfo = () => {
    if (page === 'login') {
      return (
        <>
          <p>Dont have an account?</p>
          <h4>
            <Link to="/register">Sign up</Link>
          </h4>
        </>
      )
    } else if (page === 'register') {
      return (
        <>
          <p>Already have an account?</p>
          <h4>
            <Link to="/login">Sign in</Link>
          </h4>
        </>
      )
    } else return null
  }

  return (
    <div className="registration-left">
      <div className="registration-left-content">
        <div className="normal-logo">
          <h3>HourlyFinder</h3>
        </div>
        <div className="registration-left-text">
          <h2>The most exciting hourly-based jobs are awaiting...</h2>
          <p>
            Log in to find hourly-based jobs nearby your location also learn and
            enjoy from weekly free blogs...
          </p>
        </div>
        <div className="registration-status-info">
          {statusInfo()}
        </div>
      </div>
    </div>
  )
}

export default LeftContent
