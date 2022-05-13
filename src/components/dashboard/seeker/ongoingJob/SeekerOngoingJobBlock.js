import { useJobType, useTimeSince } from "hooks/useJobHook"
import { DateTime } from "luxon"
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa"

const SeekerOngoingJobBlock = ({ work }) => {
  const { created, status, job } = work
  const { title, location, type } = job
  const jobType = useJobType(type)
  const timeSince = useTimeSince(DateTime.fromISO(created))

  return (
    <div className='ongoing-job-item'>
      <div className='ongoing-job-header'>
        <h5> {title}</h5>
        <p>
          <span>
            <FaMapMarkerAlt /> {location}
          </span>{" "}
          <span>
            <FaBookmark /> {jobType}
          </span>
          <span>$ 300 tk/hour</span>
        </p>
      </div>
      <div className='ongoing-job-content'>
        <div className='job-tracker-progress-wrapper'>
          <div className='ongoing-job-cards'>
            <div className='ongoing-card active'>
              <p>Applied</p>
            </div>
            <div className='ongoing-card active'>
              <p>Accept</p>
            </div>
            <div className={status > 1 ? "ongoing-card active" : "ongoing-card"}>
              <p>Prepare</p>
            </div>
            <div className={status > 2 ? "ongoing-card active" : "ongoing-card"}>
              <p>Complete</p>
            </div>
            <div className={status > 3 ? "ongoing-card active" : "ongoing-card"}>
              <p>Review</p>
            </div>
            <div className={status > 4 ? "ongoing-card active" : "ongoing-card"}>
              <p>Done</p>
            </div>
          </div>
          <div className='ongoing-job-progress'>
            <div className='bar' style={{ width: 20 * status + "%" }}></div>
            <div className='bar mobile-view' style={{ height: 20 * status + "%" }}></div>
          </div>
        </div>
      </div>

      <div className='ongoing-job-footer'>
        <div className='review-remove-link'>
          <div className='btn-group'>
            <span className='btn review'>Review Recruiter</span>
            <span className='btn remove'>Leave Job</span>
          </div>
        </div>
        <div className='ongoing-job-update-tracker'>
          <p>Job Created {timeSince}</p>
        </div>
      </div>
    </div>
  )
}

export default SeekerOngoingJobBlock
