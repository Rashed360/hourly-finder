import { FaBriefcase, FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"

const JobSearchBar = () => {
  return (
    <div className='all-job-area'>
      <div className='container'>
        <div className='all-search-bar-area'>
          <div className='row'>
            <div className='col-lg'>
              <div className='search-bar-all'>
                <form action=''>
                  <div className='g-0 row align-items-center'>
                    <div className='col-lg-5'>
                      <div className='search-by'>
                        <input type='text' placeholder='Job Name' />
                        <span>
                          <FaSearchLocation />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='search-by'>
                        <input type='text' placeholder='Location' />
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by'>
                        <input type='text' placeholder='Type' />
                        <span>
                          <FaBriefcase />
                        </span>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='search-by search-btn'>
                        <input type='button' value='Search' className='all-search' />
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
