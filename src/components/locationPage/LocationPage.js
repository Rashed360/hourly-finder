import React from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const LocationPage = () => {
  const { cityName } = useParams()
  return (
    <div class='job-map-area mt-70'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-3'>
            <div class='job-map-sidebar'>
              <div class='location-search'>
                <h5>Jobs in your location</h5>
                <form action=''>
                  <div class='form-field'>
                    <label for=''>Select your location</label>
                    <input type='text' placeholder='Type here...' value={cityName} />
                  </div>
                </form>
              </div>
              <div class='all-filter'>
                <div class='filter-by'>
                  <p>Filter Job by Type</p>
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
                <div class='btn apply-filter'>Apply</div>
              </div>
              <div class='selected-location-based-job'>
                <div class='small-job-card'>
                  <div class='small-job-title'>
                    <div class='recruiter-logo'>
                      <Link to='#'>
                        <img src='/assets/images/homepage/recruiter-logo.png' alt='' />
                      </Link>
                    </div>
                    <h3>
                      <Link to='#'>Complete Home Painting Services</Link>
                    </h3>
                  </div>
                  <p class='small-job-bottom'>
                    Job: <span>Hourly</span>, Posted by: <span>Founders</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-9'>
            <div class='job-map-area'>
              <div class='map'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPage
