import { DateTime } from "luxon"
import { Link } from "react-router-dom"
import { useJobType, useTimeSince } from "../../../hooks/useJobHook"
import Tags from "../../commonComponents/tagElement/Tags"

const ApplicationInfo = (props) => {
  const { title, salary, created, keyword, type } = props.data.job
  const { bio, phone, designation } = props.data.recruiter
  const { name, moto, description, logo, location } = props.data.company
  const { email, username, first_name, last_name } = props.data.user
  const imagePath = process.env.REACT_APP_BACKEND_SERVER

  const jobType = useJobType(type)
  const timeSince = useTimeSince(DateTime.fromISO(created))

  return (
    <div className='job-application-info'>
      <div className='info'>
        <div className='normal-logo'>
          <h3>HourlyFinder</h3>
        </div>
        <div className='job-application-title'>
          <h2>{title}</h2>
          <p>
            <span className='job_status'>{jobType}</span> in <span className='location'>{location}</span>
          </p>
        </div>
        <div className='application-company-profile d-flex align-items-center'>
          <Link to={`/user/${username}`}>
            <img src={imagePath + logo} alt='logo' className='img-fluid' />
          </Link>
          <div className='application-company-name'>
            <Link to={`/user/${username}`}>
              <h5>{name}</h5>
            </Link>
            <p>{moto}</p>
          </div>
        </div>
        <p className='job-overview'>{description}</p>
        <div className='job-budget-time'>
          <h3>
            Rate: <span>{salary}</span> BDT
          </h3>
          <p className='post-time'>
            Posted <span>{timeSince}</span>
          </p>
        </div>
        <Tags tags={keyword}></Tags>
      </div>
    </div>
  )
}

export default ApplicationInfo
