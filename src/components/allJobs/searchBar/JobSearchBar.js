import { FaBriefcase, FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"

const JobSearchBar = ({ changeJobSearch, searchKeyword, handleJobSearch }) => {
  return (
    <div className='all-job-area'>
      <div className='container'>
        <div className='all-search-bar-area'>
          <div className='row'>
            <div className='col-lg'>
              <div className='search-bar-all'>
                <form onSubmit={handleJobSearch}>
                  <div className='g-0 row align-items-center'>
                    <div className='col-lg-5'>
                      <div className='search-by'>
                        <input
                          type='text'
                          name='title'
                          placeholder='Job Name'
                          onChange={changeJobSearch}
                          value={searchKeyword.title}
                        />
                        <span>
                          <FaSearchLocation />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='search-by'>
                        <input
                          type='text'
                          name='location'
                          placeholder='Location'
                          onChange={changeJobSearch}
                          value={searchKeyword.location}
                        />
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by'>
                        <select
                          className='job-type'
                          name='type'
                          onChange={changeJobSearch}
                          value={searchKeyword.type}
                        >
                          <option value='1'>Hourly</option>
                          <option value='2'>Full Time</option>
                          <option value='3'>Part Time</option>
                        </select>

                        <span>
                          <FaBriefcase />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by search-btn'>
                        <input type='submit' value='Search' className='all-search' />
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

export default JobSearchBar
