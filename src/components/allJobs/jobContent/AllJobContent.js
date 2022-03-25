import React from "react"
import { FaServer, FaSortAmountDown } from "react-icons/fa"
import Pagination from "../pagination/Pagination"

const AllJobContent = ({ jobs, allJobs, jobsSkeleton }) => {
  return (
    <div className='content-area'>
      <div className='grid-header d-flex justify-content-between'>
        <div className='filter-header'>
          <span>
            <FaServer />
          </span>
          <span className='filter-header-text'>Showing {allJobs.length} Total Jobs Nearby</span>
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
          {allJobs === null && jobsSkeleton}
          {allJobs !== null && jobs}
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
