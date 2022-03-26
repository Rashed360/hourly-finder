import React from "react"
import { FaFilter } from "react-icons/fa"
import JobAlert from "../jobAlert/JobAlert"

const JobFilterArea = () => {
  return (
    <div className='filter-area'>
      <div className='filter-header dark'>
        <span>
          <FaFilter />
        </span>
        <span className='filter-header-text'>More Filters</span>
      </div>
      <div className='all-filter'>
        <div className='filter-by'>
          <p>Job by Type</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Hourly</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Part Time</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Project Based</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Full Time</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Job by Category</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Home Service</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Restrurant Service</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Development</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Finance</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Job by City</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Dhaka</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Chittagong</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Rajshahi</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>Sylhet</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Wage Ranges</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>500-1000</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>300-400</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>200-300</label>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor=''>100-200</label>
            </div>
          </form>
        </div>
      </div>

      <hr />

      <JobAlert />
    </div>
  )
}

export default JobFilterArea
