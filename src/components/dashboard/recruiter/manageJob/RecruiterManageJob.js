import React from "react";
import { FaBookmark, FaMapMarkerAlt, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const RecruiterManageJob = () => {
  return (
    <div className="dashboard-main">
      <h3 className="dashboard-title">Manage Posted Jobs</h3>
      <div className="dashboard-content">
        <div className="manage-job-area">
          <div className="job-view-filter">
            <form action="">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-field">
                    <input type="text" placeholder="Search Name" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-field">
                    <select name="" id="">
                      <option value="">Choose Job Status</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-field">
                    <select name="" id="">
                      <option value="">Sort By Date</option>
                      <option value="latest">Latest</option>
                      <option value="old">Last</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="manage-job-table">
            <table width="100%">
              <thead>
                <tr>
                  <th className="title">Job Title</th>
                  <th className="status">Status</th>
                  <th className="date">Date</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody className="job-data">
                <tr className="data mb-20">
                  <td>
                    <div className="job-title">
                      <h5>Hiring Online English Teacher</h5>
                      <p>
                        {" "}
                        <span>
                          <FaMapMarkerAlt />{" "}
                        </span>{" "}
                        Dhanmondi{" "}
                        <span className="px-1">
                          <FaBookmark />
                        </span>
                        Hourly
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="job-status">Completed</div>
                  </td>
                  <td>03-09-2021</td>
                  <td>
                    <Link to="" className="btn edit">
                      {" "}
                      <FaPen />
                    </Link>
                    <Link to="" className="btn delete">
                      {" "}
                      <FaTrashAlt />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="job-title">
                      <h5>Hiring Online English Teacher</h5>
                      <p>
                        {" "}
                        <span>
                          <FaMapMarkerAlt />{" "}
                        </span>{" "}
                        Dhanmondi{" "}
                        <span className="px-1">
                          <FaBookmark />
                        </span>
                        Hourly
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="job-status pending">Pending</div>
                  </td>
                  <td>03-09-2021</td>
                  <td>
                    <Link to="" className="btn edit">
                      {" "}
                      <FaPen />
                    </Link>
                    <Link to="" className="btn delete">
                      {" "}
                      <FaTrashAlt />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterManageJob;
