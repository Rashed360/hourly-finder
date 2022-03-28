import React from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const AvailableJobseekerCard = ({ name, designation, image }) => {
  return (
    <div className='avaible-jobseeker-card'>
      <div className='avaiable-jobseeker-card-content'>
        <div className='avaiable-jobseeker-profile'>
          <div
            className='avaiable-jobseeker-dp'
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className='avaiable-jobseeker-info'>
            <h4 className='name'>{name}</h4>
            <p className='designation'>{designation}</p>
            <div className='avaiabele-status'>Avaialable for Work</div>
          </div>
        </div>
        <div className='about-avaiable-jobseeker'>
          <p>I am {name}, client statisfaction is my passion, work until statisfaction.</p>
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
        <Link to='/user/0' className='btn jobseeker-profile'>
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default AvailableJobseekerCard
