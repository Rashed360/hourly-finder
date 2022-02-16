import React from 'react';
import { Link } from 'react-router-dom';
import {FaEnvelope,FaMapMarkerAlt,FaBriefcase} from 'react-icons/fa'

const JobSideBar = ({job, recruiter}) => {
    return (
        <div className="apply-sidebar">
            <div className="application-budget-information sidebar-padding">
                <p>Client Budget</p>
                <h4 className="budget">Tk. {job.salary} per Hour</h4>
                <Link to={`/apply/for/${job.id}`} className="btn apply-now">Apply Now</Link>
                <Link to="" className="btn add-to-wishlist">Save to wishlist</Link>
            </div>
            <div className="about-recruiter-profile sidebar-padding">
                <h4>About the recruiter</h4>
                <div className="recruiter-profile-name">
                    <div className="profile-info d-flex align-items-center">
                        <Link to=""><img src="/images/singlejobpage/recruiter-profile/user-1.jpg" alt="Recruiter Profile" className="img-fluid"/></Link>
                        <div className="profile-name">
                            <Link to="">
                                <h5>{recruiter.name}</h5>
                                <p>{recruiter.position}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="contact-details">
                    <nav>
                        <ul>
                            <li><FaEnvelope/>{recruiter.email}</li>
                            <li><FaMapMarkerAlt/>{recruiter.address}</li>
                            <li><FaBriefcase/>{recruiter.company_name}</li>
                        </ul>
                    </nav>
                </div>
                <div className="profile-gallery">
                    <p>{recruiter.about_company}</p>
                    <Link to={`/recruiter/${recruiter.id}`} className="more-info">More info on the recruiter</Link>
                    <div className="gallery">
                        {
                            recruiter.gallery_img.map(img => <img src={img} alt="gallery" className="img-fluid"/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSideBar;