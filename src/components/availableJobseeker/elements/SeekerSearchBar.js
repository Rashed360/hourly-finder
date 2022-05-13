import React from "react"
import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"
const SeekerSearchBar = ({ changeSeekerSearch, searchKeyword, handleSeekerSearch }) => {
  return (
    <div className='all-job-area'>
      <div className='container'>
        <div className='all-search-bar-area'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <div className='search-bar-all'>
                <form onSubmit={handleSeekerSearch}>
                  <div className='g-0 row align-items-center'>
                    <div className='col-lg-6'>
                      <div className='search-by'>
                        <input
                          type='text'
                          placeholder='Job Seeker Name'
                          name='name'
                          onChange={changeSeekerSearch}
                          value={searchKeyword.name}
                        />
                        <span>
                          <FaSearchLocation />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='search-by'>
                        <input
                          type='text'
                          placeholder='Location'
                          name='location'
                          onChange={changeSeekerSearch}
                          value={searchKeyword.location}
                        />
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by search-btn'>
                        <input
                          type='submit'
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

export default SeekerSearchBar
