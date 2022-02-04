import React from 'react';

const UserProfile = () => {
    return (
        // <!-- ==================== Job Seeker Profile Area Start ==================== -->
        <div className="profile-view-area mt-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="profile-view-bar">
                            <div className="profile-bg" style={{backgroundImage : "url(/images/homepage/users/user-1.jpg)"}}></div>
                            <div className="profile-name-title">
                                <h3>Sajeeb Debnath</h3>
                                <p>Full Stack Developer</p>
                            </div>
                            <div className="contact-details">
                                <nav>
                                    <ul>
                                        <li><span className="iconify" data-icon="ic:round-local-phone"></span>880 1610916343</li>
                                        <li><span className="iconify" data-icon="clarity:email-solid"></span>Sajeedebnath.cse@gmail.com</li>
                                        <li><span className="iconify" data-icon="fluent:location-28-filled"></span>Kalabagan, Dhaka</li>
                                        <li><span className="iconify" data-icon="bx:bxs-briefcase"></span>Part-time</li>
                                        <li><span className="iconify" data-icon="carbon:skill-level-advanced"></span>Web design & development</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="important-links">
                                <a href="" className="btn hire">Hire Me</a>
                                <a href="" className="btn message">Message</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="profile-view-information">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="profile-category">Job Seeker</h4>
                                </div>
                                <div className="col-lg-6">
                                    <div className="overall-rating">
                                        <h4>Overall ratings:</h4>
                                        <div className="rating">
                                            <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                            <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                            <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                            <span className="iconify" data-icon="ant-design:star-filled"></span>
                                            <span className="iconify" data-icon="ant-design:star-filled"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="profile-title">
                                        <h5>About Sajeeb</h5>
                                    </div>
                                    <div className="profile-bio">
                                        <h5>Bio</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo aliquam elementum quis eros a suspendisse eget. Consequat gravida imperdiet adipiscing pretium arcu morbi urna risus. Orci vitae ultrices consequat nisl arcu morbi elementum. Varius sed mauris ipsum lorem.`</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="profile-title">
                                        <h5>Skills</h5>
                                    </div>
                                    <div className="skills-tag">
                                        <span>ReactJS</span>
                                        <span>Redux</span>
                                        <span>dJango</span>
                                        <span>REST api</span>
                                        <span>UI/UX</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="profile-title">
                                        <h5>Previous Works</h5>
                                    </div>
                                    <div className="previous-works-list">
                                        <div className="previous-work-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="work-title">
                                                        <h5>Online English Teacher</h5>
                                                        <p><span className="iconify" data-icon="bx:bxs-briefcase"></span> <span>10 Minute School</span></p>
                                                        <p><span className="iconify" data-icon="bi:bookmark-fill"></span> <span>Hourly</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="rating">
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="location-date">
                                                        <p><span className="iconify" data-icon="fluent:location-28-filled"></span> <span>Banani</span></p>
                                                        <p><span className="iconify" data-icon="uiw:date"></span> <span>03-09-2021</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="previous-work-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="work-title">
                                                        <h5>Online English Teacher</h5>
                                                        <p><span className="iconify" data-icon="bx:bxs-briefcase"></span> <span>10 Minute School</span></p>
                                                        <p><span className="iconify" data-icon="bi:bookmark-fill"></span> <span>Hourly</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="rating">
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="location-date">
                                                        <p><span className="iconify" data-icon="fluent:location-28-filled"></span> <span>Banani</span></p>
                                                        <p><span className="iconify" data-icon="uiw:date"></span> <span>03-09-2021</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="profile-title">
                                        <h5>Reviews</h5>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="review-list">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="review-item">
                                                    <div className="reviewer-profile">
                                                        <h5>Sajeeb Debnath</h5>
                                                        <p>Senior Recruiter, Alpha Beta Inc.</p>
                                                    </div>
                                                    <div className="rating">
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify checked" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                        <span className="iconify" data-icon="ant-design:star-filled"></span>
                                                    </div>
                                                    <div className="review-text">
                                                        <blockquote>
                                                            “..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a scelerisque vestibulum scelerisque urna cras pulvinar. Eget nunc dolor aliquam feugiat..”
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- ==================== Job Seeker Profile Area End ==================== -->
    );
};

export default UserProfile;