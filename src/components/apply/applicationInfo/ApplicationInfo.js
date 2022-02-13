import React from "react";
import { Link } from "react-router-dom";
import Tags from "../../commonComponents/tagElement/Tags";

const ApplicationInfo = ({single_job, single_recruiter}) => {
    const {name, location, type, time, salary, keyword} = single_job
    const {company_logo,about_company, company_name } = single_recruiter
  return (
    <div className="job-application-info">
      <div className="info">
        <div className="normal-logo">
          <h3>HourlyFinder</h3>
        </div>
        <div className="job-application-title">
          <h2>{name}</h2>
          <p>
            <span className="job_status">{type}</span> in{" "}
            <span className="location">{location}</span>
          </p>
        </div>
        <div className="application-company-profile d-flex align-items-center">
          <Link to="">
            <img
              src={company_logo}
              alt="Recruiter Profile"
              className="img-fluid"
            />
          </Link>
          <div className="application-company-name">
            <Link to="">
              <h5>{company_name}</h5>
              <p>House and renovation</p>
            </Link>
          </div>
        </div>
        <p className="job-overview">
          {about_company}
        </p>
        <div className="job-budget-time">
          <h3>
            Rate: <span>{salary}</span>$/Hour
          </h3>
          <p className="post-time">
            Posted <span>{time}</span> 
          </p>
        </div>
        <Tags tags={keyword}></Tags>
      </div>
    </div>
  );
};

export default ApplicationInfo;
