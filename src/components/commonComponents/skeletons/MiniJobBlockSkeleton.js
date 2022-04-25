import React from "react"

const MiniJobBlockSkeleton = () => {
  return (
    <div className='small-job-card sk'>
      <div className='small-job-title'>
        <div className='recruiter-logo'>
          <div className='recruiter-logo-sk'></div>
        </div>
        <div className='job-title sk'></div>
      </div>
      <div className='small-job-bottom sk'></div>
    </div>
  )
}

export default MiniJobBlockSkeleton
