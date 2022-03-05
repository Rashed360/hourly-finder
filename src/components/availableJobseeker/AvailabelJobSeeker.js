import React from "react"
import { FaCheckCircle, FaFilter, FaRegListAlt, FaUserCheck } from "react-icons/fa"
import { Link } from "react-router-dom"
import AvailableJobseekerCard from "./AvailableJobseekerCard/AvailableJobseekerCard"

const AvailabelJobSeeker = () => {
  return (
    <div className='avaiable-jobseeker-area mt-90 mb-30'>
      <div className='container mt-20'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='avaiable-jobseeker-container'>
              <div className='avaiable-jobseeker-title'>
                <h3>Available JobSeekers</h3>
              </div>
              <div className='avaiable-jobseeker-wrapper'>
                <div className='avaiable-jobseeker-header'>
                  <p>
                    <span>
                      <FaUserCheck />
                    </span>
                    JobSeekers available in your area
                  </p>
                </div>
                <div className='avaiable-jobseeker-content'>
                  <div className='avaiable-jobseeker-filter'>
                    <div className='show-all-applicant'>
                      <p>
                        <span>
                          <FaCheckCircle />
                        </span>
                        Available : 1649 Job Seekers
                      </p>
                      <div className='display-page'>
                        <span>
                          <FaRegListAlt />
                        </span>
                        Showing 10 Per Page
                      </div>
                    </div>
                    <div className='applicant-filter'>
                      <div className='filter-meta'>
                        <span>
                          <FaFilter />
                        </span>
                        <span className='filter-header-text'>Filter by:</span>
                      </div>
                      <div className='form-field'>
                        <select name='' id=''>
                          <option value='shortlisted'>Short List</option>
                          <option value='hired'>Hired</option>
                          <option value='rejected'>Rejected</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='avaiable-jobseeker-cards-warapper'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                      <div className='col-lg-4'>
                        <AvailableJobseekerCard />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='avaiable-jobseeker-footer'>
                  <div className='pagination-wrapper'>
                    <Link to='' className='page'>
                      <span className='iconify' data-icon='codicon:arrow-left'></span> Prev
                    </Link>
                    <Link to=''>1</Link>
                    <Link to=''>2</Link>
                    <Link to='' className='active'>
                      3
                    </Link>
                    <Link to=''>4</Link>
                    <Link to='' className='page next'>
                      Next <span className='iconify' data-icon='codicon:arrow-right'></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='all-sidebar'>
              <div className='sidebar-title'>
                <h3>More Information</h3>
              </div>
              <div className='sidebar-content'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailabelJobSeeker
