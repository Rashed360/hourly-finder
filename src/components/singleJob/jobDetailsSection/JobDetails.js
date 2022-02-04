import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = ({job, recruiter}) => {
    return (
        <div className="apply-left">
            <div className="recruiter-company-cover" style={{backgroundImage : `url(${recruiter.company_cover_img})`}}>
                <div className="company-profile" style={{backgroundImage : `url(${recruiter.company_logo})`}}>
                </div>
            </div>
            <div className="jobs-details-information">
                <div className="single-job-title">
                    <h2>{job.name}</h2>
                    <p><Link to={`/recruiter/${recruiter.id}`} className="company">{recruiter.company_name}</Link>,  <Link to="" className="location">{job.location}</Link></p>
                </div>
                <div className="single-job-basic-info">
                    <div className="row d-flex justify-content-around">
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>vancey</p>
                                <h5>{job.vancey}</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>LEVEL</p>
                                <h5>{job.level}</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>EMPOWERMENT</p>
                                <h5>{job.type}</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>SALARY TYPE</p>
                                <h5>{job.salary} per Hour</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>DURATION</p>
                                <h5>{job.duration}</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>STARTING DATE</p>
                                <h5>{job.starting_date}</h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="basic-info">
                                <p>WORK LOCATION</p>
                                <h5>{job.location}</h5>
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
                    <p>{job.overview}</p>
                </div>
                <div className="single-job-details">
                    <h3>Duties and Responsibilities</h3>
                    <p>{job.responsibilities}</p>
                </div>
                <div className="single-job-details">
                    <h3>Skill Requirements</h3>
                    <div className="require-skills">
                        <nav>
                            <ul>
                                {
                                    job.required_skills.map(skill => <li>{skill}</li>)
                                }
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
    );
};

export default JobDetails;