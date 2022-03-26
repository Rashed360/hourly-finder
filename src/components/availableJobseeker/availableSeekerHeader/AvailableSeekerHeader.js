import React from "react"
import { FaUserCheck } from "react-icons/fa"
const AvailableSeekerHeader = () => {
  return (
    <div className='avaiable-jobseeker-header'>
      <p>
        <span>
          <FaUserCheck />
        </span>
        JobSeekers available in your area
      </p>
    </div>
  )
}

export default AvailableSeekerHeader
