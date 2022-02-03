import React from 'react'
import { Link } from 'react-router-dom'

const SingleJob = () => {
  return (
    <div>
        {/* <!-- ==================== Apply Area Start ==================== --> */}
    <div className="apply-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="apply-left">
                        <div className="recruiter-company-cover">
                            <div className="company-profile">
                            </div>
                        </div>
                        <div className="jobs-details-information">
                            <div className="single-job-title">
                                <h2>Complete house painting service</h2>
                                <p><Link to="" className="company">Founders</Link>,  <Link to="" className="location">Banani</Link></p>
                            </div>
                            <div className="single-job-basic-info">
                                <div className="row d-flex justify-content-around">
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>vancey</p>
                                            <h5>2-5</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>LEVEL</p>
                                            <h5>Beginer</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>EMPOWERMENT</p>
                                            <h5>Hourly</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>SALARY TYPE</p>
                                            <h5>Negotiable</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>DURATION</p>
                                            <h5>2 Days</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>STARTING DATE</p>
                                            <h5>02 Oct, 2021</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>WORK LOCATION</p>
                                            <h5>Uttora</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="basic-info">
                                            <p>LANGUAGE</p>
                                            <h5>Bangla</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-job-details">
                                <h3>Overview</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet.</p>
                            </div>
                            <div className="single-job-details">
                                <h3>Duties and Responsibilities</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet .
                                    viverra tempor. Laoreet enim eleifend consequat arcu gra.</p>
                            </div>
                            <div className="single-job-details">
                                <h3>Skill Requirements</h3>
                                <div className="require-skills">
                                    <nav>
                                        <ul>
                                            <li>ReactJS, Redux, Material UI</li>
                                            <li>MongoDB and mongoose</li>
                                            <li>Python, dJango</li>
                                            <li>DevOps (AWS Services)</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="single-job-details">
                                <h3>Location & Maps</h3>
                                <p>1.2 Km away from your location.</p>
                            </div>
                            <div id="jobMap"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="apply-sidebar">
                        <div className="application-budget-information sidebar-padding">
                            <p>Client Budget</p>
                            <h4 className="budget">$10-15 Per Hour</h4>
                            <Link to="" className="btn apply-now">Apply Now</Link>
                            <Link to="" className="btn add-to-wishlist">Save to wishlist</Link>
                        </div>
                        <div className="about-recruiter-profile sidebar-padding">
                            <h4>About the recruiter</h4>
                            <div className="recruiter-profile-name">
                                <div className="profile-info d-flex align-items-center">
                                    <Link to=""><img src="/images/singlejobpage/recruiter-profile/user-1.jpg" alt="Recruiter Profile" className="img-fluid"/></Link>
                                    <div className="profile-name">
                                        <Link to="">
                                            <h5>Sajeeb Debnath</h5>
                                            <p>CEO & Founder</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-details">
                                <nav>
                                    <ul>
                                        <li><span className="iconify" data-icon="clarity:email-solid"></span>Sajeedebnath.cse@gmail.com</li>
                                        <li><span className="iconify" data-icon="fluent:location-28-filled"></span>Kalabagan, Dhaka</li>
                                        <li><span className="iconify" data-icon="fa-solid:briefcase"></span>Founders Inc.</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="profile-gallery">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ad delectus minima voluptatum ea dolorum fugiat possimus minus in pariatur!...</p>
                                <Link to="" className="more-info">More info</Link>
                                <div className="gallery">
                                    <img src="/images/singlejobpage/photo-gallery/31917962768_c979352217_b.jpg" alt="photo gallery" className="img-fluid"/>
                                    <img src="/images/singlejobpage/photo-gallery/cover-1.jpg" alt="photo gallery" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ==================== Apply Area End ==================== --> */}




    {/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
    <div className="most-recent-jobs section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title">
                        <h3>Similar Jobs May You Like</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="link-title">
                        <Link to="">Browse More</Link>
                    </div>
                </div>
            </div>
            <div className="row pt-40">
                <div className="col-lg-3">
                    <div className="job-card">
                        <div className="about-recruiter d-flex align-items-center">
                            <Link to=""><img src="/images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo"/></Link>
                            <h5 className="recruiter-title">
                                <Link to="">Founders,</Link>
                                <span className="post_time">8h ago</span>
                            </h5>
                        </div>
                        <div className="job-content">
                            <h3 className="job-title">
                                <Link to="">Complete House Paintings Services</Link>
                            </h3>
                            <div className="job-status">
                                <span className="job-type">Hourly</span> in
                                <span className="job-location"><Link to="">Banani</Link></span>
                            </div>
                            <div className="job-keyword">
                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="job-card">
                        <div className="about-recruiter d-flex align-items-center">
                            <Link to=""><img src="/images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo"/></Link>
                            <h5 className="recruiter-title">
                                <Link to="">Founders,</Link>
                                <span className="post_time">8h ago</span>
                            </h5>
                        </div>
                        <div className="job-content">
                            <h3 className="job-title">
                                <Link to="">Complete House Paintings Services</Link>
                            </h3>
                            <div className="job-status">
                                <span className="job-type">Hourly</span> in
                                <span className="job-location"><Link to="">Banani</Link></span>
                            </div>
                            <div className="job-keyword">
                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="job-card">
                        <div className="about-recruiter d-flex align-items-center">
                            <Link to=""><img src="/images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo"/></Link>
                            <h5 className="recruiter-title">
                                <Link to="">Founders,</Link>
                                <span className="post_time">8h ago</span>
                            </h5>
                        </div>
                        <div className="job-content">
                            <h3 className="job-title">
                                <Link to="">Complete House Paintings Services</Link>
                            </h3>
                            <div className="job-status">
                                <span className="job-type">Hourly</span> in
                                <span className="job-location"><Link to="">Banani</Link></span>
                            </div>
                            <div className="job-keyword">
                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="job-card">
                        <div className="about-recruiter d-flex align-items-center">
                            <Link to=""><img src="/images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo"/></Link>
                            <h5 className="recruiter-title">
                                <Link to="">Founders,</Link>
                                <span className="post_time">8h ago</span>
                            </h5>
                        </div>
                        <div className="job-content">
                            <h3 className="job-title">
                                <Link to="">Complete House Paintings Services</Link>
                            </h3>
                            <div className="job-status">
                                <span className="job-type">Hourly</span> in
                                <span className="job-location"><Link to="">Banani</Link></span>
                            </div>
                            <div className="job-keyword">
                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <!-- ==================== Most Recent Job Area End ==================== --> */}
    </div>
  )
}

export default SingleJob
