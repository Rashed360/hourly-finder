import React from "react"

const UserProfileDetailSkeleton = () => {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <div className='profile-view-bar sk'>
          <div className='profile-bg sk'></div>
          <div className='profile-name-title sk'>
            <div className='name sk'></div>
            <div className='name sk'></div>
          </div>
          <div className='contact-details sk'>
            <nav>
              <ul>
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <li className='contact-info-sk'>
                      <span></span>
                      <div className='contact-info-li sk'></div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className='important-links sk'>
            <div className='btn btn-main sk'></div>
            <div className='btn btn-main sk'></div>
          </div>
        </div>
      </div>
      <div className='col-lg-8'>
        <div className='profile-view-information sk'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='profile-category sk'> </div>
            </div>
            <div className='col-lg-6'>
              <div className='overall-rating sk'>
                <div className='overall-rating-title sk'></div>
                <div className='rating sk'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-title sk'>
                <div className='about-user sk'></div>
              </div>
              <div className='profile-bio sk'>
                <div className='bio-title sk'></div>
                <div className='bio-description'></div>
                <div className='bio-description'></div>
                <div className='bio-description'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-title sk'>
                <div className='about-user sk'></div>
              </div>
              <div className='skills-tag sk'>
                <span className='skills sk'></span>
                <span className='skills sk'></span>
                <span className='skills sk'></span>
                <span className='skills sk'></span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-title sk'>
                <div className='about-user sk'></div>
              </div>
              <div className='previous-works-list sk'>
                <div className='previous-work sk'></div>
                <div className='previous-work sk'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-title'>
                <div className='about-user sk'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileDetailSkeleton
