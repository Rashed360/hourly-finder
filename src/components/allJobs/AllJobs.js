import {Link} from 'react-router-dom'

const AllJobs = () => {
    return (
        <div>
            <div className="all-job-area mt-70">
                <div className="container">
                    <div className="all-search-bar-area">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="search-bar-all">
                                    <form action="">
                                        <div className="g-0 row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="search-by">
                                                    <input type="text" placeholder="Job Name e.g. Temporary Chef" />
                                                    <span><span className="iconify" data-icon="fa-solid:search-location"></span></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="search-by">
                                                    <input type="text" placeholder="Location" />
                                                    <span> <span className="iconify" data-icon="ci:location"></span></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="search-by">
                                                    <input type="text" placeholder="Type" />
                                                    <span><span className="iconify" data-icon="bx:bxs-briefcase"></span></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="search-by search-btn">
                                                    <input type="Submit" value="Search" className="all-search" />
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
            <div className="filter-header-area">
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-lg-3">
                        <div className="filter-area">
                            <div className="filter-header dark">
                                <span><span className="iconify" data-icon="ep:filter"></span></span>
                                <span className="filter-header-text">More Filters</span>
                            </div>
                            <div className="all-filter">
                                <div className="filter-by">
                                    <p>Job by Type</p>
                                    <form action="">
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Hourly</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Part Time</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Project Based</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Full Time</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="filter-by">
                                    <p>Job by Category</p>
                                    <form action="">
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Home Service</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Restrurant Service</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Development</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Finance</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="filter-by">
                                    <p>Job by City</p>
                                    <form action="">
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Dhaka</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Chittagong</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Rajshahi</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">Sylhet</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="filter-by">
                                    <p>Wage Ranges</p>
                                    <form action="">
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">500-1000</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">300-400</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">200-300</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <label for="">100-200</label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <hr/>
                            
                            <div className="job-alert-service">
                                <h5>Get Job Alert</h5>
                                <p>Place your email to get personalised jobs</p>
                                <form action='post'>
                                    <input type="email" placeholder="Enter your email" />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="grid-header d-flex justify-content-between">
                            <div className="filter-header">
                                <span><span className="iconify" data-icon="clarity:grid-view-line"></span></span>
                                <span className="filter-header-text">Showing 176 Total Jobs Nearby</span>
                            </div>
                            <div className="filter-header right">
                                <span className="filter-header-text">Sort : Newest first</span>
                                <span><span className="iconify" data-icon="cil:sort-descending"></span></span>
                            </div>
                        </div>
                        <div className="all-filtered-job">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">20min ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Complete House Paintings Services</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">1h ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Virtual Assistance</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Dhanmondi</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Assistance</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">2h ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Customer Service Engineer</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Uttara</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Engineer</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">9h ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Support Coordinator</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Framgate</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Support</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">10h ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Sales service representative</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Sales</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
                                            <h5 className="recruiter-title">
                                                <Link to="">Founders,</Link>
                                                <span className="post_time">12h ago</span>
                                            </h5>
                                        </div>
                                        <div className="job-content">
                                            <h3 className="job-title">
                                                <Link to="">Customer Service Agent</Link>
                                            </h3>
                                            <div className="job-status">
                                                <span className="job-type">Hourly</span> in
                                                <span className="job-location"><Link to=""> Uttara</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Agent</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="job-card">
                                        <div className="about-recruiter d-flex align-items-center">
                                            <Link to=""><img src="images/homepage/recruiter-logo.png" alt="logo" className="recruiter-logo" /></Link>
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
                                                <span className="job-location"><Link to=""> Banani</Link></span>
                                            </div>
                                            <div className="job-keyword">
                                                <Link to="" className="job-tag"><div className="creative"></div> Creative</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="job-pagination mb-40">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="pagination-wrapper">
                                        <Link to="" className="page"> <span className="iconify" data-icon="codicon:arrow-left"></span> Prev</Link>
                                        <Link to="">1</Link>
                                        <Link to="">2</Link>
                                        <Link to="" className="active">3</Link>
                                        <Link to="">4</Link>
                                        <Link to="" className="page next">Next <span className="iconify" data-icon="codicon:arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;