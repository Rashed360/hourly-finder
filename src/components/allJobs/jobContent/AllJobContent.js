import React from "react"
import { FaServer, FaSortAmountDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import Pagination from "../pagination/Pagination"

const AllJobContent = () => {
  return (
    <div className='content-area'>
      <div className='grid-header d-flex justify-content-between'>
        <div className='filter-header'>
          <span>
            <FaServer />
          </span>
          <span className='filter-header-text'>Showing 176 Total Jobs Nearby</span>
        </div>
        <div className='filter-header right'>
          <span className='filter-header-text'>Sort : Newest first</span>
          <span>
            <FaSortAmountDown />
          </span>
        </div>
      </div>
      <div className='all-filtered-job'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='job-card'>
              <div className='about-recruiter d-flex align-items-center'>
                <Link to=''>
                  <img src='images/homepage/recruiter-logo.png' alt='logo' className='recruiter-logo' />
                </Link>
                <h5 className='recruiter-title'>
                  <Link to=''>Founders,</Link>
                  <span className='post_time'>20min ago</span>
                </h5>
              </div>
              <div className='job-content'>
                <h3 className='job-title'>
                  <Link to=''>Complete House Paintings Services</Link>
                </h3>
                <div className='job-status'>
                  <span className='job-type'>Hourly</span> in
                  <span className='job-location'>
                    <Link to=''> Banani</Link>
                  </span>
                </div>
                <div className='job-keyword'>
                  <Link to='' className='job-tag'>
                    <div className='creative'></div> Creative
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='job-pagination mb-40'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllJobContent
