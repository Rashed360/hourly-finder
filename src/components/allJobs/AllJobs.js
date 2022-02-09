import React from 'react';

const AllJobs = () => {
    return (
        <div>
            <div class="all-job-area mt-70">
                <div class="container">
                    <div class="all-search-bar-area">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">
                                <div class="search-bar-all">
                                    <form action="">
                                        <div class="g-0 row align-items-center">
                                            <div class="col-lg-5">
                                                <div class="search-by">
                                                    <input type="text" placeholder="Job Name e.g. Temporary Chef" />
                                                    <span><span class="iconify" data-icon="fa-solid:search-location"></span></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="search-by">
                                                    <input type="text" placeholder="Location" />
                                                    <span> <span class="iconify" data-icon="ci:location"></span></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <div class="search-by">
                                                    <input type="text" placeholder="Type" />
                                                    <span><span class="iconify" data-icon="bx:bxs-briefcase"></span></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <div class="search-by search-btn">
                                                    <input type="Submit" value="Search" class="all-search" />
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
            <div class="filter-header-area">
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-lg-3">
                        <div class="filter-area">
                            <div class="filter-header dark">
                                <span><span class="iconify" data-icon="ep:filter"></span></span>
                                <span class="filter-header-text">More Filters</span>
                            </div>
                            <div class="all-filter">
                                <div class="filter-by">
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
                                <div class="filter-by">
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
                                <div class="filter-by">
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
                                <div class="filter-by">
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
                            
                            <div class="job-alert-service">
                                <h5>Get Job Alert</h5>
                                <p>Place your email to get personalised jobs</p>
                                <form action='post'>
                                    <input type="email" placeholder="Enter your email" />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="grid-header d-flex justify-content-between">
                            <div class="filter-header">
                                <span><span class="iconify" data-icon="clarity:grid-view-line"></span></span>
                                <span class="filter-header-text">Showing 176 Total Jobs Nearby</span>
                            </div>
                            <div class="filter-header right">
                                <span class="filter-header-text">Sort : Newest first</span>
                                <span><span class="iconify" data-icon="cil:sort-descending"></span></span>
                            </div>
                        </div>
                        <div class="all-filtered-job">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="job-card">
                                        <div class="about-recruiter d-flex align-items-center">
                                            <a href=""><img src="assets/images/homepage/recruiter-logo.png" alt="logo" class="recruiter-logo" /></a>
                                            <h5 class="recruiter-title">
                                                <a href="">Founders,</a>
                                                <span class="post_time">8h ago</span>
                                            </h5>
                                        </div>
                                        <div class="job-content">
                                            <h3 class="job-title">
                                                <a href="">Complete House Paintings Services</a>
                                            </h3>
                                            <div class="job-status">
                                                <span class="job-type">Hourly</span> in
                                                <span class="job-location"><a href="">Banani</a></span>
                                            </div>
                                            <div class="job-keyword">
                                                <a href="" class="job-tag"><div class="creative"></div> Creative</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="job-pagination mb-40">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2">
                                    <div class="pagination-wrapper">
                                        <a href="" class="page"> <span class="iconify" data-icon="codicon:arrow-left"></span> Prev</a>
                                        <a href="">1</a>
                                        <a href="">2</a>
                                        <a href="" class="active">3</a>
                                        <a href="">4</a>
                                        <a href="" class="page next">Next <span class="iconify" data-icon="codicon:arrow-right"></span></a>
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