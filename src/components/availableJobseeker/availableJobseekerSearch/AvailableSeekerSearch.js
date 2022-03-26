import React from "react"
import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"
const AvailableSeekerSearch = () => {
  return (
    <div className='all-job-area'>
      <div className='container'>
        <div className='all-search-bar-area'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <div className='search-bar-all'>
                <form action=''>
                  <div className='g-0 row align-items-center'>
                    <div className='col-lg-6'>
                      <div className='search-by'>
                        <input type='text' placeholder='Job Seeker Name' />
                        <span>
                          <FaSearchLocation />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='search-by'>
                        <input type='text' placeholder='Location' />
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by search-btn'>
                        <input
                          type='button'
                          value='Search'
                          className='all-search'
                          style={{ background: "#4c9566" }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableSeekerSearch
