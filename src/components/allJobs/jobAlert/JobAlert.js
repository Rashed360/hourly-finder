import React from "react"

const JobAlert = () => {
  return (
    <div className='job-alert-service'>
      <h5>Get Job Alert</h5>
      <p>Place your email to get personalised jobs</p>
      <form action='post'>
        <input type='email' placeholder='Enter your email' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default JobAlert
