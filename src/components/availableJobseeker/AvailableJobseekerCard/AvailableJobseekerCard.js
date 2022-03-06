import React from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const AvailableJobseekerCard = () => {
  return (
    <div className='avaible-jobseeker-card'>
      <div className='avaiable-jobseeker-card-content'>
        <div className='avaiable-jobseeker-profile'>
          <div
            className='avaiable-jobseeker-dp'
            style={{
              backgroundImage: "url(https://placeimg.com/100/100/people?t=1640373129965)",
            }}
          ></div>
          <div className='avaiable-jobseeker-info'>
            <h4 className='name'>Sajeeb Debnath</h4>
            <p className='designation'>Fullstack Developer</p>
            <div className='avaiabele-status'>Available for Work</div>
          </div>
        </div>
        <div className='about-avaiable-jobseeker'>
          <p>
            I am ipsum dolor sit amet, consectetur adipis eliot a dolor sit conctetur asdfsadf trtryt sas.
          </p>
        </div>
      </div>
      <div className='avaiable-jobseeker-card-footer'>
        <div className='avaiable-jobseeker-rating'>
          <div className='rating'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <span>3.0</span>
        </div>
        <Link to='' className='btn jobseeker-profile'>
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default AvailableJobseekerCard
