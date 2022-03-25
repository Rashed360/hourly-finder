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
              <label for=''>Hourly</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Part Time</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Project Based</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Full Time</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Job by Category</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label for=''>Home Service</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Restrurant Service</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Development</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Finance</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Job by City</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label for=''>Dhaka</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Chittagong</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Rajshahi</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>Sylhet</label>
            </div>
          </form>
        </div>
        <div className='filter-by'>
          <p>Wage Ranges</p>
          <form action=''>
            <div>
              <input type='checkbox' />
              <label for=''>500-1000</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>300-400</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>200-300</label>
            </div>
            <div>
              <input type='checkbox' />
              <label for=''>100-200</label>
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
