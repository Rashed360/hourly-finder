import React from 'react';

const Apply = () => {
    return (
        <div className="jobs-application-area registration-area">
            <div className="application-box">
                <div className="apply-form">
                    <div className="form">
                        <h2>Apply for the job?</h2>
                        <form action="">
                            <div className="form-field name">
                                <label for="">Name</label>
                                <input type="text" placeholder="Enter Full Name" />
                            </div>
                            <div className="form-field name">
                                <label for="">Phone</label>
                                <input type="text" placeholder="Enter Phone NUmber" />
                            </div>
                            <div className="form-field address">
                                <label for="">Address</label>
                                <input type="text" placeholder="Enter Address" />
                            </div>
                            <div className="form-field message">
                                <label for="">Message</label>
                                <textarea name="" id="" cols="10" rows="3" placeholder="Write Message"></textarea>
                            </div>
                            <div className="form-field agree">
                                <input type="checkbox" name="" />
                                <label for="">I agree to the HourlyFinder’s terms & conditions.</label>
                            </div>
                            <div className="form-field">
                                <input type="submit" value="Apply" className="btn submit" />
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="job-application-info">
                    <div className="info">
                        <div className="normal-logo">
                            <h3>HourlyFinder</h3>
                        </div>
                        <div className="job-application-title">
                            <h2>Complete House Paintings Services</h2>
                            <p><span className="job_status">Hourly</span> in <span className="location">Banani</span></p>
                        </div>
                        <div className="application-company-profile d-flex align-items-center">
                            <a href=""><img src="assets/images/singlejobpage/profile/Logo-2.Alo-logo.jpg" alt="Recruiter Profile" className="img-fluid" /></a>
                            <div className="application-company-name">
                                <a href="">
                                    <h5>Founders</h5>
                                    <p>House and renovation</p>
                                </a>
                            </div>
                        </div>
                        <p className="job-overview">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget ut aliquet sed elit. Viverra commodo non fermentum gravida eleifend consectetur vitae. Adipiscing ullamcorper ut malesuada habitasse non. Tortor erat facilisi faucibus pulvinar.
                        </p>
                        <div className="job-budget-time">
                            <h3>Rate: <span>10-15</span>$/Hour</h3>
                            <p className="post-time">Posted <span>8h</span> ago</p>
                        </div>
                        <div className="job-keyword">
                            <a href="" className="job-tag"><div className="creative"></div> Creative</a>
                            <a href="" className="job-tag"><div className="service"></div> Painting</a>
                            <a href="" className="job-tag"><div className="renovation"></div> Renovation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;