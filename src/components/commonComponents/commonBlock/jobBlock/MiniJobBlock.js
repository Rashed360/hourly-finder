import React from "react";
import { Link } from "react-router-dom";

const MiniJobBlock = ({ job }) => {
  return (
    <div className="small-job-card">
      <div className="small-job-title">
        <div className="recruiter-logo">
          <Link to="/job/">
            <img src={job.image} alt="" />
          </Link>
        </div>
        <h3>
          <Link to={`/job/${job.id}`}>{job.name}</Link>
        </h3>
      </div>
      <p className="small-job-bottom">
        Job: <span>{job.type}</span>, Posted by: <span>Founders</span>
      </p>
    </div>
  );
};

export default MiniJobBlock;
